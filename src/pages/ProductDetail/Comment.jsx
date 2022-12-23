import styles from "./productDetail.module.scss";
import moment from "moment/moment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postComments, getAllComments } from "../../redux/comment/commentsApi";
import { useEffect } from "react";

const Comment = ({ comment, replies, key }) => {
    const [rep, setRep] = useState(false);
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const allComments = useSelector((state) => state.comments.allComments.data);

    const [replyText, setReplyText] = useState("");

    const handleClickReply = () => {
        setRep(!rep);
        setReplyText("@" + comment.creator.name + " ");
    };
    const handleSubmitReply = (e) => {
        e.preventDefault();
        console.log(e.target[0].value);
        if (!user) {
            navigate("/account");
        } else {
            const data = {
                id: allComments[allComments.length - 1].id + 1,
                content: e.target[0].value,
                creator: {
                    id: user.id,
                    name: user.name,
                    phone: user.phone,
                },
                replyforId: comment.id,
                productId: comment.productId,
                create_date: moment().format("YYYY-MM-DD HH:mm:ss"),
            };
            console.log(data);
            postComments(dispatch, data);
            setRep(false);
        }
    };
    let body;
    if (comment.creator.phone === "0111111111") {
        body = (
            <div className={styles.comment}>
                <div className={styles.name}>
                    <div className={styles.avatarAdmin}>
                        {comment.creator.name[0]}
                    </div>
                    <span className="text-lime-700">
                        {comment.creator.name}
                    </span>
                </div>
                <div className={styles.cmtContent}>
                    <p>{comment.content}</p>
                </div>
                <div className={styles.date}>
                    <div className={styles.button} onClick={handleClickReply}>
                        Reply
                    </div>
                    <span>- {moment(comment.create_date).fromNow()}</span>
                </div>

                {rep && (
                    <form onSubmit={(e) => handleSubmitReply(e)}>
                        <input
                            className={styles.smallInput}
                            placeholder="Enter your reply..."
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                            id="reply"
                        ></input>
                        <button>Send</button>
                    </form>
                )}

                {replies.length > 0 &&
                    replies.map((reply) => (
                        <div className="bg-zinc-200 p-4 px-7 my-3">
                            <Comment comment={reply} replies={[]} />
                        </div>
                    ))}
            </div>
        );
    } else {
        body = (
            <div className={styles.comment}>
                <div className={styles.name}>
                    <div className={styles.avatar}>
                        {comment.creator.name[0]}
                    </div>
                    <span>{comment.creator.name}</span>
                </div>
                <div className={styles.cmtContent}>
                    <p>{comment.content}</p>
                </div>
                <div className={styles.date}>
                    <div className={styles.button} onClick={handleClickReply}>
                        Reply
                    </div>
                    <span>- {moment(comment.create_date).fromNow()}</span>
                </div>

                {rep && (
                    <form onSubmit={(e) => handleSubmitReply(e)}>
                        <input
                            className={styles.smallInput}
                            placeholder="Enter your reply..."
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                            id="reply"
                        ></input>
                        <button>Send</button>
                    </form>
                )}

                {replies.length > 0 &&
                    replies.map((reply) => (
                        <div className="bg-zinc-200 p-4 px-7 my-3">
                            <Comment comment={reply} replies={[]} />
                        </div>
                    ))}
            </div>
        );
    }
    return <>{body}</>;
};
export default Comment;

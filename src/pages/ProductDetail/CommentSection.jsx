import styles from "./productDetail.module.scss";
import Comment from "./Comment";
import Divider from "../../components/Divider";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postComments, getAllComments } from "../../redux/comment/commentsApi";
import { useEffect } from "react";
import moment from "moment/moment";

const CommentSection = () => {
    const initComment = useSelector((state) => state.comments.comment.data);
    const product = useSelector((state) => state.products.productDetail.data);
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            const res = await getAllComments(dispatch);
        }
        fetchData();
    }, []);
    const allComments = useSelector((state) => state.comments.allComments.data);
    const numberOfComments = initComment.length;
    let checked = false;
    const handleChangeCheckbox = (e) => {
        checked = e.target.checked;
        console.log(checked);
    };
    const getReplies = (id) => {
        return initComment
            .filter((item) => item.replyforId === parseInt(id))
            .sort(
                (a, b) =>
                    new Date(a.create_date).getTime() -
                    new Date(b.create_date).getTime()
            );
    };
    const handleSendComment = (e) => {
        e.preventDefault();
        const content = e.target[0].value;
        console.log(content);
        if (!user) {
            navigate("/account");
        } else {
            console.log(allComments[allComments.length - 1].id + 1);
            const data = {
                id: allComments[allComments.length - 1].id + 1,
                content: content,
                creator: {
                    id: user.id,
                    name: user.name,
                    phone: user.phone,
                },
                replyforId: null,
                productId: product.id,
                create_date: moment().format("YYYY-MM-DD HH:mm:ss"),
            };
            console.log(data);
            postComments(dispatch, data);
        }
    };
    return (
        <div className={styles.commentSection}>
            <form
                className={styles.bigInput}
                onSubmit={(e) => handleSendComment(e)}
            >
                <textarea type="text" placeholder="Enter your comment..." />
                <button>Send</button>
            </form>

            <div className={styles.counter}>
                <p>{numberOfComments} comments</p>

                <div className={styles.checkbox}>
                    <input
                        type="checkbox"
                        id="cb"
                        onChange={handleChangeCheckbox}
                    ></input>
                    <label for="cb">Show comments with replies</label>
                </div>
            </div>
            <Divider />
            <div className={styles.content}>
                {initComment.map((cmt, index) => {
                    if (cmt.replyforId === null) {
                        return (
                            <Comment
                                comment={cmt}
                                replies={getReplies(cmt.id)}
                                key={cmt.id}
                            />
                        );
                    }
                })}
            </div>
        </div>
    );
};
export default CommentSection;

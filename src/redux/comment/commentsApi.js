import { getComment, postComment, getAllComment } from './commentsSlice';
import { commentService } from '../../service/comment.service';

export const getComments = async (dispatch, id) => {
    let res = await commentService.getAllCommentByProductId(id);
    dispatch(getComment(res));
};
export const postComments = async (dispatch, data) => {
    let res = await commentService.postComment(data);
    dispatch(postComment(res));
};
export const getAllComments = async (dispatch) => {
    let res = await commentService.getAllComment();
    dispatch(getAllComment(res));
};

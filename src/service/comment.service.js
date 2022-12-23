import { axiosClient } from '../api';

export const commentService = {
    getAllCommentByProductId(id) {
        return axiosClient.get(`/comments?productId=${id}`);
    },
    postComment(data) {
        return axiosClient.post('/comments', data);
    },
    getAllComment() {
        return axiosClient.get('/comments');
    }
}
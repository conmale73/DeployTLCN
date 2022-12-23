import { createSlice } from '@reduxjs/toolkit';

export const comments = createSlice({
    name: 'comments',
    initialState: {
        comment: {
            data: [],
        },
        allComments: {
            data: [],
        }
    },
    reducers: {
        getComment: (state, action) => {
            state.comment.data = action.payload;
        },
        postComment: (state, action) => {
            state.comment.data = [...state.comment.data, action.payload];
        },
        getAllComment: (state, action) => {
            state.allComments.data = action.payload;
        }
    },
});
export const { getComment, postComment, getAllComment } = comments.actions;
export default comments.reducer;

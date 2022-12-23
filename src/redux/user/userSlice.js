import { createSlice } from '@reduxjs/toolkit';

const user = localStorage.getItem('user') !== null ? JSON.parse(localStorage.getItem('user')) : {};
export const users = createSlice({
    name: 'users',
    initialState: {
        user: {
            //data: [],
            data: user,
        },
    },
    reducers: {
        getUser: (state, action) => {
            state.user.data = action.payload;
        },
        updateUser: (state, action) => {
            state.user.data = action.payload;
            
        },
    },
});
export const { updateUser } = users.actions;
export default users.reducer;

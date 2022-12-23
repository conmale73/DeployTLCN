import { createSlice } from '@reduxjs/toolkit';

const order = localStorage.getItem('order') !== null ? JSON.parse(localStorage.getItem('order')) : {};
export const orders = createSlice({
    name: 'orders',
    initialState: {
        order: {
            data: [],
        },
    },
    reducers: {
        getOrderByPhone: (state, action) => {
            state.order.data = action.payload;
        },
        postOrder: (state, action) => {
            state.order.data = action.payload;
            const orderData = JSON.stringify(action.payload)
            if(!action.payload.payment.paid) {
                localStorage.setItem("order", orderData)
            }
        },
        updateOrder: (state, action) => {
            state.order.data = action.payload;
        }
    },
});
export const { getOrderByPhone ,postOrder } = orders.actions;
export default orders.reducer;

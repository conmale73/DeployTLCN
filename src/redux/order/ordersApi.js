import { postOrder, getOrderByPhone } from './orderSlice';
import { orderService } from '../../service/order.service';

export const postOrders = async (dispatch, data) => {
    let res = await orderService.postOrder(data);
    dispatch(postOrder(data));
};
export const getHistoryOrdersByPhone = async (dispatch, phone) => {
    let res = await orderService.getAllOrderByPhone(phone);
    dispatch(getOrderByPhone(res));
};
export const updateHistoryOrders = async (dispatch, data) => {
    let res = await orderService.updateOrder(data);
    // dispatch(getHistoryOrder(res));
};
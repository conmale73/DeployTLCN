import { getHistoryOrder } from './historyOrdersSlice';
import { orderService } from '../../service/order.service';

export const getHistoryOrders = async (dispatch, phone) => {
    let res = await orderService.getAllOrderByPhone(phone);
    dispatch(getHistoryOrder(res));
};
export const updateHistoryOrders = async (dispatch, data) => {
    let res = await orderService.updateHistoryOrder(data);
    // dispatch(getHistoryOrder(res));
};

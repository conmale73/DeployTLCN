import { axiosClient } from '../api';

export const orderService = {
    getAllOrder() {
        return axiosClient.get(`/orders/`);
    },
    getAllOrderByPhone(phone) {
        return axiosClient.get(`/orders?customer.phone=${phone}`);
    },
    postOrder(data) {
        return axiosClient.post(`/orders/`, data);
    },
    updateOrder(id, data) {
        return axiosClient.patch(`/orders/${id}`, data);
    },
};

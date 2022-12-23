import { axiosClient } from '../api';

export const userServices = {
    getUserByID: (id) => {
        return axiosClient.get(`/users?id=${id}`);
    },
    getUserByPhone: (phone) => {
        return axiosClient.get(`/users?phone=${phone}`);
    },
    updateUser: (data) => {
        return axiosClient.patch(`/users/${data.id}`, data);
    },
    createUser: (data) => {
        return axiosClient.post(`/users`, data);
    }
};

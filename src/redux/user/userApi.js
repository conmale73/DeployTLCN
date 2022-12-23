import { updateUser } from './userSlice';
import { userServices } from '../../service/user.service';

export const getUser = async (dispatch, phone) => {
    let res = await userServices.getUserByPhone(phone);
    dispatch(getUser(res.data));
}
export const updateUsers = async (dispatch, data) => {
    let res = await userServices.updateUser(data);
    dispatch(updateUser(data));
};

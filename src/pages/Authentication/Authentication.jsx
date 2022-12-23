import styles from "./authentication.module.scss";
import { useEffect } from 'react';
import Login from "./Login";
import Profile from "./Profile";
import { useDispatch } from "react-redux";
import { getHistoryOrders } from '../../redux/history/historyOrdersApi'

const Authentication = (title) => {
    document.title = title.title;

    const user = JSON.parse(localStorage.getItem("user"));
    const dispatch = useDispatch();

    useEffect(() => {
        getHistoryOrders(dispatch, user?.phone);
    }, [user?.phone]);
    return (
        <div className={styles.authentication}>
            
            {user ? <Profile /> : <Login />}
        </div>
    );
};
export default Authentication;

import { useState, useEffect } from 'react';
import OrderTable from './OrderTable';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';
import EmptyOrder from './EmptyOrder';
import { orderService } from '../../../service/order.service';
import { getHistoryOrdersByPhone } from '../../../redux/order/ordersApi'
const Orders = () => {
    const loadHistoryOrder = useSelector((state) => state.historyOrders.historyOrder.data);
    const check = loadHistoryOrder.length === 0;

    return (
        <div>
            {check ? (
                <EmptyOrder />
            ) : (
                <OrderTable data={loadHistoryOrder}/>
            )}
        </div>
    )
}
export default Orders;
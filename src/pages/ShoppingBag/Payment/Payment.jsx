import styles from "./payment.module.scss";
import { useState } from "react";
import Divider from "../../../components/Divider";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import moment from "moment";
import { useCart } from "../../../hooks";
import { useDispatch } from "react-redux";
import { clearCart } from "../../../redux/shopping-cart/cartItemsSlide";
import { postOrders } from "../../../redux/order/ordersApi";
import { Link, useNavigate } from "react-router-dom";

const Payment = (total) => {
    const cartData = useCart();
    const { cartItems, totalPrice, totalQuantity } = cartData;
    const user = JSON.parse(localStorage.getItem("user"));

    const amount = totalPrice;
    const currency = "USD";
    const style = { layout: "vertical" };
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        if (
            user.address.homeAdd === "" ||
            user.address.ward === "" ||
            user.address.district === "" ||
            user.address.city === ""
        ) {
            alert("Please update your address before checkout");
            navigate("/account")
        }
    };
    const handleApprove = (data, actions) => {
        const dataPost = {
            id: data.orderID,
            totalPrice: amount,
            totalQuantity: totalQuantity,
            customer: user,
            status: "Order Placed",
            order_items: {
                data: cartItems,
            },
            createdAt: moment().format("MM/DD/YYYY"),
        };
        postOrders(dispatch, dataPost);
        dispatch(clearCart());
    };

    return (
        <div className={styles.payment}>
            <h1>Order Summary</h1>
            <div className={styles.subtotal}>
                Item Sub-total
                <span>${total.total}</span>
            </div>
            <Divider />
            <div className={styles.total}>
                Total
                <span>${total.total}</span>
            </div>
            <Divider />
            {user ? (
                <PayPalScriptProvider
                    options={{
                        "client-id":
                            "AbKfUVh1wgXXQz4e2R5vwuFPBIVHv3sxu6LDGSqxv_h-A8CIrcmOU3MbJf51ox9Nl3n9GHf5rahm35dr",
                        currency: currency,
                    }}
                >
                    <PayPalButtons
                        onClick={handleClick}
                        style={style}
                        disabled={false}
                        forceReRender={[amount, currency, style]}
                        fundingSource={undefined}
                        createOrder={(data, actions) => {
                            return actions.order
                                .create({
                                    purchase_units: [
                                        {
                                            amount: {
                                                currency_code: currency,
                                                value: amount,
                                            },
                                        },
                                    ],
                                })
                                .then((orderId) => {
                                    // Your code here after create the order
                                    return orderId;
                                });
                        }}
                        onApprove={function (data, actions) {
                            handleApprove(data, actions);
                        }}
                    />
                </PayPalScriptProvider>
            ) : (
                <Link to="/account">
                    <button className={styles.button}>
                        Proceed to purchase
                    </button>
                </Link>
            )}
        </div>
    );
};
export default Payment;

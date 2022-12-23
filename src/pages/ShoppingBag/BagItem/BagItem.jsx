import styles from "./bagItem.module.scss";
import Divider from "../../../components/Divider";
import { useState } from "react";
import { Modal, Button } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { numberWithCommas } from "../../../utils";
import { CounterQuantity } from "../../../components/Selector";
import {
    updateItem,
    removeItem,
} from "../../../redux/shopping-cart/cartItemsSlide";

const BagItem = (props) => {
    const [quantity, setQuantity] = useState(1);
    const cartItems = useSelector((state) => state.cartItems.value);
    const dispatch = useDispatch();

    const removeCartItem = () => {
        cartItems.forEach((item) => {
            if (item.slug === props.slug) {
                dispatch(removeItem(item));
            }
        });
    };
    const updateCartItem = (value) => {
        cartItems.forEach((item) => {
            if (item.slug === props.slug) {
                dispatch(updateItem({ ...item, quantity: value }));
            }
        });
    };

    return (
        <div className={styles.bagItem}>
            <div className={styles.container}>
                <div className={styles.image}>
                    <img src={props.image} alt={props.name} />
                </div>

                <div className={styles.bagItemInfo}>
                    <div className={styles.designer}>{props.designer}</div>
                    <div className={styles.name}>{props.name}</div>
                    <div className={styles.price}>
                        $
                        {numberWithCommas(
                            props.price - (props.price * props.discount) / 100
                        )}
                        <span className={styles.priceBefore}>
                            ${numberWithCommas(props.price)}
                        </span>
                        <span>{props.discount}%</span>
                    </div>
                    {props.selectedSize ? (
                        <div className={styles.size}>
                            Size: {props.selectedSize?.label}
                        </div>
                    ) : (
                        <></>
                    )}

                    <div className={styles.quantity}>
                        <div className={styles.quantityTitle}>Quantity:</div>
                        <CounterQuantity
                            onChange={(value) => updateCartItem(value)}
                            value={props.quantity}
                        />
                    </div>
                    <div className={styles.removeItem} onClick={removeCartItem}>
                        Remove item
                    </div>
                </div>
            </div>
            <Divider />
        </div>
    );
};
export default BagItem;

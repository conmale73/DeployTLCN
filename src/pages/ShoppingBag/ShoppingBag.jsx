import styles from "./shoppingBag.module.scss";
import { useState, useEffect } from "react";
import Intro from "../../components/Intro";
import Divider from "../../components/Divider";
import BagItem from "./BagItem";
import Payment from "./Payment";
import { useSelector } from "react-redux";
import EmptyBag from "./EmptyBag";
import { useCart } from "../../hooks";

const ShoppingBag = (title) => {
    document.title = title.title;
    const cartData = useCart();
    const cartState = useSelector((state) => state.cartItems.value);
    const { cartItems, totalPrice, totalQuantity } = cartData;

    const [count, setCount] = useState(cartItems.length);
    const [total, setTotal] = useState(0);

    console.log(cartItems);
    console.log(totalPrice);

    const handleRemoveAll = () => {
        localStorage.removeItem("cartItems");
        window.location.reload();
    }
    
    return cartState.length ? (
        <div className={styles.shoppingBag}>
            <Intro
                title="Shopping Bag"
                content={`${count}` + " items"}
                links={[]}
            />
            <Divider />
            <div className={styles.container}>
                <div className={styles.bagItems}>
                    {cartItems.map((item, index) => {
                        return (
                            <>
                                <BagItem key={index} {...item} />
                            </>
                        );
                    })}
                </div>
                <div className={styles.payment}>
                    <Payment total={totalPrice} />
                </div>
            </div>
            <a onClick={handleRemoveAll}>Remove all items</a>
        </div>
    ) : (
        <EmptyBag />
    );
};
export default ShoppingBag;

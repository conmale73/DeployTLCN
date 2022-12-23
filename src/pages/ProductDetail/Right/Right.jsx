import styles from "./right.module.scss";
import SizePicker from "../../../components/SizePicker";
import { React, useState, useEffect } from "react";
import Select from "react-select";
import { Modal, Button, Alert } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { numberWithCommas } from "../../../utils";
import { addItem } from "../../../redux/shopping-cart/cartItemsSlide";
function AlertMess({ type, mess }) {
    return (
        <div>
            {type && (
                <Alert
                    color={type}
                    onDismiss={function onDismiss() {
                        return;
                    }}
                >
                    <span>{mess}</span>
                </Alert>
            )}
        </div>
    );
}

const Right = (props) => {
    const initProductDetail = useSelector(
        (state) => state.products.productDetail.data
    );
    const {
        id,
        name,
        image,
        designer,
        discount,
        slug,
        price,
        description,
        quantity,
        size,
    } = initProductDetail;

    const [alertMess, setAlertMess] = useState({});
    const [selectedSize, setSelectedSize] = useState();
    const dispatch = useDispatch();

    const handleChange = (selectedOption) => {
        setSelectedSize(selectedOption);
        console.log(`Option selected:`, selectedOption);
        console.log(`Selected Size:`, selectedSize);
    };
    const addToBag = (data) => {
        if (dispatch(addItem(data))) {
            console.log(productForCart);
            setAlertMess({
                type: "success",
                mess: "Add to bag successfully!!",
            });

        } else {
            setAlertMess({
                type: "failure",
                mess: "Change a few things up and try submitting again.",
            });
        }

        setTimeout(() => setAlertMess({}), 1500);
    };

    let productForCart = {
        id,
        name,
        image,
        designer,
        price,
        discount,
        slug,
        quantity: 1,
        selectedSize,
    };

    const handleAddToBag = () => {
        addToBag(productForCart);
    };
    return (
        <div className={styles.right}>
            <div className={styles.container}>
                <div className={styles.designer}>{designer}</div>
                <div className={styles.name}>{name}</div>
                <div className={styles.quantity}>Quantity: {quantity}</div>
                <div className={styles.price}>
                    ${numberWithCommas((price * (100 - discount)) / 100)}
                    <span className={styles.priceBefore}>
                        ${numberWithCommas(price)}
                    </span>
                    <span>{discount}%</span>
                </div>
                {size ? (
                    <div className={styles.size}>
                        Size
                        <Select
                            options={size}
                            onChange={handleChange}
                        />
                    </div>
                ) : (
                    <></>
                )}

                <div className={styles.description}>
                    Description:
                    {description}
                </div>
                <AlertMess {...alertMess} />
                <div className={styles.button} onClick={handleAddToBag}>
                    Add to Bag
                </div>
            </div>
        </div>
    );
};
export default Right;

import styles from "./sizePicker.module.scss";
import { useState, useEffect } from "react";
const SizePicker = ({props}) => {
    const sizes = props;
    return (
        <div className={styles.sizePicker}>
            {sizes.map((size, index) => {
                return (
                    <div className={styles.sizeItem} key={index}>{size.label}</div>
                );
            })}
        </div>
    );
}
export default SizePicker;
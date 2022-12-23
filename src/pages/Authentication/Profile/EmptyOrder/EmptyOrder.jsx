import styles from "./emptyOrder.module.scss";

const EmptyOrder = () => {
    return (
        <div className={styles.emptyOrder}>
            <img
                className={styles.emptyIcon}
                src="images/shoppingBags-84d06fd4.jpg"
            ></img>
            <h1 className={styles.emptyBag__title}>You have no order</h1>
            <p className={styles.emptyBag__text}>
                Once you have checked out you can view and track your order here.
            </p>
        </div>
    );
};
export default EmptyOrder;

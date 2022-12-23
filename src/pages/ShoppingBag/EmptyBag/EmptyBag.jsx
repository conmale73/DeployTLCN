import styles from "./emptyBag.module.scss";

const EmptyBag = () => {
    return (
        <div className={styles.emptyBag}>
            <img className={styles.emptyIcon} src="images/shoppingBags-84d06fd4.jpg"></img>
            <h1 className={styles.emptyBag__title}>Your bag is empty</h1>
            <p className={styles.emptyBag__text}>
                Looks like you haven't added anything to your bag yet.
            </p>
        </div>
    );
};
export default EmptyBag;

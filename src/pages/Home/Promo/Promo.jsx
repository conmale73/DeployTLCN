import styles from "./promo.module.scss";

const Promos = [
    {
        img: "//cache.mrporter.com/content/images/cms/ycm/resource/blob/23570388/d52566e81c6d7df03491f610fdf5dd82/t1-1--data.jpg/w1500_q80.jpg",
        title: "Leather jackets: biker, suede and more"
    },
    {
        img: "//cache.mrporter.com/content/images/cms/ycm/resource/blob/23570392/fdb38d9790fd89697c4bd66ab169f7ca/t2-1--data.jpg/w1500_q80.jpg",
        title: "ALL-TIME CLASSICS: OUR FAVOURITE CHELSEA BOOTS"
    },
    {
        img: "//cache.mrporter.com/content/images/cms/ycm/resource/blob/23570396/3eec993bac0f2f446bc8372400fdb139/t3-1--data.jpg/w1500_q80.jpg",
        title: "SWEATERS, CARDIGANS AND MORE KNITS TO KNOW"
    },
];
const Promo = () => {
    return (
        <div className={styles.promo}>
            {Promos.map((promo, index) => (
                <a className={styles.container}>
                    <img key={index} src={promo.img}></img>
                    <div className={styles.title}>{promo.title}</div>
                </a>
            ))}
        </div>
    );
};
export default Promo;

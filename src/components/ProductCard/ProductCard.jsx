import styles from "./productCard.module.scss";
import { Link } from "react-router-dom";

const ProductInfo = {
    name: "Distressed Denim Jacket",
    description:
        "RRL's denim jacket nods to the Western aesthetics that inspire the label. Made from denim in a rusty brown wash, it's cut for a regular fit and has classic patch pockets on the front.",
    price: 475,
    image: "https://cache.mrporter.com/variants/images/1647597286496534/in/w358_q60.jpg",
    category: ["clothing", "jackets"],
    designer: "RRL",
    slug: "/clothing/rrl-distressed-denim-jacket",
    size: ["S", "M", "L", "XL"],
};

const ProductCard = (props) => {
    return (
        <Link to={`/${props.category}/${props.slug}`}>
            <div className={styles.productCard}>
                <div className={styles.productImage}>
                    <img src={props.image}></img>
                </div>
                <div className={styles.productTitle}>{props.name}</div>
                <div className={styles.productDescription}>
                    {props.description}
                </div>
                <div className={styles.productPrice}>${props.price}</div>
                <div className={styles.buttonContainer}>
                    <div className={styles.productButton}>Buy now</div>
                </div>
            </div>
        </Link>
    );
};
export default ProductCard;

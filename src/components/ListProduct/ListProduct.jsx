import styles from './listProduct.module.scss';
import ProductCard from '../ProductCard';
import SlideProduct from '../SlideProduct';

const ListProduct = (props) => {
    const isSlide = props.isSlide;
    const products = props.products;

    return (
        <>
            {isSlide ? (
                <div className="slideproduct">
                    <SlideProduct products={products}></SlideProduct>
                </div>
            ) : (
                <div className={styles.listProduct}>
                    {products.map((product) => (
                        <ProductCard {...product} />
                    ))}
                </div>
            )}

        </>
    );

}
export default ListProduct;
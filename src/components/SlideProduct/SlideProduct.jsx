import ProductCard from "../ProductCard";
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import Slider from "react-slick";
import styles from "./slideproduct.scss";

const SlideProduct = (props) => {
    const products = props.products;
    return (
        <div className={styles.slidebar}>
            <div className="w-full">
                <Slider
                    slidesToShow={5}
                    slidesToScroll={5}
                    nextArrow={<NextArrow />}
                    prevArrow={<PrevArrow />}
                >
                    {products.map((product) => (
                        <div className="w-full" key={product.title}>
                            <div className="mx-4">
                                <ProductCard key={product.title} {...product} />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};
export default SlideProduct;

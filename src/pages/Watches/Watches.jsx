import styles from "./watches.module.scss";
import Intro from "../../components/Intro";
import Divider from "../../components/Divider";
import Filter from "../../components/Filter";
import ProductCard from "../../components/ProductCard";
import ListProduct from "../../components/ListProduct";
import { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getAllProductByCategory } from '../../redux/product/productsApi';
import { productService } from '../../service';

const IntroContent = {
    title: "Watches",
    content:
        "Our selection of luxury watches brings together iconic designs and the latest limited editions. You'll find esteemed names including Vacheron Constantin, IWC Schaffhausen and Cartier, as well as the most sought-after independent watchmakers such as Ressence, Bovet and Laurent Ferrier. Shop the full collection from chronographs to dress watches below, and don't forget our wide range of straps, winders and travel cases. As an authorised retail partner, we offer a guarantee of authenticity, secure delivery and a convenient part exchange programme with trusted pre-owned specialist, Watchfinder & Co.",
    links: [
        {
            content: "Rolex",
            key: "Rolex",
        },

        {
            content: "Hublot",
            key: "Hublot",
        },
        {
            content: "Omega",
            key: "Omega",
        },
    ],
};

const Watches = (title) => {
    document.title = title.title;

    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const results = products.length;

    useEffect(() => {
        async function fetchData() {
            const response = await productService.getProductByCategory("watches");
            
            if (!response.ok) {
                console.log(response);
            }
            setProducts(response);
        }
        fetchData();
        
    }, []);
    return (
        <div className={styles.watches}>
            <div className={styles.introBackground}>
                <Intro
                    title={IntroContent.title}
                    content={IntroContent.content}
                    links={IntroContent.links}
                ></Intro>
            </div>

            <Divider />
            <div className={styles.filterProducts}>
                <Filter results={results}/>
                <ListProduct products={products} isSlide={false}></ListProduct>
            </div>
        </div>
    );
};
export default Watches;

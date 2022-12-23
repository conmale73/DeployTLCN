import styles from "./grooming.module.scss";
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
    title: "Grooming",
    content:
        "The modern man's grooming regime extends beyond shampoo and soap. Look your best every day with the finest skincare, haircare and men's fragrance from the world's most exclusive brands.",
    links: [
        {
            content: "Skincare",
            key: "Skincare",
        },

        {
            content: "Haircare",
            key: "Haircare",
        },
        {
            content: "Fragance",
            key: "Fragance",
        },
        {
            content: "Shaving",
            key: "Shaving",
        },
    ],
};

const Grooming = (title) => {
    document.title = title.title;
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const results = products.length;

    useEffect(() => {
        async function fetchData() {
            const response = await productService.getProductByCategory("grooming");
            
            if (!response.ok) {
                console.log(response);
            }
            setProducts(response);
        }
        fetchData();
        
    }, []);
    return (
        <div className={styles.grooming}>
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
export default Grooming;

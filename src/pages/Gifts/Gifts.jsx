import styles from "./gifts.module.scss";
import Intro from "../../components/Intro";
import Divider from "../../components/Divider";
import Filter from "../../components/Filter";
import ProductCard from "../../components/ProductCard";
import ListProduct from "../../components/ListProduct";
import { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductByCategory } from "../../redux/product/productsApi";
import { productService } from "../../service";
const IntroContent = {
    title: "Gifts",
    content:
        "The holiday season is here again. Looking for a special gift for him? From luxury stocking fillers to our selection of this year’s most-wanted designer gifts and watches, we’ve got everything that makes a modern man tick at MR PORTER.",
    links: [
        {
            content: "Gift for kids",
            key: "kids",
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
            const response = await productService.getProductByCategory("gifts");
            
            if (!response.ok) {
                console.log(response);
            }
            setProducts(response);
        }
        fetchData();
        
    }, []);
    return (
        <div className={styles.gifts}>
            <Intro
                title={IntroContent.title}
                content={IntroContent.content}
                links={IntroContent.links}
            ></Intro>
            <Divider />
            <div className={styles.filterProducts}>
                <Filter results={results}/>
                <ListProduct products={products} isSlide={false}></ListProduct>
            </div>
        </div>
    );
};
export default Watches;

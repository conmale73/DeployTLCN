import styles from "./sale.module.scss";
import ProductCard from "../../../components/ProductCard";
import ListProduct from "../../../components/ListProduct";
import { useState, useEffect } from "react";
import { productService } from "../../../service/product.service";
const Sale = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await productService.getAllProducts();
            
            if (!response.ok) {
                console.log(response);
            }
            setProducts(response);
        }
        fetchData();
        
    }, []);
    return (
        <div className={styles.sale}>
            <div className={styles.title}>Sale Products</div>
            <ListProduct products={products} isSlide={false}></ListProduct>
        </div>
    );
};
export default Sale;

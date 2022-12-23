import styles from './new.module.scss';
import ProductCard from '../../../components/ProductCard';
import ListProduct from '../../../components/ListProduct';
import { useState, useEffect } from "react";
import { productService } from '../../../service/product.service';
const New = () => {
    const [products, setProducts] = useState([]);
    
    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await fetch(`https://json.conmale73.repl.co/products`);
            
    //         if (!response.ok) {
    //             console.log("error:", response);
    //             return;
    //           }
    //         const data = await response.json();
    //         setProducts(data);
    //     }
    //     fetchData();
        
    // }, []);
    useEffect(() => {
        async function fetchData() {
            const response = await productService.getNewProducts();
            
            if (!response.ok) {
                console.log(response);
            }
            setProducts(response);
        }
        fetchData();
        
    }, []);
    return (
        <div className={styles.new}>
            <div className={styles.title}>New Products</div>
            <ListProduct products={products} isSlide={false}></ListProduct>
        </div>
    );
}
export default New;
import styles from "./productDetail.module.scss";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Left from "./Left";
import Right from "./Right";
import Divider from "../../components/Divider";
import { productService } from "../../service/product.service";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailApi } from "../../redux/product/productsApi";
import { getComments } from "../../redux/comment/commentsApi";
import CommentSection from "./CommentSection";
const ProductDetail = () => {
    const { productSlug } = useParams();
    const productName = useSelector((state) => state.products.productDetail.data.name);
    document.title = productName;
    const productId = useSelector((state) => state.products.productDetail.data.id);
    const dispatch = useDispatch();
    getProductDetailApi(dispatch, productSlug);
    getComments(dispatch, productId);
    
    return (
        <div className={styles.productDetail}>
            <div className={styles.infoContainer}>
                <div className={styles.left}>
                    <Left />
                </div>
                <div className={styles.right}>
                    <Right />
                </div>
            </div>
            <Divider />
            <CommentSection/>
        </div>
    );
};
export default ProductDetail;

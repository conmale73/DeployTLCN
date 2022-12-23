import styles from "./left.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "../../../components/Slick/NextArrow";
import PrevArrow from "../../../components/Slick/PrevArrow";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

const Left = (props) => {
    const settings = {
        customPaging: function (i) {
            return (
                <a className={styles.smallImg}>
                    <img src="https://cache.mrporter.com/variants/images/1647597286496534/in/w358_q60.jpg" />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    const initProductDetail = useSelector((state) => state.products.productDetail.data);
    const { image, gallery } = initProductDetail;
    
    return (
        <div className={styles.left}>

            <div className={styles.productImg}>
                {/* {product.map((item) => (
                    <img src={item.image}></img>
                ))} */}
                <img src={image}></img>
            </div>
        </div>
    );
};
export default Left;

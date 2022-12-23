import styles from "./search.module.scss";
import { useState, useEffect } from "react";
import { clsx } from "clsx";
import { Link, useNavigate } from "react-router-dom";
import ListProduct from "../../components/ListProduct";
import Intro from "../../components/Intro";
import Divider from "../../components/Divider";
import ProductCard from "../../components/ProductCard";
import Filter from "../../components/Filter";
import { getResult, removeResult } from "../../redux/search/searchApi";
import { useDispatch, useSelector } from "react-redux";
const inputSearch = localStorage.getItem("inputSearch").toString();
const IntroContent = {
    title: "Search result for " + `${inputSearch}`,
    content: "",
    links: [],
};

const Search = (title) => {
    document.title = title.title;
    const products = useSelector((state) => state.search.search.data);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const config = {
        clothing: 'clothing',
        clothes: 'clothing',
        shoes: 'shoes',
        accessory: 'accessories',
        accessories: 'accessories',
        watches: 'watches',
        watch: 'watches',
        gift: 'gifts',
        gifts: 'gifts',
        fragance: 'grooming',
        skincare: 'grooming',
        grooming: 'grooming',

    }
    function match(input, obj) {
        var matched = Object.keys(obj).find((key) => input.toLowerCase().search(key) > -1);
        return obj[matched] || null;
    }
    useEffect(() => {
        async function fetchData() {
            let getValue = inputSearch.replace(/\s/g, '');
            let url = match(getValue, config);
            if (url === null) {
                getResult(dispatch, inputSearch);
            }
            else {
                navigate(`/${url}`);
            }
            
        }
        fetchData();
    }, []);
    return (
        <div className={styles.search}>
            <Intro
                title={IntroContent.title}
                content={IntroContent.content}
                links={IntroContent.links}
            ></Intro>
            <Divider />
            <div className={styles.filterProducts}>
                {!products ? (
                    <div className={styles.notFound}>No result found</div>
                ) : (
                    <>
                        <Filter results={products.length}/>
                        <ListProduct
                            products={products}
                            isSlide={false}
                        ></ListProduct>
                    </>
                )}
            </div>
        </div>
    );
};
export default Search;

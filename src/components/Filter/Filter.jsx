import styles from "./filter.module.scss";
import { useState } from "react";
import { ChevronDown } from "react-bootstrap-icons";
import { useRef,useEffect } from 'react';
import {  useDispatch } from 'react-redux';
import { HandleFilter } from '../../redux/product/productsApi';

const FilterOptions = ["Price", "Color", "Size", "Designer"];
const Filter = ({results, handle, data}) => {
    const contain = useRef();
    const dispatch = useDispatch();

    useEffect(() => {
        
        HandleFilter(dispatch,[])
       
         // eslint-disable-next-line react-hooks/exhaustive-deps
       }, []);

    return (
        <div className={styles.filter}>
            <div className="">{results} results</div>
            {FilterOptions.map((option) => (
                <div className={styles.option}>
                    {option}
                    <span>
                        <ChevronDown />
                    </span>
                    <div className={styles.label}></div>
                </div>
            ))}
        </div>
    );
};
export default Filter;

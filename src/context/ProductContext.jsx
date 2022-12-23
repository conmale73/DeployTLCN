import { createContext, useReducer } from "react";
import { ProductReducer } from "../reducers/ProductReducer";
import { apiUrl } from "./constants";
import axios from "axios";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
    //State
    const [productState, dispatch] = useReducer(ProductReducer, {
        products: [],
        productsLoading: true,
    });

    //Get all posts
    const getProducts = async (keyword = " ") => {
        try {
            const response = await axios.get(
                `${apiUrl}/products?keyword=${keyword}`
            );
            if (response.data.success) {
                dispatch({
                    type: "PRODUCT_LOADED_SUCCESS",
                    payload: response.data.products,
                });
            }
        } catch (error) {
            dispatch({ type: "PRODUCT_LOADED_FAIL" });
        }
    };
    //Get all posts
    const getProductsAll = async () => {
        try {
            const response = await axios.get(`${apiUrl}/products`);
            if (response.data.success) {
                dispatch({
                    type: "PRODUCT_LOADED_SUCCESS",
                    payload: response.data.products,
                });
            }
        } catch (error) {
            dispatch({ type: "PRODUCT_LOADED_FAIL" });
        }
    };

    //Add Cart
    const AddProduct = async () => {
        try {
            const response = await axios.get(`${apiUrl}/products`);
            if (response.data.success) {
                dispatch({
                    type: "ADD_PRODUCT",
                    payload: response.data.newProduct,
                });
                return response.data;
            }
        } catch (error) {
            return error.response.data
                ? error.response.data
                : { success: false, message: "Server error" };
        }
    };

    //Product context data
    const productContextData = {
        productState,
        getProducts,
        getProductsAll,
        AddProduct,
    };

    return (
        <ProductContext.Provider value={productContextData}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;

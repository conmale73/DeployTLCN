import { axiosClient } from '../api';

export const productService = {
    getProducts(page, limit) {
        return axiosClient.get(`/products/?_page=${page}&_limit=${limit}`);
    },
    getAllProducts() {
        return axiosClient.get(`/products/`);
    },
    getProduct(id) {
        return axiosClient.get(`/products?id=${id}`);
    },
    getProductByName(name) {
        return axiosClient.get(`/products/${name}`);
    },
    getNewProducts() {
        return axiosClient.get(`/products?new=true`);
    },
    getProductByCategory(category) {
        return axiosClient.get(`/products/?category=${category}`);
    },
    getProductBySlug(slug) {
        return axiosClient.get(`/products?slug=${slug}`);
    },
    
    queryProduct() {
        const query = Array.from(arguments)
            .map((param) => {
                return `${param[0]}=${param[1]}`;
            })
            .join('&');
        return axiosClient.get(`/products/?${query}`);
    },
};

export const ProductReducer = (state, action) => {
	const {
		type,
		payload
	} = action

	switch (type) {
        case'PRODUCT_LOADED_SUCCESS':
            return{
            ...state,
            products: payload,
            productsLoading: false
            }
            
        case'PRODUCT_LOADED_FAIL':
            return{
            ...state,
            products: [],
            productsLoading: false
            }
		default:
			return state
	}
}
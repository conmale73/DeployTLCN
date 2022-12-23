export const ProductDetailReducer = (state, action) => {
	const {
		type,
		payload
	} = action

	switch (type) {
        case'PRODUCT_LOADED_SUCCESS':
            return{
            ...state,
            productDetail: payload,
            productDetailLoading: false
            }
            
        case'PRODUCT_LOADED_FAIL':
            return{
            ...state,
            productDetail: [],
            productDetailLoading: false
            }
		default:
			return state
	}
}
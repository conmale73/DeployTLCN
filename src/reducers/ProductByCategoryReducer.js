export const ProductByCategoryReducer = (state, action) => {
	const {
		type,
		payload
	} = action

	switch (type) {
        case'PRODUCT_LOADED_SUCCESS':
            return{
            ...state,
            productsByCategory: payload,
            productsByCategoryLoading: false
            }
            
        case'PRODUCT_LOADED_FAIL':
            return{
            ...state,
            productsByCategory: [],
            productsByCategoryLoading: false
            }
		default:
			return state
	}
}
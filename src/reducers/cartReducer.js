export const CartReducer = (state, action) => {
	const {
		type,
		payload
	} = action

	switch (type) {
        case'CART_SUCCESS':
            return{
            ...state,
            cart: payload,
            cartLoading: false
            }
            
        case'CART_LOADED_FAIL':
            return{
            ...state,
            cart: [],
            cartLoading: false
            }
		default:
			return state
	}
}
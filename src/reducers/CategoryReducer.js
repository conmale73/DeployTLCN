export const CategoryReducer = (state, action) => {
	const {
		type,
		payload
	} = action

	switch (type) {
        case'CATEGORY_LOADED_SUCCESS':
            return{
            ...state,
            categories: payload,
            categoriesLoading: false
            }

        case'CATEGORY_LOADED_FAIL':
            return{
            ...state,
            categories: [],
            categoriesLoading: false
            }
		default:
			return state
	}
}
export const commentReducer = (state, action) => {
	const {
		type,
		payload
	} = action

	switch (type) {
        case'COMMENT_LOADED_SUCCESS':
            return{
            ...state,
            comment: payload,
            commentLoading: false
            }
            
        case'COMMENT_LOADED_FAIL':
            return{
            ...state,
            comment: [],
            commentLoading: false
            }
		default:
			return state
	}
}
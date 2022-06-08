const initState = {
	getproduct            : [],
	getcatproduct         : [],
	getindividualproducts : []
};

export const getProdReducer = (state = initState, action) => {
	switch (action.type) {
		case "GET_PRODUCTS":
			return {
				...state,
				getproduct : action.payload
			};

		default:
			return state;
	}
};

export const getCategoryReducer = (state = initState, action) => {
	switch (action.type) {
		case "GET_CATEGORY_PRODUCTS":
			return {
				...state,
				getcatproduct : action.payload
			};
		default:
			return state;
	}
};

export const getIndividualProductsReducer = (state = initState, action) => {
	switch (action.type) {
		case "GET_INDIVIDUAL_PRODUCTS":
			return {
				...state,
				getindividualproducts : action.payload
			};
		default:
			return state;
	}
};

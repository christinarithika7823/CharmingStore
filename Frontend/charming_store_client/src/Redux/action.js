export const getproducts = (product) => ({
	type    : "GET_PRODUCTS",
	payload : product
});

export const getcategoryproducts = (catproducts) => ({
	type    : "GET_CATEGORY_PRODUCTS",
	payload : catproducts
});

export const getindividualproducts = (individualproducts) => ({
	type    : "GET_INDIVIDUAL_PRODUCTS",
	payload : individualproducts
});

// export const getcheckoutitems=

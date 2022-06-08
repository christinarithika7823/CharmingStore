import { combineReducers } from "redux";
import { getProdReducer, getCategoryReducer, getIndividualProductsReducer } from "./reducer";
import { legacy_createStore as createStore } from "redux";

const rootReducer = combineReducers({
	getProdReducer,
	getCategoryReducer,
	getIndividualProductsReducer
});

export const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

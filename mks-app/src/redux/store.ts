import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import productReducer from "./products.reducer";

const store = createStore(productReducer, composeWithDevTools());

export default store;
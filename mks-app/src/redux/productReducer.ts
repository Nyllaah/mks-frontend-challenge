import { ActionType } from "../types";
import { ADD_TO_CART, SHOW_CART } from "./actions";

const INITIAL_STATE = {
  showCart: false,
  cartProducts: [],
}

const productReducer = (state = INITIAL_STATE, action: ActionType) => {
  switch(action.type) {
    case SHOW_CART:
      return {...state, showCart: !state.showCart};
    case  ADD_TO_CART:
      return {...state, cartProducts: [...state.cartProducts, action.payload]};
    default:
      return state;
  }
};

export default productReducer;
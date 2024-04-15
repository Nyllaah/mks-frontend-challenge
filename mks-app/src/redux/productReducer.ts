import { IProduct } from "../Interfaces";
import { isInCart, incrementQuantity, decrementQuantity } from "../helpers";
import { ActionType, StateType } from "../types";
import { ADD_TO_CART, DECREMENT_QUANTITY, REMOVE_FROM_CART, SHOW_CART } from "./actions";

const INITIAL_STATE = {
  showCart: false,
  cartProducts: [],
}

const productReducer = (state: StateType = INITIAL_STATE, action: ActionType) => {
  switch(action.type) {
    case SHOW_CART:
      return {...state, showCart: !state.showCart};
    case ADD_TO_CART:
      if (typeof action.payload === 'object' && 'id' in action.payload) {
        return isInCart(state.cartProducts, action.payload.id)
        ? {...state,cartProducts: incrementQuantity(state.cartProducts, action.payload)}
        : {...state, cartProducts: [...state.cartProducts, {...action.payload, inCart: 1}]}
      }
      return state;
    case REMOVE_FROM_CART:
      return {...state, cartProducts: state.cartProducts.filter(
        (product: IProduct) => product.id !== action.payload
      )};
    case DECREMENT_QUANTITY:
      return {...state,
        cartProducts: decrementQuantity(state.cartProducts, action.payload as number),
      }
    default:
      return state;
  }
};

export default productReducer;
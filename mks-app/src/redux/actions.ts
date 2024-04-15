import { IProduct } from "../Interfaces";

export const SHOW_CART = 'SHOW_CART';
export const ADD_TO_CART = 'ADD_TO_CART';


export const showCart = () => ({
  type: SHOW_CART,
});

export const addToCart = (product: IProduct) => ({
  type: ADD_TO_CART,
  payload: product,
});
import { IProduct } from "../Interfaces";

export const SHOW_CART = 'SHOW_CART';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';

export const showCart = () => ({
  type: SHOW_CART,
});

export const addToCart = (product: IProduct) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (id: number) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const decrementQuantity = (id: number) => ({
  type: DECREMENT_QUANTITY,
  payload: id,
})


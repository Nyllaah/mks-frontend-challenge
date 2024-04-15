import { IProduct } from "./Interfaces";

export type ActionType = {
  type: string,
  payload?: IProduct[] | IProduct,
}

export type StateType = {
  showCart: boolean,
  cartProducts: IProduct[],
}
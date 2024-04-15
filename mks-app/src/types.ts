import { IProduct } from "./Interfaces";

export type ActionType = {
  type: string,
  payload?: IProduct[] | IProduct,
}

export type StateType = {
  showCart: boolean,
  cartProducts: IProduct[],
}

export type CartCardProps = {
  id: number,
  name: string,
  brand: string,
  photo: string,
  price: number,
}
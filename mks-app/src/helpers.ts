import { IProduct } from "./Interfaces";

export const formatPrice = (price: number) => {  
  let formattedPrice = Number(price).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
  formattedPrice = formattedPrice.slice(0, -3).replace(/\s/g, "");
  return formattedPrice;
};

export const isInCart = (cart: IProduct[], id: number) => {
  return cart.find((prod) => prod.id === id);
};

export const incrementQuantity = (cart: IProduct[], product: IProduct) => {
  return cart.map((prod) => prod.id === product.id
    ? {...prod, inCart: prod.inCart ? prod.inCart + 1 : 1}
    : prod
)};


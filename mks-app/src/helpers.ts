export const formatPrice = (price: number) => {  
  let formattedPrice = Number(price).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
  formattedPrice = formattedPrice.slice(0, -3).replace(/\s/g, "");
  return formattedPrice;
}
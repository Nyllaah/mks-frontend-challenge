import styled from "styled-components";
import CartCard from "./CartCard";
import { useSelector } from "react-redux";
import { CartCardProps, StateType } from "../types";

export default function Cart(props: {showCart: boolean}) {
  const { cartProducts } = useSelector((state: StateType) => state);

  return (
    <CartWrapper style={ props.showCart ? { display: "flex" } : { display: "none" } }>
      <h3>Carrinho de Compras</h3>
      {cartProducts.map(({id, name, brand, photo, price}: CartCardProps) => (
        <CartCard
          key={id}
          id={id}
          name={name}
          brand={brand}
          photo={photo}
          price={price}
        />
      ))}
      <div>
        <span>Total:</span>
        <span>price</span>
      </div>
      <button>Finalizar Compra</button>
    </CartWrapper>
  )
}

const CartWrapper = styled.div`
  min-width: 30vw;
  height: 100vh;
  background-color: #0F52BA;
`;
import styled from "styled-components";
import CartCard from "./CartCard";

export default function Cart(props: {showCart: boolean}) {

  return (
    <CartWrapper style={ props.showCart ? { display: "flex" } : { display: "none" } }>
      <h3>Carrinho de Compras</h3>
      <CartCard />
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
import styled from "styled-components";
import CartCard from "./CartCard";
import { useSelector } from "react-redux";
import { StateType } from "../types";
import { useDispatch } from "react-redux";
import { showCart } from "../redux/actions";
import { formatPrice } from "../helpers";
import { IProduct } from "../Interfaces";

export default function Cart(props: {showCart: boolean}) {
  const { cartProducts } = useSelector((state: StateType) => state);
  const dispatch = useDispatch();

  const total = cartProducts.reduce((acc, curr) => acc + Number(curr.price), 0);
  return (
    <CartWrapper style={ props.showCart ? { display: "flex" } : { display: "none" } }>
      <TitleWrapper>
        <h3>Carrinho de Compras</h3>
        <CloseBtn onClick={ () => dispatch(showCart()) }>X</CloseBtn>
      </TitleWrapper>
      <ProductsWrapper>
        {cartProducts.map(({id, name, brand, photo, price, inCart}: IProduct) => (
          <CartCard
          key={id}
          id={id}
          name={name}
          brand={brand}
          photo={photo}
          price={price}
          inCart={inCart ? inCart : 0}
          />
        ))}
      </ProductsWrapper>
      <div>
        <TotalWrapper>
          <span>Total:</span>
          <span>{formatPrice(total)}</span>
        </TotalWrapper>
        <SubmitBtn>Finalizar Compra</SubmitBtn>
      </div>
    </CartWrapper>
  )
}


const ProductsWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  overflow: auto;
`;

const CartWrapper = styled.div`
  width: 486px;
  height: 100%;
  background-color: #0F52BA;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  box-shadow: -5px 0px 6px 0px #00000021;
`;

const CloseBtn = styled.button`
  border-radius: 100%;
  background-color: black;
  color: white;
  text-align: center;
  width: 38px;
  height: 38px;
  border: none;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  box-shadow: -5px 0px 6px 0px #00000021;
`;

const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  box-shadow: -5px 0px 6px 0px #00000021;
`;

const SubmitBtn = styled.button`
  border: none;
  background-color: black;
  color: white;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  width: 100%;
  height: 5rem;
`;
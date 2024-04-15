import styled from "styled-components";
import { useDispatch } from "react-redux";
import { showCart as showCartAction } from "../redux/actions";
import cart from '../assets/cart.svg';

export default function Header() {
  const dispatch = useDispatch();

  return (
    <HeaderWrapper>
      <TitleWrapper>
        <Title>MSK</Title>
        <Subtitle>Sistemas</Subtitle>
      </TitleWrapper>
      <CartBtn onClick={ () => dispatch(showCartAction()) }>
        <img src={cart} alt="cart icon"/>
        <span>0</span>
      </CartBtn>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  height: 101px;
  width: 100vw;
  background-color: #0F52BA;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: 6px;
`;

const Title = styled.h1`
  color: white;
  font-size: 40px;
`;

const Subtitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
  color: white;
  line-height: 32px;
`;

const CartBtn = styled.button`
  width: 90px;
  height: 45px;
  border-radius: 0.6rem;
  font-size: 18px;
  font-weight: 700;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
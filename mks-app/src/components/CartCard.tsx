import styled from "styled-components";
import { CartCardProps } from "../types";
import { formatPrice } from "../helpers";

export default function CartCard(props: CartCardProps) {  
  return (
    <Wrapper>
      <CloseBtn>X</CloseBtn>
      <ProductImg src={props.photo} alt={`image of ${props.brand} ${props.name}`} />
      <Title>{`${props.brand} ${props.name}`}</Title>
      <QtdWrapper>
        <span>Qtd</span>
        <CounterWrapper>
          <Button>-</Button>
          <Counter>0</Counter>
          <Button>+</Button>
        </CounterWrapper>
      </QtdWrapper>
      <span>{formatPrice(props.price)}</span>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 80%;
  height: 95px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: black;
  font-size: 1rem;
  font-weight: 400;
  position: relative;
  padding: 0.5rem 1.3rem 0.5rem 0.5rem;
`;

const Title = styled.p`
  width: 30%;
`;

const CloseBtn = styled.button`
  border-radius: 100%;
  background-color: black;
  color: white;
  width: 18px;
  height: 18px;
  border: none;
  text-align: center;
  font-size: 0.7rem;
  position: absolute;
  right: -0.5rem;
  top: -0.5rem;
`;

const ProductImg = styled.img`
  width: 20%
`;

const QtdWrapper = styled.div`
  font-size: 0.6rem;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const CounterWrapper = styled.div`
  border: 1px solid #BFBFBF;
  border-radius: 0.2rem;
  width: 50px;
  height: 19px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
`;

const Counter = styled.span`
  text-align: center;
  width: 16px;
  border-left: 1px solid #BFBFBF;
  border-right: 1px solid #BFBFBF;
`;
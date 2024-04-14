import styled from "styled-components";
import { IProduct } from "../Interfaces";

export default function ProductCard(props: IProduct) {
  const formattedPrice = Math.floor(props.price);

  return (
    <Wrapper key={ props.id }>
      <ProductWrapper>
        <ProductImg src={props.photo} alt={`image of ${props.brand} ${props.name}`}/>
        <TitleWrapper>
          <Title>{`${props.brand} ${props.name}`}</Title>
          <Price>{`R$${formattedPrice}`}</Price>
        </TitleWrapper>
        <Description>{props.description}</Description>
      </ProductWrapper>
      <Button>
        <img src="../../public/shopping-bag.svg" alt="shopping bag icon" />
        <span>Comprar</span>
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 217px;
  border-radius: 10px;
  box-shadow: 0px 2px 8px 0px #00000022;
  margin: 15px;
`;

const ProductWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductImg = styled.img`
  width: 111px;
  height: 138px;
`;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  justify-content: space-between;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 400;
`;

const Price = styled.span`
  background-color: #373737;
  max-height: 1.5rem;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;
  color: white;
  padding: 0.25rem;
  text-align: center;
`;

const Description = styled.p`
  font-size: 10px;
  font-weight: 300;
`;

const Button = styled.button`
  background-color: #0F52BA;
  width: 100%;
  border: none;
  border-radius: 0 0 10px 10px;
  height: 32px;
  color: white;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  gap: 6px;
  justify-content: center;
  align-items: center;
`;
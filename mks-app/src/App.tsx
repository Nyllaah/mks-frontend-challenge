import { useQuery } from "@tanstack/react-query";
import styled, { createGlobalStyle } from "styled-components";
import { useSelector } from "react-redux";

import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductCard from "./components/Product";
import Cart from "./components/Cart";

import { IProduct } from "./Interfaces";
import { StateType } from "./types";

import getProducts from "./API";

export default function App() {
  const { isLoading, isError, isSuccess, data, error } = useQuery(
    { queryKey: ['products'], queryFn: getProducts });

  const { showCart } = useSelector((state: StateType) => state);

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }
  
  if (isSuccess) {
    return (
      <>
      <GlobalStyle />
        <Header />
        <Main>
          {data.products.map(({id, name, brand, description, photo, price}: IProduct) => (
            <ProductCard
            key={id}
            id={id}
            name={name}
            brand={brand}
            description={description}
            photo={photo}
            price={price}
            />
          ))}
        </Main>
        <Footer />
        { showCart && <Cart showCart={ showCart }/> }
      </>
    )
  }
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Montserrat", sans-serif;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 100vh;
  }
`;

const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  max-width: 80%;
  justify-content: center;
`;

import { useQuery } from "@tanstack/react-query";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductCard from "./components/Product";
import { IProduct } from "./Interfaces";
import getProducts from "./API";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Montserrat", sans-serif;
  }
`;

function App() {
  const { isLoading, isError, isSuccess, data, error } = useQuery(
    { queryKey: ['products'], queryFn: getProducts });

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
        <section>
          {data.products.map(({id, name, brand, description, photo, price}: IProduct) => (
            <ProductCard
              id={id}
              name={name}
              brand={brand}
              description={description}
              photo={photo}
              price={price}
            />
          ))}
        </section>
        <section>
          <h3>carrinho</h3>
        </section>
        <Footer />
      </>
    )
  }
}

export default App;

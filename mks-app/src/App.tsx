import { useQuery } from "@tanstack/react-query";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductCard from "./components/Product";
import { IProduct } from "./Interfaces";

const getProducts = async () => {
  const response = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC')
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

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

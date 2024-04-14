const getProducts = async () => {
  const response = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC')
  
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  
  return response.json()
}

export default getProducts;
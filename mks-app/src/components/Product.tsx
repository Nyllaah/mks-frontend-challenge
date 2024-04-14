import { IProduct } from "../Interfaces";

function ProductCard(props: IProduct) {
  const formattedPrice = Math.floor(props.price);

  return (
    <div key={props.id}>
      <img src={props.photo} alt="" />
      <h3>{`${props.brand} ${props.name}`}</h3>
      <span>{`R$${formattedPrice}`}</span>
      <p>{props.description}</p>
      <button>Comprar</button>
    </div>
  )
}

export default ProductCard;
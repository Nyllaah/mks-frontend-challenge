import { IProduct } from "../Interfaces";

function ProductCard(props: IProduct) {
  return (
    <div key={props.id}>
      <img src={props.photo} alt="" />
      <h3>{`${props.brand} ${props.name}`}</h3>
      <span>{props.price}</span>
      <p>{props.description}</p>
      <button>Comprar</button>
    </div>
  )
}

export default ProductCard;
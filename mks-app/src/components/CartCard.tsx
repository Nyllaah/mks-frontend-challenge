import { CartCardProps } from "../types";

export default function CartCard(props: CartCardProps) {
  return (
    <>
      <button>x</button>
      <img src={props.photo} alt={`image of ${props.brand} ${props.name}`} />
      <span>{`${props.brand} ${props.name}`}</span>
      <div>
        <span>Qtd</span>
        <div>
          <button>-</button>
          <span>0</span>
          <button>+</button>
        </div>
      </div>
      <span>{props.price}</span>
    </>
  )
}
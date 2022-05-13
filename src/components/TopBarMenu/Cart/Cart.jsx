import { useContext } from "react";
import CartContext from "./CartContext.js";

import "./Cart.scss";

export default function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div className="teste">
      <img src={`/images/${cart.product?.thumbnail}`} alt="" />
      <p>{cart.product?.model}</p>
      <p>{cart.quantity}</p>
      <p>{cart.product?.price}</p>
    </div>
  );
}

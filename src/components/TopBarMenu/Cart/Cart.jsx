import { useState, useContext } from "react";
import CartContext from "./CartContext.js";
import Images from "../../Images/Images.jsx";
import Button from "../../Button/Button.jsx";

import "./Cart.scss";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const [cartBox, setCartBox] = useState("cartboxOff");

  function handleChangeCartbox() {
    setCartBox(cartBox === "cartboxOff" ? "cartboxOn" : "cartboxOff");
  }

  function removeItemCart(cartQuantity) {
    setCart({ product: null, quantity: 0, value: "false" });
  }

  return (
    <>
      <Images
        onClick={handleChangeCartbox}
        source="icon-cart.svg"
        imagetype="cart"
        alt="cart icon"
      />
      <div id={cartBox}>
        <h1>Cart</h1>
        <div id={cart.value} className="cart-product">
          <img
            src={`/images/${cart.product?.thumbnail}`}
            alt="product thumbnail"
            className="cart-thumbnail"
          />
          <p className="cart-product__details">
            <span>{cart.product?.model}</span>
            <span>
              {cart.product?.price} x {cart.quantity} $
              <span className="total">
                {cart.product?.price * cart.quantity}
              </span>
            </span>
          </p>
          <Button icon="delete" onClick={removeItemCart} />
        </div>
        <Button color="orange" text="Checkout" />
      </div>
    </>
  );
}

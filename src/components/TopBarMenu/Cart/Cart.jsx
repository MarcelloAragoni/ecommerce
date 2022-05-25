import { useState, useContext } from "react";
import CartContext from "./CartContext.js";
import Images from "../../Images/Images.jsx";
import Button from "../../Button/Button.jsx";

import "./Cart.scss";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const [cartBox, setCartBox] = useState("off");

  function handleChangeCartbox() {
    setCartBox(cartBox === "off" ? "on" : "off");
  }

  function removeItemCart(cartQuantity) {
    setCart({ product: null, quantity: 0 });
  }

  return (
    <>
      <Images
        onClick={handleChangeCartbox}
        source="icon-cart.svg"
        imagetype="cart"
        alt="cart icon"
      />
      <div className="cartbox" data-status={cartBox}>
        <h1 className="title">Cart</h1>
        {!cart.product && <span className="cartempty">Cart empty</span>}
        {cart.product && (
          <div className="cart__product">
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
        )}
        <Button color="orange" text="Checkout" />
      </div>
    </>
  );
}

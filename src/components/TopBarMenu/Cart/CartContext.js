import React from "react";

export const cartDefaultValue = {
  quantity: 0,
  product: null,
  value: "false",
};
const CartContext = React.createContext(cartDefaultValue);

export default CartContext;

import React from "react";

export const cartDefaultValue = {
  // we can use it on App to set the default state.
  quantity: 0,
  product: null,
};
const CartContext = React.createContext(cartDefaultValue);

export default CartContext;

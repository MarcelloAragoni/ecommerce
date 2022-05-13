import React from "react";
import AuthContext from "../../Quantity/Quantity";

import "./Cart.scss";

export default function Cart() {
  const { quantity } = React.useContext(AuthContext);

  console.log(quantity);

  return <div className="teste"></div>;
}

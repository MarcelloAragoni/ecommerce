import { useState } from "react";
import "./reset.css";
import "./App.css";
import ProductPage from "./pages/ProductPage";
import Cart from "./components/TopBarMenu/Cart/Cart";
import CartContext, {
  cartDefaultValue,
} from "../src/components/TopBarMenu/Cart/CartContext.js";

function App() {
  const [cart, setCart] = useState(cartDefaultValue);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Cart />
      <ProductPage />
    </CartContext.Provider>
  );
}

export default App;

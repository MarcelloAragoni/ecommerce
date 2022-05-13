import { useState } from "react";
import "./reset.css";
import "./App.css";
import ProductPage from "./pages/ProductPage";
import Cart from "./components/TopBarMenu/Cart/Cart";
import CartContext, {
  cartDefaultValue,
} from "../src/components/TopBarMenu/Cart/CartContext.js";

function App() {
  const [cart, setCart] = useState(cartDefaultValue); // Cart state will live in here

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {/* in here we're passing the value and the way to update it to be consumed later on. */}
      <Cart />
      <ProductPage />
    </CartContext.Provider>
  );
}

export default App;

import { useState } from "react";
import "./reset.css";
import "./App.css";
import ProductPage from "./pages/ProductPage";
import NavBar from "./components/TopBarMenu";
import CartContext, {
  cartDefaultValue,
} from "../src/components/TopBarMenu/Cart/CartContext.js";

function App() {
  const [cart, setCart] = useState(cartDefaultValue);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <NavBar />
      <ProductPage />
    </CartContext.Provider>
  );
}

export default App;

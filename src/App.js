import "./reset.css";
import "./App.css";
import ProductPage from "./pages/ProductPage";
import Cart from "./components/TopBarMenu/Cart/Cart";

function App() {
  return (
    <>
      <Cart />
      <ProductPage />
    </>
  );
}

export default App;

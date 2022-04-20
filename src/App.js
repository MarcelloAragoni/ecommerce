import "./App.css";
import Input from "./components/Input/Input";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <>
      <ProductPage />
      <Input name="quantity" id="quantity" placeholder="0" textAlign="center" />
    </>
  );
}

export default App;

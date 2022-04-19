import "./App.css";
import Button from "./components/Button/Button";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <>
      <ProductPage />
      <Button icon="plus" />
      <Button icon="minus" />
      <Button icon="add" color="orange" text="Add to cart" />
    </>
  );
}

export default App;

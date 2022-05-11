import "./reset.css";
import "./App.css";
import ProductPage from "./pages/ProductPage";
import Categories from "./components/TopBarMenu/Categories/Categories";

function App() {
  return (
    <>
      <Categories />
      <ProductPage />;
    </>
  );
}

export default App;

import "./reset.css";
import "./App.css";
import ProductPage from "./pages/ProductPage";
import User from "./components/TopBarMenu/User/User";

function App() {
  return (
    <>
      <User userSource="image-avatar.png" />
      <ProductPage />;
    </>
  );
}

export default App;

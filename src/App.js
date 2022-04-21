import "./App.css";
import ProdDetail from "./pages/ProductPage/ProdDetail/ProdDetail";

function App() {
  return (
    <>
      <ProdDetail
        company="SNEAKER COMPANY"
        model="Fall Limited Edition Sneakers"
        description="These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer."
        price="$125.00"
        discount="50%"
        originalPrice="$250.00"
      />
    </>
  );
}

export default App;

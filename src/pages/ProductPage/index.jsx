import { useEffect, useState, useContext } from "react";
import ProdDetail from "./ProdDetail/ProdDetail";
import ProdSelector from "./ProdSelector/ProdSelector";
import Gallery from "../../components/Gallery/Gallery";
import CartContext from "../../components/TopBarMenu/Cart/CartContext.js";

import "./index.scss";

export default function ProductPage() {
  const [product, setProduct] = useState(undefined);
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((productData) => {
        setProduct(productData);
      });
  }, []);

  function addItemCart(cartQuantity) {
    setCart({ product, quantity: cart.quantity + cartQuantity });
  }

  return (
    <div className="product-page">
      <div className="product-galerry">
        <Gallery />
      </div>
      <div className="product-info">
        {product && (
          <ProdDetail
            key={product.id}
            company={product.company}
            model={product.model}
            description={product.description}
            price={product.price}
            originalPrice={product.originalprice}
            discount={product.discount}
          />
        )}
        <ProdSelector addItemCart={addItemCart} />
      </div>
    </div>
  );
}

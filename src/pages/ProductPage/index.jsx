import { useEffect, useState } from "react";
import ProdDetail from "./ProdDetail/ProdDetail";
import ProdSelector from "./ProdSelector/ProdSelector";
import Gallery from "../../components/Gallery/Gallery";

import "./index.scss";

export default function ProductPage() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        setProduct(data.products);
      });
  }, []);

  return (
    <div className="product-page">
      <div className="product-galerry">
        <Gallery />
      </div>
      <div className="product-info">
        {products.map((product) => (
          <ProdDetail
            key={product.id}
            company={product.company}
            model={product.model}
            description={product.description}
            price={product.price}
            originalPrice={product.originalprice}
            discount={product.discount}
          />
        ))}
        <ProdSelector />
      </div>
    </div>
  );
}

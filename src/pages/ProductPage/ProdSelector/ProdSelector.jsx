import Button from "../../../components/Button/Button";
import Quantity from "../../../components/Quantity/Quantity";

import "./ProdSelector.scss";

export default function ProdSelector() {
  return (
    <div className="product-selector">
      <Quantity />
      <Button color="orange" icon="add" text="Add to Cart" />
    </div>
  );
}

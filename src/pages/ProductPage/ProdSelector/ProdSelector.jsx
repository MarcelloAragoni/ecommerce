import Quantity from "../../../components/Quantity/Quantity";

import "./ProdSelector.scss";

export default function ProdSelector({ addItemCart }) {
  return (
    <div className="product-selector">
      <Quantity addItemCart={addItemCart} />
    </div>
  );
}

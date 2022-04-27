import "./ProdDetail.scss";

export default function ProdDetail({
  company,
  model,
  description,
  originalPrice,
  price,
  discount,
}) {
  return (
    <div className="product-detail">
      <p className="product-detail__subtitle">{company}</p>
      <p className="product-detail__title">{model}</p>
      <p className="product-detail__description">{description}</p>
      <p className="product-detail__price">
        {price}
        <span>{discount}</span>
      </p>
      <p className="product-detail__original-price">{originalPrice}</p>
    </div>
  );
}

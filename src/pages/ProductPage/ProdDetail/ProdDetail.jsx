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
    <div className="prodDetail">
      <h2>{company}</h2>
      <h1>{model}</h1>
      <p className="description">{description}</p>
      <p className="price">
        {price}
        <span>{discount}</span>
      </p>
      <p className="originalPrice">{originalPrice}</p>
    </div>
  );
}

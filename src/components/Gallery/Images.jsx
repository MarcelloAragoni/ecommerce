export default function Images({ source, onClick, className }) {
  const IMAGE_PATH = "/images/";

  return (
    <img
      className={className}
      onClick={onClick}
      src={IMAGE_PATH + source}
      alt=""
    />
  );
}

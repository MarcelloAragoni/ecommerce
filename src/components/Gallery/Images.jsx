export default function Images({ source, onClick }) {
  const IMAGE_PATH = "/images/";

  return (
    <img
      className="gallery-image"
      onClick={onClick}
      src={IMAGE_PATH + source}
      alt=""
    />
  );
}

export default function Images({ source }) {
  const IMAGE_PATH = "/images/";

  return <img src={IMAGE_PATH + source} alt="" />;
}

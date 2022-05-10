import cn from "classnames";

export default function Images({ source, onClick, imagetype, alt }) {
  const IMAGE_PATH = "/images/";
  const imgtype = cn(
    "image",
    { "user-image": imagetype === "user" },
    { "gallery-image": imagetype === "gallery" },
    { "logo-image": imagetype === "logo" }
  );

  return (
    <img
      className={imgtype}
      onClick={onClick}
      src={IMAGE_PATH + source}
      alt={alt}
    />
  );
}

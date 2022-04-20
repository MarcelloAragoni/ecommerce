import cn from "classnames";
import "./Input.scss";

export default function Input({
  name,
  value,
  placeholder,
  textPosition,
  type = "text",
}) {
  const textStyle = cn("input", {
    "input__text--center": textPosition === "center",
  });

  return (
    <input
      className={textStyle}
      name={name}
      id={name}
      type={type}
      value={value}
      placeholder={placeholder}
    />
  );
}

import cn from "classnames";
import "./Input.scss";

export default function Input({
  name,
  value,
  placeholder,
  textAlign,
  type = "text",
}) {
  const textStyle = cn("input", {
    "input__text--center": textAlign === "center",
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

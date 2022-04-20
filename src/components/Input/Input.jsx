import cn from "classnames";
import "./Input.scss";

export default function Input({
  setInputState,
  name,
  value,
  placeholder,
  textAlign,
  type = "text",
}) {
  const textStyle = cn("input", {
    "input__text--center": textAlign === "center",
  });

  function handleChange(event) {
    setInputState(event.target.value);
  }

  return (
    <input
      onChange={handleChange}
      className={textStyle}
      name={name}
      id={name}
      type={type}
      value={value}
      placeholder={placeholder}
    />
  );
}

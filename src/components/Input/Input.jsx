import "./Input.scss";

export default function Input({ name, type = "text", value, placeholder }) {
  return (
    <input
      name={name}
      id={name}
      type={type}
      value={value}
      placeholder={placeholder}
    />
  );
}

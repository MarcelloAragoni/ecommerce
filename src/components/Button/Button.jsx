import cn from "classnames";

import "./Button.scss";

export default function Button({ text, icon, color }) {
  const buttonStyle = cn(
    "button",
    { "button__icon--plus": icon === "plus" },
    { "button__icon--minus": icon === "minus" },
    { "button__icon--add": icon === "add" },
    { "button--orange": color === "orange" }
  );

  return (
    <button type="button" className={buttonStyle}>
      {text}
    </button>
  );
}

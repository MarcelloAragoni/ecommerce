import cn from "classnames";

import "./Button.scss";

export default function Button({ text, icon, color, onClick }) {
  const buttonStyle = cn(
    "button",
    { "button__icon--plus": icon === "plus" },
    { "button__icon--minus": icon === "minus" },
    { "button__icon--add": icon === "add" },
    { "button__icon--next": icon === "next" },
    { "button__icon--previous": icon === "previous" },
    { "button__icon--delete": icon === "delete" },
    { "button--orange": color === "orange" }
  );

  return (
    <button onClick={onClick} type="button" className={buttonStyle}>
      {text}
    </button>
  );
}

import cn from "classnames";

import "./Button.scss";

export default function Button({text, icon, color}) {
  const buttonStyle = cn(
    "button",
    {"button--plus": icon === "plus"},
    {"button--minus": icon === "minus"},
    {"button--add": icon === "add"},
    {"button--orange": color === "orange"}
  );

  return (
    <button type="button" className={buttonStyle}>
      {text}
    </button>
  );
}

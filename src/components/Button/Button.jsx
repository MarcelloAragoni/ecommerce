import cn from "classnames";

import "./Button.scss";

export default function Button({text, prop}) {
  const buttonType = cn(
    "button",
    {"button--plus": prop === "plus"},
    {"button--minus": prop === "minus"},
    {"button--add": prop === "add"}
  );

  return (
    <button type="button" className={buttonType}>
      {text}
    </button>
  );
}

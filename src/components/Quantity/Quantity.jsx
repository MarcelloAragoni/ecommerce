import { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

import "./Quantity.scss";

export default function Quantity({ addItemCart }) {
  const [inputState, setInputState] = useState(0);

  function handleButtonPlusClick() {
    setInputState(inputState + 1);
  }

  function handleButtonMinusClick() {
    setInputState(inputState - 1);
  }

  function handleChangeInput(value) {
    setInputState(Number(value));
  }

  return (
    <>
      <div className="quantity">
        <Button onClick={handleButtonMinusClick} icon="minus" />
        <Input
          type="number"
          name="quantity"
          id="quantity"
          placeholder="0"
          textAlign="center"
          value={inputState}
          setInputState={handleChangeInput}
        />
        <Button onClick={handleButtonPlusClick} icon="plus" />
      </div>
      <Button
        onClick={() => addItemCart(inputState)}
        color="orange"
        icon="add"
        text="Add to Cart"
      />
    </>
  );
}

import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Images from "./Images";

import "./Gallery.scss";

export default function Gallery() {
  const [current, setCurrent] = useState(0);

  const [sliderData, setSliderData] = useState([]);

  function handleButtonLeftClick() {}

  function handleButtonRightClick() {}

  useEffect(() => {
    fetch("./sliderdata.json")
      .then((response) => response.json())
      .then((data) => {
        setSliderData(data.sliderdata);
      });
  }, []);

  return (
    <div className="gallery">
      <Button onClick={handleButtonLeftClick} />
      {sliderData.map((slider) => (
        <Images key={slider.id} source={slider.image} />
      ))}
      <Button onClick={handleButtonRightClick} />
    </div>
  );
}

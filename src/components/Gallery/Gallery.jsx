import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Images from "./Images";

import "./Gallery.scss";

export default function Gallery() {
  const [current, setCurrent] = useState(0);

  const [sliderData, setSliderData] = useState([]);

  const length = Object.keys(sliderData).length;

  function handleButtonLeftClick() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  function handleButtonRightClick() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  useEffect(() => {
    fetch("/sliderdata.json")
      .then((response) => response.json())
      .then((data) => {
        setSliderData(data.sliderdata);
      });
  }, []);

  return (
    <div className="gallery">
      <Button onClick={handleButtonLeftClick} icon="previous" />
      {sliderData.map((slider, index) => {
        return (
          <div
            className={index === current ? "slideActive" : "slide"}
            key={index}
          >
            {index === current && (
              <Images key={slider.id} source={slider.image} />
            )}
          </div>
        );
      })}
      <Button onClick={handleButtonRightClick} icon="next" />
    </div>
  );
}
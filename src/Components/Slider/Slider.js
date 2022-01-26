import React, { useEffect, useState } from "react";
import Arrow from "./Arrow";
import Dot from "./Dot";
import { imageSlider } from "./imageSlider";
import "./Slider.css";
import SliderContent from "./SliderContent";

const len = imageSlider.length - 1;

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} imageSlider={imageSlider} />
      <Arrow
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <Dot
        activeIndex={activeIndex}
        imageSlider={imageSlider}
        dotClick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
};

export default Slider;

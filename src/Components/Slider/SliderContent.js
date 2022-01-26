import React from "react";

const SliderContent = ({ activeIndex, imageSlider }) => {
  return (
    <>
      {imageSlider.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slider active" : "inactive"}
        >
          <img className="slide-image" src={slide.url} alt="" />
          <h2 className="slide-title">{slide.title}</h2>
          <h3 className="slide-text">{slide.description}</h3>
        </div>
      ))}
    </>
  );
};

export default SliderContent;

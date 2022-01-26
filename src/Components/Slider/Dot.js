import React from "react";

const Dot = ({ activeIndex, dotClick, imageSlider }) => {
  return (
    <div className="all-dots">
      {imageSlider.map((slider, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
          onClick={() => dotClick(index)}
        ></span>
      ))}
    </div>
  );
};

export default Dot;

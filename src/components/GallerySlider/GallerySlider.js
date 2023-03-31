import React, { useState } from "react";
import "./GallerySlider.scss";
import rightArrow from "../../assets/icons/scroll-right.png";
import leftArrow from "../../assets/icons/scroll-left.png";

const GallerySlider = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  // const images = [img1, img2, img3, img4];

  const handleClickPrev = () => {
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  };

  const handleClickNext = () => {
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <div className="gallery-slider">
      <div className="gallery-slider__image-container">
        <img
          className="gallery-slider__image"
          src={images[activeIndex]}
          alt={` ${activeIndex + 1}`}
        />
      </div>
      <div className="gallery-slider__bullet-points">
        {images.map((_, index) => (
          <span
            key={index}
            className={`gallery-slider__bullet-point ${
              activeIndex === index
                ? "gallery-slider__bullet-point--active"
                : ""
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
      <img
        src={leftArrow}
        alt="leisure"
        className="gallery-slider__arrow gallery-slider__arrow--prev"
        onClick={handleClickPrev}
      />

      <img
        src={rightArrow}
        alt="business"
        className="gallery-slider__arrow gallery-slider__arrow--next"
        onClick={handleClickNext}
      />
    </div>
  );
};

export default GallerySlider;

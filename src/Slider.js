import React, { useState } from 'react';
import './Slider.css';
import url1 from './images11.png';
import url2 from './images12.png';
import url3 from './images13.png';
import url4 from './images14.png';


const sliderData = [url1, url2, url3, url4];

const Imgslider = () => {
  const [startIndex, setStartIndex] = useState(0);

  const goToPrevious = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + sliderData.length) % sliderData.length);
  };

  const goToNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
  };

  return (
    <div className="slider-container">
      <div className="arrow-buttons-container">
        <button className="arrow-button left" onClick={goToPrevious}>&#8249;</button>
      </div>
      <div className="slider-gallery">
        <div className="slider-card">
          <img src={sliderData[startIndex]} alt={`resim-${startIndex}`} />
        </div>
      </div>
      <div className="arrow-buttons-container">
        <button className="arrow-button right" onClick={goToNext}>&#8250;</button>
      </div>
    </div>
  );
};

export default Imgslider;

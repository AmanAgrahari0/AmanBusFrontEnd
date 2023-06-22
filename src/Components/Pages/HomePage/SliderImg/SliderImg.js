import React from 'react'
import './SliderImg.css'

import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


function SliderImg() {
  const bus1 = require('./1.jpg')
  const bus2 = require('./2.jpg')
  const bus3 = require('./3.jpg')

  const images = [bus1, bus2, bus3];
  

  return (
    <div className='slider-section'>
      <Carousel useKeyboardArrows={true} autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={true} showIndicators={false} interval={3000} transitionTime={1000}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt="bus" />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default SliderImg
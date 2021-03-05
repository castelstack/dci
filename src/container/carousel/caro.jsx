import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./caro.css";
import Slide1 from './slide1'
export const Caro = () => {
  return (
    <Carousel
          useKeyboardArrows
      showStatus={false}
      showThumbs={false}
        autoPlay
        infiniteLoop
        renderIndicator={false}
    >
      <Slide1 key='content-0'/>
      <Slide1 key='content-1'/>
      
      <Slide1 key='content-2'/>
     
    </Carousel>
  );
};

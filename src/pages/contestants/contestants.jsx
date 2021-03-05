import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./caro.css";
import ConSlide from './cons-slide'
export const Contestants = () => {
  return (
    <Carousel
          useKeyboardArrows
          showStatus={false}
          showThumbs={false}
            autoPlay
      infiniteLoop
      renderIndicator={false}
    >
      <ConSlide key='content-0'/>
      <ConSlide key='content-1'/>
      <ConSlide key='content-2'/>
      

     
    </Carousel>
  );
};

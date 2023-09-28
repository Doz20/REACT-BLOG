import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

function SlideContainer() {
    const slides = [
      {
        image: '../5.jpg',
        caption: 'Slide 1',
      },
      {
        image: '../2.jpeg',
        caption: 'Slide 2',
      },
      {
        image: '../3.jpg',
        caption: 'Slide 3',
      },
      {
        image: './4.jpg',
        caption: 'Slide 4',
      },
      // Add more slides as needed
    ];
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1, 
      slidesToScroll: 1,
    };
  
    return (
        <>
          <Slider {...settings}>
        {slides.map((slide, index) => (
          <Slide key={index} image={slide.image} caption={slide.caption} />
        ))}
      </Slider>

      
        </>
    
    );
  }export default SlideContainer

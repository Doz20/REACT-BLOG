import React from "react";
// import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Slide({image,caption}){
    return(
        <>
           <div className="relative">
            <img src={image} alt={caption} className=" inset-0 -z-10 h-80 w-full object-cover object-right md:object-center mt-0" />
            
        </div>
      

  
    
        
        </>
     
    )
}export default Slide
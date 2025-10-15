import React from "react";
import carouselImage from "../../assets/layout.svg";
import leftArrowFrame from "../../assets/Frame 2147228233.svg";
import rightArrowFrame from "../../assets/Frame 2147228232.svg";

const CardCarousel = () => {
  return (

    <section className="w-full flex justify-center">
      <div className="relative w-full max-w-[1376px] aspect-[1376/304]">
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[75.58%] h-full">
          <img
            src={carouselImage}
            alt="Carousel"
            className="w-full h-full object-contain rounded-xl z-10 pointer-events-none"
          />
        </div>

<button
  className="absolute z-20 left-4 top-1/2 -translate-y-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
>
  <img 
    src={leftArrowFrame} 
    alt="Previous" 
    className="w-[44px] h-[44px] sm:w-[56px] sm:h-[56px] lg:w-[64px] lg:h-[64px]"
  />
</button>

<button
  className="absolute z-20 right-4 top-1/2 -translate-y-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
>
  <img 
    src={rightArrowFrame} 
    alt="Next" 
    className="w-[44px] h-[44px] sm:w-[56px] sm:h-[56px] lg:w-[64px] lg:h-[64px]"
  />
</button>
      </div>
    </section>
  );
};

export default CardCarousel;

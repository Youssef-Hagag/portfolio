import React, { useState } from "react";
import "primeicons/primeicons.css";
import CarouselCard from "./CarouselCard";

export default function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [prevIndex, setPrevIndex] = useState(items.length - 1);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
    setIndices(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setIndices(newIndex);
  };

  const setIndices = (newIndex) => {
    setCurrentIndex(newIndex);
    setPrevIndex(newIndex === 0 ? items.length - 1 : newIndex - 1);
    setNextIndex(newIndex === items.length - 1 ? 0 : newIndex + 1);
  };

  return (
    <div className="relative top-4 mx-auto h-[400px] w-[90%] max-w-[500px] lg:w-[30vw]">
      {/* Arrows */}
      <button
        onClick={goToPrevious}
        className="h-landscape:-left-[65px] h-landscape:top-1/2 absolute -bottom-28 left-0 z-[200] h-[50px] w-[50px] -translate-y-1/2 transform rounded-full bg-white p-2 text-2xl hover:bg-neutral-100 dark:bg-gray-800 dark:hover:bg-gray-700 lg:-left-[100px]"
      >
        <i className="pi pi-arrow-left"></i>
      </button>
      <button
        onClick={goToNext}
        className="h-landscape:-right-[65px] h-landscape:top-1/2 absolute -bottom-28 right-0 z-[200] h-[50px] w-[50px] -translate-y-1/2 transform rounded-full bg-white p-2 text-2xl hover:bg-neutral-100 dark:bg-gray-800 dark:hover:bg-gray-700 lg:-right-[100px]"
      >
        <i className="pi pi-arrow-right"></i>
      </button>

      {/* Carousel items */}
      <div className="flex h-full items-center justify-center">
        <div className="relative h-full w-full">
          {items.map((item, index) => {
            let positionClass = "opacity-0 -z-10";

            if (index === currentIndex) {
              positionClass =
                "opacity-100 transform translate-x-0 max-lg:w-full z-[50]";
            } else if (index === prevIndex) {
              positionClass =
                "opacity-40 transform -translate-x-full max-lg:opacity-0 pointer-events-none";
            } else if (index === nextIndex) {
              positionClass =
                "opacity-40 transform translate-x-full max-lg:opacity-0 pointer-events-none";
            }

            return (
              <div className="flex justify-center">
                <div
                  key={index}
                  className={`transition-custom absolute top-0 h-full w-full duration-500 ${positionClass}`}
                >
                  <CarouselCard {...item} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Currently Selected */}
      <div className="relative mx-auto mt-14 h-landscape:-mt-8 z-[60] w-[50%] flex items-center justify-center space-x-2">
        {items.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full ${index === currentIndex ? "bg-blue-500" : "bg-gray-400"} cursor-pointer`}
            onClick={() => setIndices(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

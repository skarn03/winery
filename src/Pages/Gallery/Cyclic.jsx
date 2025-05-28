import React, { useState } from "react";

const CyclingCarousel = () => {
  // Keep track of which slide is in view
  const [currentIndex, setCurrentIndex] = useState(0);

  // For a fixed width approach, define how wide each box is (in px).
  const BOX_WIDTH = 200; 
  // Array of 10 background colors for demonstration
  const colors = [
    "bg-red-400",
    "bg-blue-400",
    "bg-green-400",
    "bg-yellow-400",
    "bg-pink-400",
    "bg-purple-400",
    "bg-orange-400",
    "bg-teal-400",
    "bg-indigo-400",
    "bg-gray-400",
  ];
  const totalSlides = colors.length; // 10

  const handleNext = () => {
    // Go to the next slide; if at the last slide, go back to first (index 0).
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handlePrev = () => {
    // Go to the previous slide; if at the first slide, go to the last.
    setCurrentIndex((prevIndex) => {
      return (prevIndex - 1 + totalSlides) % totalSlides;
    });
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-10">
      {/* Carousel Container - "overflow-hidden" ensures overflow is hidden */}
      <div className="relative overflow-hidden w-full border-2 border-gray-300 rounded-lg">
        {/* 
          Inner slider: 
          - Use flex to line up children horizontally
          - Transition ensures smooth movement
        */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * BOX_WIDTH}px)`,
          }}
        >
          {colors.map((color, index) => (
            <div
              key={index}
              className={`${color} flex-shrink-0 w-[200px] h-[200px] 
                          flex items-center justify-center text-white text-xl`}
            >
              Slide {index + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CyclingCarousel;

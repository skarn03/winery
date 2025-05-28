import React, { useState } from "react";

/**
 * SimpleCarousel - A horizontally scrolling carousel with 10 boxes.
 * Each box is a different background color, but you can replace these
 * with actual images or any other content.
 */
const SimpleCarousel = () => {
  // currentIndex controls which “slide” is in view
  const [currentIndex, setCurrentIndex] = useState(0);

  // For a fixed width approach, define how wide a single box is (in px).
  // This helps us calculate the translate offset more easily.
  const BOX_WIDTH = 200; 
  const MAX_SLIDES = 9; // We have 10 slides (index 0 through 9)

  // Handle the "Next" slide action
  const handleNext = () => {
    // Only move to the next if we're not at the last slide
    setCurrentIndex((prevIndex) => (prevIndex < MAX_SLIDES ? prevIndex + 1 : prevIndex));
  };

  // Handle the "Prev" slide action
  const handlePrev = () => {
    // Only move to the previous if we're not at the first slide
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  // Array of background colors for demonstration
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

  return (
    <div className="w-full max-w-xl mx-auto mt-10">
      {/* Carousel Container - overflow hidden ensures the content outside its width is hidden */}
      <div className="relative overflow-hidden w-full border-2 border-gray-300 rounded-lg">
        {/* Inner slider - use flex to line up children horizontally */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            // Translate X by currentIndex * BOX_WIDTH to move left or right
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

export default SimpleCarousel;

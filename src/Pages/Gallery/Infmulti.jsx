import React, { useState, useEffect, useRef } from "react";

export default function InfiniteCarouselMulti() {
  // 13 total slides for demonstration
  const slides = [
    "Box 1",
    "Box 2",
    "Box 3",
    "Box 4",
    "Box 5",
    "Box 6",
    "Box 7",
    "Box 8",
    "Box 9",
    "Box 10",
    "Box 11",
    "Box 12",
    "Box 13",
  ];

  const totalRealSlides = slides.length; // 13
  const visibleSlides = 4; // Show 4 boxes at once
  const boxWidth = 200; // Each box is 200px wide
  const transitionDuration = 500; // ms (we'll also use this in CSS)

  // 1) Clone the last 4 slides at the front, and clone the first 4 at the end
  //    extendedSlides = [ last4, ...slides, first4 ]
  const firstPart = slides.slice(0, visibleSlides); // first 4
  const lastPart = slides.slice(totalRealSlides - visibleSlides); // last 4
  const extendedSlides = [...lastPart, ...slides, ...firstPart];
  // extendedSlides.length = 13 + 4 + 4 = 21

  // Start on index "visibleSlides" (4), i.e. the real "Box 1" in extendedSlides
  const [currentIndex, setCurrentIndex] = useState(visibleSlides);

  // Track whether CSS transition is enabled. We'll disable it briefly for the "jump."
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);

  // Ref to the wrapper that slides horizontally, so we can attach onTransitionEnd
  const sliderRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  // After the carousel finishes transitioning, we check if we're out of range
  // and do an "invisible" jump to keep it seamless.
  const handleTransitionEnd = () => {
    // We only do the jump if we’re out of the real range
    if (currentIndex >= totalRealSlides + visibleSlides) {
      // Example: if currentIndex = 14, we subtract 13 => new index = 1
      setIsTransitionEnabled(false);
      setCurrentIndex((prev) => prev - totalRealSlides);
    } else if (currentIndex < visibleSlides) {
      // Example: if currentIndex = 3, we add 13 => new index = 16
      setIsTransitionEnabled(false);
      setCurrentIndex((prev) => prev + totalRealSlides);
    }
  };

  // Whenever we disable transition, re-enable it on the next frame
  useEffect(() => {
    if (!isTransitionEnabled) {
      // We just did a jump. Wait until the state updates:
      requestAnimationFrame(() => {
        setIsTransitionEnabled(true);
      });
    }
  }, [isTransitionEnabled]);

  return (
    <div className="w-full flex flex-col items-center mt-10">
      {/* The visible area is 4 boxes wide => 4 * 200px = 800px */}
      <div className="relative overflow-hidden w-[800px] border-2 border-gray-300 rounded-lg">
        {/* 
          The "track":
           - flex: to display items in a row
           - transform: to shift left/right based on currentIndex
           - onTransitionEnd: triggers once the CSS transition finishes
        */}
        <div
          ref={sliderRef}
          className={`flex ${
            isTransitionEnabled
              ? "transition-transform duration-500 ease-in-out"
              : ""
          }`}
          style={{
            transform: `translateX(-${currentIndex * boxWidth}px)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedSlides.map((boxLabel, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[200px] h-[200px] 
                         flex items-center justify-center bg-blue-400 text-white text-xl m-1"
            >
              {boxLabel}
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
}

import React, { useState, useEffect, useRef } from "react";

export default function InfiniteCarousel() {
  // Original slides (each item could be an image URL, text, or any content).
  // Here we just have 10 colored boxes for demo.
  const slides = [
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
  const totalRealSlides = slides.length; // 10

  // Create an extended array with cloned slides at the start and end.
  // The “front clone” is the last real slide, and the “end clone” is the first real slide.
  // E.g.: [Slide10, Slide1, Slide2, ..., Slide10, Slide1]
  const extendedSlides = [
    slides[totalRealSlides - 1], // last real slide
    ...slides, // all real slides
    slides[0], // first real slide
  ];

  // We want to start on index 1 (the first real slide in the extended array).
  const [currentIndex, setCurrentIndex] = useState(1);
  // This determines whether we apply the CSS transition.
  // We temporarily disable it when we do the "invisible" jump.
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);

  const BOX_WIDTH = 200; // Each box is 200px wide
  const transitionDuration = 500; // half a second, for example

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  // Whenever currentIndex changes, we check if we crossed the boundary (past last or before first).
  useEffect(() => {
    // If we go beyond the last real slide (which lives at index = totalRealSlides),
    // we jump back to index = 1 (the first real slide) without a visible transition.
    if (currentIndex === totalRealSlides + 1) {
      // Wait for the slide transition to end, then jump instantly
      // without the transition being visible.
      setTimeout(() => {
        setIsTransitionEnabled(false);
        setCurrentIndex(1);
      }, transitionDuration);
    }

    // If we go before the first real slide (index = 0),
    // jump to the last real slide at index = totalRealSlides (the 10th slide).
    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitionEnabled(false);
        setCurrentIndex(totalRealSlides);
      }, transitionDuration);
    }
  }, [currentIndex, totalRealSlides, transitionDuration]);

  // After we do an “invisible jump,” we should re-enable the transition for the next user action.
  // We do that whenever currentIndex changes (on the next render).
  // If it’s disabled, we re-enable it with a short timeout, so the jump is never seen.
  useEffect(() => {
    if (!isTransitionEnabled) {
      // Re-enable transitions on the next tick, once we've moved instantly.
      // This ensures we don’t see the jump visually.
      requestAnimationFrame(() => {
        setIsTransitionEnabled(true);
      });
    }
  }, [isTransitionEnabled]);

  return (
    <div className="w-full max-w-[220px] mx-auto mt-10">
      <div className="relative overflow-hidden w-[200px] border-2 border-gray-300 rounded-lg">
        {/* 
          The inner track:
          - We use flex so slides appear in a row.
          - The transform is based on currentIndex * BOX_WIDTH.
          - The transition is only applied if isTransitionEnabled is true.
        */}
        <div
          className={`flex ${
            isTransitionEnabled
              ? "transition-transform duration-500 ease-in-out"
              : ""
          }`}
          style={{
            transform: `translateX(-${currentIndex * BOX_WIDTH}px)`,
          }}
        >
          {extendedSlides.map((color, i) => (
            <div
              key={i}
              className={`${color} flex-shrink-0 w-[200px] h-[200px] 
                          flex items-center justify-center text-white text-xl`}
            >
              {/* For demonstration, just show the index. 
                  (Real usage might have an <img> or other content.) */}
              Slide {i}
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

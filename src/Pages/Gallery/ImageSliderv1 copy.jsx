import React, { useEffect } from "react";
import "./ImageSlider.css"; // Import the separate CSS file

export default function ImageSliderV1() {
  // Array of slider items
  const slides = [
    {
      name: "Switzerland",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      imageUrl: "https://i.ibb.co/qCkd9jS/img1.jpg",
    },
    {
      name: "Finland",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      imageUrl: "https://i.ibb.co/jrRb11q/img2.jpg",
    },
    {
      name: "Iceland",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      imageUrl: "https://i.ibb.co/NSwVv8D/img3.jpg",
    },
    {
      name: "Australia",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      imageUrl: "https://i.ibb.co/Bq4Q0M8/img4.jpg",
    },
    {
      name: "Netherland",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      imageUrl: "https://i.ibb.co/jTQfmTq/img5.jpg",
    },
    {
      name: "Ireland",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      imageUrl: "https://i.ibb.co/RNkk6L0/img6.jpg",
    },
  ];

  useEffect(() => {
    // Grab the "next" and "prev" buttons after the component mounts
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    const handleNext = () => {
      const items = document.querySelectorAll(".item");
      document.querySelector(".slide").appendChild(items[0]);
    };

    const handlePrev = () => {
      const items = document.querySelectorAll(".item");
      document.querySelector(".slide").prepend(items[items.length - 1]);
    };

    nextBtn.addEventListener("click", handleNext);
    prevBtn.addEventListener("click", handlePrev);

    // Cleanup event listeners on unmount
    return () => {
      nextBtn.removeEventListener("click", handleNext);
      prevBtn.removeEventListener("click", handlePrev);
    };
  }, []);

  return (
    <div>
      <div className="container">
        <div className="slide">
          {slides.map((slide, index) => (
            <div
              className="item"
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
              key={index}
            >
              <div className="content">
                <div className="name">{slide.name}</div>
                <div className="des">{slide.description}</div>
                <button>See More</button>
              </div>
            </div>
          ))}
        </div>

        <div className="button">
          <button className="prev text-white">{"<"}</button>
          <button className="next text-white">{">"}</button>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import {
  ArrowLeftGalleryIcon,
  ArrowRightGalleryIcon,
  GalleryBg,
  SampleImageJarCan,
  WineGlassTest3,
  WineTest,
} from "../../assets/Icons";
import Header from "../../Components/Header/Header";
import { delay, easeInOut, motion } from "framer-motion";
import GalleryCard from "./GalleryCard";

const Galleryv2 = () => {
  const [boxes, setBoxes] = useState([
    {
      id: 0,
      img: GalleryBg,
      tag: "Gallery Bg",
      title: "European Wine Tanks",
      description: "Imported Wine making tanks First in Nepal",
    },

    {
      id: 1,
      img: SampleImageJarCan,
      tag: "Equipment",
      title: "European Wine Tanks",
      description: "Imported Wine making tanks First in Nepal",
    },
    {
      id: 2,
      img: WineTest,
      tag: "Machinery",
      title: "Industrial Juice Extractor",
      description:
        "High-efficiency juice extraction for wineries and breweries",
    },
    {
      id: 3,
      img: WineGlassTest3,
      tag: "Storage",
      title: "Stainless Steel Barrels",
      description: "Ideal for aging and storing premium wines",
    },
  ]);
  const [carouselImage, setCarouselImage] = useState(boxes[0].img);
  const carouselAnimationDuration = 500;
  const [boxesSmall, setBoxesSmall] = useState([
    {
      id: 1,
      img: SampleImageJarCan,
      tag: "Equipment",
      title: "European Wine Tanks",
      description: "Imported Wine making tanks First in Nepal",
    },
    {
      id: 2,
      img: WineTest,
      tag: "Machinery",
      title: "Industrial Juice Extractor",
      description:
        "High-efficiency juice extraction for wineries and breweries",
    },
  ]);
  // for animating left
  const [isAnimating, setIsAnimating] = useState(false);
  // for right animation
  const [isAnimatingRight, setIsAnimatingRight] = useState(false);

  // function to handle the next right ward sliding of the carousel
  const handleNext = () => {
    setIsAnimatingRight(true);
    setTimeout(() => {
      setIsAnimatingRight(false);
    }, carouselAnimationDuration); // Matches animation duration
  };

  // function to handle the left ward sliding of the carousel
  const handlePrevious = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setBoxes((prev) => {
        // Ensure prev is valid and not empty
        if (!prev || prev.length === 0) return prev;
        // Left rotate by one: remove the first element and append it to the end
        const updatedBoxes = [...prev.slice(1), prev[0]];
        // Optionally update the carouselImage based on the new first element
        setCarouselImage(updatedBoxes[0]?.img || "");
        return updatedBoxes;
      });
      setIsAnimating(false);
    }, carouselAnimationDuration); // Matches the same animation duration
  };
  return (
    <div className="flex flex-col h-[112vh] md:h-[112vh] lg:h-screen py-4 px-4  gap-y-4 md:gap-y-0 lg:gap-y-0">
      {/* Header */}
      <div className="flex-[0%] md:flex-[0%] lg:flex-[20%] ">
        <Header />
      </div>

      {/* Gallery section */}
      <motion.div className="flex-[100%]  mg:flex-[100%] lg:flex-[65%] flex flex-col sm:flex-col md:flex-col lg:flex-row gap-x-4 gap-y-8">
        {/* left image section */}
        <motion.div
          className="flex-[50%] rounded-4xl flex flex-col overflow-hidden px-4 relative"
          initial={{ opacity: 0, scale: 0.8, x: -112 }}
          animate={{
            opacity: isAnimating ? [1, 0.6, 0.4] : 1,
            scale: isAnimating ? [1.2, 1.05, 1.1] : 1,
            x: isAnimating ? -240 : 0,
            y: isAnimating ? 150 : 0,
          }}
          transition={{
            opacity: { duration: 0.6, ease: "easeOut" },
            scale: { duration: 0.6, ease: "easeOut" },
            x: { duration: 0.4, ease: "easeOut" },
            y: { duration: 0.4, ease: "easeOut" },
          }}
          // style={{
          //   backgroundImage: ` url(${boxes[0]?.img})`,
          //   backgroundSize: "cover",
          //   backgroundRepeat: "no-repeat",
          //   overflow: "hidden",
          //   backgroundPosition: "center",
          // }}
        >
          {/* 1) Child div for the background layer */}
          <motion.div
            className="absolute inset-0"
            // The key is "absolute" + "inset-0" so it fully covers the parent
            style={{
              backgroundImage: `url(${boxes[0]?.img})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            // 2) Animate scale to zoom the background in/out
            initial={{ scale: 1 }}
            animate={{ scale: isAnimating ? [1.4, 1.8] : 1.1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
          {/* Utility */}
          <div className="relative z-10 flex-[25%] sm:flex-[25%] md:flex-[25%] lg:flex-[15%] " />

          {/* Buttons*/}
          <div className="relative z-10 flex-[40%] sm:flex-[40%]  md:flex-[40%] lg:flex-[60%] flex flex-col justify-center ">
            <div className="">
              <div className="w-full flex justify-between">
                {/* Left Arrow */}
                <div
                  className="border border-white px-4 py-4 rounded-full cursor-pointer group transition-all duration-300 hover:scale-105 hover:border-yellow-600"
                  onClick={handlePrevious}
                >
                  <div
                    className="border border-white px-2 py-2 rounded-full w-full h-full relative transition-all duration-300 group-hover:border-yellow-400 group-hover:scale-110"
                    style={{ clipPath: "inset(0 40% 0 0)" }}
                  >
                    <img
                      src={ArrowLeftGalleryIcon}
                      alt="<"
                      className="size-8"
                    />
                  </div>
                </div>

                {/* Right Arrow */}
                <div
                  className="border border-white px-4 py-4 rounded-full relative cursor-pointer group transition-all duration-300 hover:scale-105 hover:border-yellow-600"
                  onClick={handleNext}
                >
                  <div
                    className="border border-white px-2 py-2 rounded-full w-full h-full relative transition-all duration-300 group-hover:border-yellow-400 group-hover:scale-110"
                    style={{ clipPath: "inset(0 0% 0 40%)" }}
                  >
                    <img
                      src={ArrowRightGalleryIcon}
                      alt=">"
                      className="size-8 relative z-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Information  */}
          <div className="relative z-10 flex-[25%] text-white px-2 flex flex-col gap-y-0 sm:gap-y-0 md:gap-y-2 lg:gap-y-2">
            <div>
              <p className="font-bold text-[#C2C2C2] text-[12px] sm:text-[12px] md:text-[16px] lg:text-[20px]">
                Location
              </p>
            </div>
            <div>
              {" "}
              <p className="font-bold text-[#fff] text-[20px] sm:text-[20px] md:text-[28px] lg:text-[32px]">
                Vineyard
              </p>
            </div>
            <div>
              {" "}
              <p className="font-bold text-[#fff] text-[12px] sm:text-[12px] md:text-[20px] lg:text-[24px] mb-2">
                Wine made from the best Grapes
              </p>
            </div>
          </div>
        </motion.div>

        {/* right gallery section */}
        <motion.div
          className="px-0 py-0 flex-[50%]  flex-col  gap-y-2"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Buttons */}
          <div className="flex gap-x-4 px-1 flex-[10%]">
            <div className="min-w-[120px] sm:min-w-[120px] md:min-w-[140px] lg:min-w-[160px] py-3 border flex justify-center items-center bg-[#1C272C] text-[#fff] rounded-2xl transition-all duration-300  text-[16px] sm:text-[16px] md:text-[18px] lg:text-[24px]">
              <button>Photos</button>
            </div>
            <div className="min-w-[120px] sm:min-w-[120px] md:min-w-[140px] lg:min-w-[160px] py-3 border flex justify-center items-center bg-[#1C272C] text-[#fff] rounded-2xl transition-all duration-300 text-[16px] sm:text-[16px] md:text-[18px] lg:text-[24px]">
              <button>Videos</button>
            </div>
          </div>

          {/* Images section for larger screen*/}
          <div className="flex-[90%] hidden sm:hidden md:flex lg:flex flex-row  px-2 gap-x-6 justify-between py-14 ">
            {/* Gallery Frame 2 */}
            <GalleryCard
              isAnimating={isAnimating}
              box={boxes[1]}
              scaleImg={true}
              scale={1.19}
              x={-124}
            />

            {/* Gallery Frame 3 */}
            <GalleryCard isAnimating={isAnimating} box={boxes[2]} />
            {/* Gallery Frame 4 */}
            <GalleryCard isAnimating={isAnimating} box={boxes[3]} />
          </div>
        </motion.div>
      </motion.div>

      {/* Util */}
      <div className="flex-[0%] md:flex-[0%] lg:flex-[15%] " />
    </div>
  );
};

export default Galleryv2;

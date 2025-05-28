import { useState } from "react";
import { ArrowLeftGalleryIcon, ArrowRightGalleryIcon, GalleryBg, SampleImageJarCan, WineGlassTest3, WineTest } from "../../assets/Icons";
import Header from "../../Components/Header/Header";
import { motion } from "framer-motion";

const Gallery = () => {
  const [boxes, setBoxes] = useState([
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
      description: "High-efficiency juice extraction for wineries and breweries",
    },
    {
      id: 3,
      img: WineGlassTest3,
      tag: "Storage",
      title: "Stainless Steel Barrels",
      description: "Ideal for aging and storing premium wines",
    },
  ]);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNextRight = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setBoxes((prev) => [...prev.slice(1), prev[0]]);
      setIsAnimating(false);
    }, 600); // Matches animation duration
  };


  return (
    <div className="flex flex-col h-[108vh] md:h-[108vh] lg:h-screen py-4 px-4 overflow-auto gap-y-4 md:gap-y-0 lg:gap-y-0">
      {/* Header */}
      <div className="flex-[0%] md:flex-[0%] lg:flex-[20%] ">
        <Header />
      </div>

      {/* Gallery section */}
      <motion.div className="flex-[100%]  mg:flex-[100%] lg:flex-[65%] flex flex-col sm:flex-col md:flex-col lg:flex-row gap-x-4 gap-y-8"

      >
        {/* left image section */}
        <motion.div className="flex-[50%] rounded-4xl flex flex-col overflow-hidden px-4 h-full w-full"
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.94 }}
          initial={{ opacity: 0, scale: 0.9, y: -80 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          style={{
            backgroundImage: ` url(${GalleryBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            overflow: "hidden",
            backgroundPosition: "center",
          }}
        >

          {/* Utility */}
          <div className="flex-[25%] sm:flex-[25%] md:flex-[25%] lg:flex-[15%] " />

          {/* Buttons*/}
          <div className="flex-[40%] sm:flex-[40%]  md:flex-[40%] lg:flex-[60%] flex flex-col justify-center ">
            <div>
              <div className="w-full flex justify-between">
                {/* Left Arrow */}
                <div className="border border-white px-4 py-4 rounded-full cursor-pointer group transition-all duration-300 hover:scale-105 hover:border-yellow-600">
                  <div className="border border-white px-2 py-2 rounded-full w-full h-full relative transition-all duration-300 group-hover:border-yellow-400 group-hover:scale-110" style={{ clipPath: "inset(0 40% 0 0)" }}>
                    <img src={ArrowLeftGalleryIcon} alt="<" className="size-8" />
                  </div>
                </div>

                {/* Right Arrow */}
                <div className="border border-white px-4 py-4 rounded-full relative cursor-pointer group transition-all duration-300 hover:scale-105 hover:border-yellow-600" onClick={handleNextRight}>
                  <div className="border border-white px-2 py-2 rounded-full w-full h-full relative transition-all duration-300 group-hover:border-yellow-400 group-hover:scale-110"
                    style={{ clipPath: "inset(0 0% 0 40%)" }}>
                    <img src={ArrowRightGalleryIcon} alt=">" className="size-8 relative z-10" />
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Information  */}
          <div className="flex-[25%] text-white px-2 flex flex-col gap-y-2 sm:gap-y-2 md:gap-y-2 lg:gap-y-2">
            <div><p className="font-bold text-[#C2C2C2] text-[12px] sm:text-[12px] md:text-[16px] lg:text-[20px]">Location</p></div>
            <div> <p className="font-bold text-[#fff] text-[24px] sm:text-[24px] md:text-[28px] lg:text-[32px]">Vineyard</p></div>
            <div> <p className="font-bold text-[#fff] text-[16px] sm:text-[16px] md:text-[20px] lg:text-[24px]">Wine made from the best Grapes</p></div>
          </div>
        </motion.div>

        {/* right gallery section */}
        <motion.div className="px-0 py-0 flex-[50%]  flex-col  gap-y-2"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Buttons */}
          <div className="flex gap-x-4 px-0 flex-[10%]">
            <div className="min-w-[120px] sm:min-w-[120px] md:min-w-[140px] lg:min-w-[160px] py-3 border flex justify-center items-center bg-[#1C272C] text-[#fff] rounded-2xl transition-all duration-300  text-[16px] sm:text-[16px] md:text-[18px] lg:text-[24px]"><button>Photos</button></div>
            <div className="min-w-[120px] sm:min-w-[120px] md:min-w-[140px] lg:min-w-[160px] py-3 border flex justify-center items-center bg-[#1C272C] text-[#fff] rounded-2xl transition-all duration-300 text-[16px] sm:text-[16px] md:text-[18px] lg:text-[24px]"><button>Videos</button></div>
          </div>

          {/* Images section */}
          <div className="flex-[90%] flex flex-row overflow-hidden px-2 gap-x-5 justify-between py-4">
            {boxes.map((box, index) => {
              const scaleFactor = isAnimating ? 1.2 - index * 0.25 : 1; // First is largest, then decreasing
              const scale = Math.max(scaleFactor, 0.8);// Ensures minimum scale of 0.8
              const spacing = isAnimating ? 140 * scale : 0;  // Adjust spacing based on scale
              return (
                <motion.div
                  key={box.id}
                  className="flex flex-col gap-y-6 justify-center h-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.94 }}
                  initial={{ opacity: 0, scale: 0.9 }}

                  transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.1 }}
                  animate={{
                    opacity: 1,
                    scale,
                    x: index * spacing,
                  }}
                >
                  <div className="flex-[10%]" />
                  <div className="flex flex-col justify-center flex-[90%] gap-y-3">
                    <img
                      src={box.img}
                      alt="Gallery Item"
                      className="w-[214px] h-[224px] sm:w-[214px] sm:h-[224px] md:w-[254px] md:h-[264px] lg:w-[294px] lg:h-[304px] rounded-4xl"
                    />
                    {/* Information */}
                    <div className="flex flex-col gap-y-2 px-2">
                      {/* Gallery card title */}
                      <div>
                        <p className="text-[#7A7A7A] text-[10px] sm:text-[10px] md:text-[12px] lg:[12px]">
                          {box.tag}
                        </p>
                      </div>
                      {/* Tag */}
                      <div>
                        <p className="text-[#004361] text-[16px] sm:text-[16px] md:text-[20px] lg:text-[20px]">
                          {box.title}
                        </p>
                      </div>
                      {/* Description */}
                      <div>
                        <p className="max-w-[264px] text-[#1C272C] text-[10px] sm:text-[10px] md:text-[12px] lg:[12px]">
                          {box.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>


        </motion.div>
      </motion.div>

      {/* Util */}
      <div className="flex-[0%] md:flex-[0%] lg:flex-[15%] " />


    </div>
  );
};

export default Gallery;
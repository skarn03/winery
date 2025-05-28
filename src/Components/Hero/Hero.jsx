import { motion, AnimatePresence, useInView } from "framer-motion";
import Header from "../Header/Header";
import { useState, useRef } from "react";

const Hero = ({ scrollToNext }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Ref to track SVG visibility
  const wineBottleRef = useRef(null);
  const isInView = useInView(wineBottleRef, { amount: 0.7, once: false });

  return (
    <div className="bg-[#FFFFE3] min-h-screen flex flex-col font-Tanker w-full max-w-screen">

      {/* Hero Content */}
      <div className="relative flex flex-col items-center justify-center flex-grow text-black text-center px-6 ">

        {/* Decorative Dots (Each Rotates Independently) */}
        <div className="flex gap-24 mb-5 max-w-screen my-20" >
          {/* Circle SVG */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className='relative bottom-[6px]'
            width="33"
            height="33"
            fill="none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            animate={{ rotate: isHovered ? 180 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <circle cx="16.5" cy="16.5" r="9.5" fill="#202019"></circle>
            <circle cx="16.5" cy="2.5" r="2.5" fill="#202019"></circle>
          </motion.svg>

          {/* Triangle SVG */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="19"
            fill="none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            animate={{ rotate: isHovered ? 180 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <path fill="#202019" d="M11.283 17.747c-.13.23-.317.42-.542.551a1.463 1.463 0 0 1-2.023-.55L.198 2.755a1.52 1.52 0 0 1 0-1.504c.13-.229.317-.419.542-.55C.965.568 1.22.5 1.48.5h17.04c.26 0 .515.07.74.201.225.132.412.322.542.55a1.52 1.52 0 0 1 0 1.505l-8.52 14.991"></path>
          </motion.svg>

          {/* Square SVG */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="19"
            fill="none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            animate={{ rotate: isHovered ? 180 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <rect width="18" height="18" y="0.5" fill="#202019" rx="1"></rect>
          </motion.svg>
        </div>

        {/* Hero Text + Wine Bottle */}
        <motion.div
          className="relative flex flex-col sm:flex-row justify-center items-center w-full mt-20 sm:mt-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          {/* Centered Text */}
          <motion.h1
            className="md:ml-12 text-[50px] md:text-[104px]  tracking-wide leading-tight text-center text-nowrap max-w-screen "
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            A TOAST TO LIFE’S <br /> FINEST MOMENTS
          </motion.h1>

          {/* Positioned Wine Bottle SVG with Enter & Exit Animation */}
          <div className=" mt-10 sm:mt-0 sm:ml-12  md:block" ref={wineBottleRef}>
            <AnimatePresence>
              {isInView && (
                <motion.svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  width={56}
                  height={226}
                  fill="none"
                  initial={{ y: 600, opacity: 0 }} // Start below viewport
                  animate={{ y: 0, opacity: 1 }} // Moves up into view
                  exit={{ y: 200, opacity: 0 }} // Goes back down when leaving
                  transition={{ type: "spring", stiffness: 120, damping: 14 }}
                >
                  <path
                    fill="#202019"
                    d="M10.667 222c-2.299 0-4.503-1.169-6.129-3.251S2 213.844 2 210.9v-111c0-22.2 8.667-41.625 17.333-44.4V5.55c0-1.472.457-2.884 1.27-3.924S22.517 0 23.667 0h8.666c1.15 0 2.252.585 3.065 1.626.812 1.04 1.269 2.452 1.269 3.924V55.5C45.333 58.275 54 77.7 54 99.9v111c0 2.944-.913 5.767-2.538 7.849-1.626 2.082-3.83 3.251-6.129 3.251z"
                  ></path>
                  <path
                    stroke="#FFFFE3"
                    d="M37 18c-6.856 2.038-10.731 2.128-18 0m36 92c-20.57 2.609-32.194 2.724-54 0m54 80c-20.57 2.609-32.194 2.724-54 0M37 15c-6.856 2.038-10.731 2.128-18 0"
                  ></path>
                </motion.svg>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="flex flex-col pb-10 items-center cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, y: 5, transition: { duration: 0.3 } }} // Shorter duration for hover
        whileTap={{ scale: 0.9 }}
        onClick={scrollToNext} // Click handler to scroll down
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="40" fill="none">
          <rect width="24" height="40" fill="#202019" rx="12"></rect>
          <motion.circle
            cx="12"
            cy="12"
            r="8"
            fill="#FFFFE3"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
        <p className="text-[24px]">Scroll Down</p>
      </motion.div>
    </div>
  );
};

export default Hero;

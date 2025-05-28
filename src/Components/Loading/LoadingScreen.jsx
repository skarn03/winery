import React from 'react';
import { motion } from 'framer-motion';

const LoaderScreen = ({ isLoading, text }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#202019] transition-all duration-[1200ms] ease-in-out ${isLoading ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
    >
      {/* Rotating SVG Icons (always spinning) */}
      <div className="flex gap-24 mb-8">
        {/* Circle */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="33"
          fill="none"
          className="cursor-default relative bottom-[6px]"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        >
          <circle cx="16.5" cy="16.5" r="9.5" fill="#EDECD2" />
          <circle cx="16.5" cy="2.5" r="2.5" fill="#EDECD2" />
        </motion.svg>

        {/* Triangle */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="19"
          fill="none"
          className="cursor-default"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
        >
          <path
            fill="#EDECD2"
            d="M11.283 17.747c-.13.23-.317.42-.542.551a1.463 1.463 0 0 1-2.023-.55L.198 2.755a1.52 1.52 0 0 1 0-1.504c.13-.229.317-.419.542-.55C.965.568 1.22.5 1.48.5h17.04c.26 0 .515.07.74.201.225.132.412.322.542.55a1.52 1.52 0 0 1 0 1.505l-8.52 14.991"
          />
        </motion.svg>

        {/* Square */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="19"
          fill="none"
          className="cursor-default"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        >
          <rect width="18" height="18" y="0.5" fill="#EDECD2" rx="1" />
        </motion.svg>
      </div>

      {/* Text Animation (once on mount) */}
      <motion.h1
        className="text-4xl sm:text-5xl font-light text-[#EDECD2] tracking-wide ml-4  font-satoshi-regular"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
      >
        {text}
      </motion.h1>
    </div>
  );
};

export default LoaderScreen;
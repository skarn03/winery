import React from "react";
import { motion } from "framer-motion";

const GalleryCard = ({
  box,
  isAnimating = false,
  scale = 1,
  x = -112,
  scaleImg = false,
}) => {
  // If the box is null/undefined, don't render anything.
  if (!box) return null;

  // Destructure properties from the box with default fallbacks.
  const { img = "", tag = "", title = "", description = "" } = box;

  return (
    <motion.div
      whileHover={{ scale: 1* 1.02 }}
      whileTap={{ scale: scale * 0.94 }}
      initial={{ opacity: 0, scale: scale * 0.9 }}
      transition={{
        opacity: { duration: 0.3, ease: "easeInOut", delay: 0.1 },
        scale: { duration: 0.2, ease: "easeInOut", delay: 0.0 },
      }}
      animate={{
        opacity: 1,
        scale: isAnimating ? scale : 1,
        x: isAnimating ? x : 0,
      }}
    >
      <div className="flex-[10%]" />
      <div className="flex flex-col justify-center flex-[90%] gap-y-3">
        <div className="w-[214px] h-[224px] sm:w-[214px] sm:h-[224px] md:w-[254px] md:h-[264px] lg:w-[294px] lg:h-[304px] rounded-4xl overflow-hidden relative">
          {img && (
            // 1) Use motion.img
            // 2) Key by the image source so the animation re-runs on change
            // 3) Fade/scale in to achieve a smooth appearance;
            <motion.img
              key={img}
              src={img}
              alt="Gallery Item"
              className="absolute top-0 left-0 w-full h-full object-cover"
              initial={{ opacity: 1, scale: scaleImg ? 1.9 : 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          )}
        </div>
        {/* Information */}
        <div className="flex flex-col gap-y-2 px-2">
          {/* Tag */}
          <div>
            <p className="text-[#7A7A7A] text-[10px] sm:text-[10px] md:text-[12px] lg:text-[12px]">
              {tag}
            </p>
          </div>
          {/* Title */}
          <div>
            <p className="text-[#004361] text-[16px] sm:text-[16px] md:text-[20px] lg:text-[20px]">
              {title}
            </p>
          </div>
          {/* Description */}
          <div>
            <p className="max-w-[264px] text-[#1C272C] text-[10px] sm:text-[10px] md:text-[12px] lg:text-[12px]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default GalleryCard;

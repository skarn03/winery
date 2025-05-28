import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import tankImage from "./tankImage.webp";

export default function CraftsmanshipSection({ mode = "light" }) {
    const isDark = mode === "dark";
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

    const bgColor = isDark ? "#202019" : "#FFFFE3";
    const textColor = isDark ? "#FFFFE3" : "#202019";
    const subTextColor = isDark ? "#D3D3C0" : "#676767";

    // Motion Variants
    const slideFromRight = {
        hidden: { opacity: 0, x: 80 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
    };

    const imageSlideUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
    };

    const slideFromLeft = {
        hidden: { opacity: 0, x: -80 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } },
    };

    return (
        <section
            ref={ref}
            className="w-full px-4 py-16 md:px-10 xl:px-15 font-satoshi-regular"
            style={{ backgroundColor: bgColor, color: textColor }}
        >
            <div className="max-w-7xl mx-auto flex flex-col gap-20">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
                    {/* Left Image */}
                    <motion.div
                        className="hidden md:flex md:col-span-4 flex-col gap-y-12 justify-center items-start "
                        variants={imageSlideUp}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <img
                            src={tankImage}
                            alt="Winery Equipment"
                            className="rounded-lg w-full lg:max-w-[256px] lg:max-h-[400px] xl:max-w-[300px] xl:max-h-[540px] object-cover"
                        />
                        <div className="flex space-x-4 text-xl justify-center items-center mx-auto pr-10">
                            {/* Decorative SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 215 33" fill="none" className="w-[180px] h-[32px]">
                                <circle cx="16.5" cy="16.5" r="9.5" fill={textColor}></circle>
                                <circle cx="16.5" cy="2.5" r="2.5" fill={textColor}></circle>
                                <path
                                    fill={textColor}
                                    fillRule="evenodd"
                                    d="M116.283 24.747c-.13.23-.317.42-.542.551a1.464 1.464 0 0 1-2.023-.55l-8.52-14.992a1.52 1.52 0 0 1 .542-2.055c.225-.132.48-.201.74-.201h17.04c.26 0 .515.07.74.201.225.132.412.322.542.55a1.52 1.52 0 0 1 0 1.505l-8.52 14.991z"
                                    clipRule="evenodd"
                                ></path>
                                <rect width="18" height="18" x="197" y="7.5" fill={textColor} rx="1"></rect>
                            </svg>
                        </div>
                    </motion.div>

                    {/* Right Content */}
                    <div className="md:col-span-8 flex flex-col gap-6">
                        <motion.h2
                            className="text-3xl sm:text-4xl md:text-[40px] xl:text-[60px] font-melodrama-medium leading-tight"
                            variants={slideFromRight}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            Craftsmanship Meets Equipment
                        </motion.h2>

                        {/* Horizontal Rule */}
                        <motion.div
                            className="relative w-full h-[2px] bg-current"
                            variants={fadeUp}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            <div
                                className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full"
                                style={{ backgroundColor: textColor }}
                            ></div>
                        </motion.div>

                        {/* Paragraph & mobile image */}
                        <motion.div
                            className="flex space-x-4"
                            variants={fadeUp}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            <img
                                src={tankImage}
                                alt="Winery Equipment"
                                className="md:hidden rounded-lg w-[141px] h-[200px] sm:w-[200px] sm:h-[240px] object-cover"
                            />
                            <p
                                className="text-[16px] sm:text-[22px] md:text-lg font-satoshi-medium"
                                style={{ color: subTextColor }}
                            >
                                The art of winemaking finds its perfect balance at United Winery.
                                Our state-of-the-art equipment ensures precision at every step,
                                while the skilled hands of our winemakers infuse each bottle with
                                passion and tradition.
                            </p>
                        </motion.div>

                        <motion.p
                            className="text-base md:text-lg font-satoshi-medium"
                            style={{ color: subTextColor }}
                            variants={fadeUp}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            At United Winery, we weave the wisdom of the past with the precision of
                            the future. Our state-of-the-art tools are the brushes, and the vineyard
                            is our canvas, allowing us to craft wines that are as innovative as they
                            are timeless.
                        </motion.p>

                        {/* Bottom Section */}
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center"
                            variants={slideFromLeft}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            <div className="md:col-span-8 flex flex-col gap-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="max-w-3/4"
                                    width="500"
                                    fill="none"
                                    viewBox="0 0 649 12"
                                >
                                    <path
                                        fill="#636363"
                                        d="M10 5 0 .226v11.548L10 7zm638 2a1 1 0 0 0 0-2zM9 7h639V5H9z"
                                    ></path>
                                </svg>

                                <div className="flex flex-row space-x-8 xl:space-x-12 w-screen">
                                    <h3 className="text-3xl sm:text-4xl md:text-[40px] xl:text-[50px]  font-melodrama-medium">
                                        Innovation in <br className=" md:hidden"></br> Motion
                                    </h3>
                                    <div className="md:col-span-4 flex justify-center">
                                        <img
                                            src={tankImage}
                                            alt="Winery Tank Circle"
                                            className="rounded-full w-40 h-40 md:w-56 md:h-56 object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

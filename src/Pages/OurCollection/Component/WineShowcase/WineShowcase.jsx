import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import WineBottle from "./WineBottle.webp"; // Local import
export default function WineShowcase() {
    // Track active tab: "about", "taste", or "enjoy"
    const [activeTab, setActiveTab] = useState("about");

    // Renders the appropriate content based on active tab
    const renderTabContent = () => {
        return (
            <div className="text-[14px] sm:text-[16px] md:text-base text-gray-700 space-y-1 md:space-y-2 font-kollektif text-left">
                {activeTab === "about" && (
                    <>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-2">
                            <span className="font-semibold">Type:</span> <span>Sweet White Wine</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-2">
                            <span className="font-semibold">Region:</span> <span>Fictional Vineyard, India</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-2">
                            <span className="font-semibold">Alcohol Content:</span> <span>10.5%</span>
                        </div>
                    </>
                )}

                {activeTab === "taste" && (
                    <>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-2">
                            <span className="font-semibold">Aroma:</span> <span>Floral with hints of citrus</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-2">
                            <span className="font-semibold">Taste:</span> <span>Crisp, balanced sweetness with a refreshing finish</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-2">
                            <span className="font-semibold">Finish:</span> <span>Long and elegant</span>
                        </div>
                    </>
                )}

                {activeTab === "enjoy" && (
                    <>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-2">
                            <span className="font-semibold">Serving:</span> <span>Chill before serving</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-2">
                            <span className="font-semibold">Pairing:</span> <span>Best enjoyed with desserts or light appetizers</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-2">
                            <span className="font-semibold">Experience:</span> <span>Savor slowly to appreciate the intricate flavors</span>
                        </div>
                    </>
                )}
            </div>
        );
    };


    // Create a ref for the wine image container and check if it's in view.
    const imageRef = useRef(null);
    // Using useInView with amount 0.7: the animation triggers when 70% of the image is visible.
    const isInView = useInView(imageRef, { amount: 0.7, once: false });

    return (
        <section className="bg-[#FFF9EA]   px-4 sm:px-6 md:px-16 font-kollektif w-full h-full flex justify-center items-center">
            <div className="w-full mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-10">
                {/* Left: Wine Bottle Image with drop-from-top animation */}
                <div ref={imageRef} className="flex-1 flex justify-center">
                    <AnimatePresence>
                        {isInView && (
                            <motion.img
                                src={WineBottle}
                                alt="The Rising Royals Wine Bottle"
                                className="h-[280px] sm:h-[320px] md:w-[145px] md:h-[531px] md:max-w-sm object-contain"
                                initial={{ y: -600, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -600, opacity: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 14,
                                }}
                            />
                        )}
                    </AnimatePresence>
                </div>

                {/* Right: Wine Info */}
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-xl sm:text-2xl md:text-[40px] font-bold text-[#CF9A07] mb-1">
                        The Rising Royals
                    </h2>
                    <p className="text-base sm:text-lg md:text-[24px] text-[#636363] mb-6">
                        Sweet White Wine
                    </p>

                    {/* Tabs */}
                    <nav className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6 text-[16px] ">
                        <button
                            onClick={() => setActiveTab("about")}
                            className={`pb-1 transition-colors ${activeTab === "about"
                                ? "text-[#CF9A07] font-semibold border-b-2 border-[#CF9A07]"
                                : "text-[#E7B529] hover:text-[#5B3D0D]"
                                }`}
                        >
                            About the Wine
                        </button>
                        <button
                            onClick={() => setActiveTab("taste")}
                            className={`pb-1 transition-colors ${activeTab === "taste"
                                ? "text-[#CF9A07] font-semibold border-b-2 border-[#CF9A07]"
                                : "text-[#E7B529] hover:text-[#5B3D0D]"
                                }`}
                        >
                            Taste Notes
                        </button>
                        <button
                            onClick={() => setActiveTab("enjoy")}
                            className={`pb-1 transition-colors ${activeTab === "enjoy"
                                ? "text-[#CF9A07] font-semibold border-b-2 border-[#CF9A07]"
                                : "text-[#E7B529] hover:text-[#5B3D0D]"
                                }`}
                        >
                            How to Enjoy
                        </button>
                    </nav>

                    {/* Tab Content */}
                    <div className="mb-10">{renderTabContent()}</div>

                    {/* Inquire Now Button with Circle Arrow */}
                    <button className="inline-flex items-center gap-4 group">
                        <span className="text-[#CF9A07] font-medium text-lg sm:text-xl">
                            Inquire Now
                        </span>
                        <span className="relative flex items-center justify-center w-12 h-12 transition-transform duration-300 group-hover:translate-x-1">
                            <svg
                                width="48"
                                height="48"
                                viewBox="0 0 120 120"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_861_179)">
                                    <path d="M59.9997 117.857C91.9533 117.857 117.857 91.9533 117.857 59.9997C117.857 28.0461 91.9533 2.14258 59.9997 2.14258C28.0461 2.14258 2.14258 28.0461 2.14258 59.9997C2.14258 91.9533 28.0461 117.857 59.9997 117.857Z"
                                        stroke="#CF9A07" strokeWidth="4" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M55.7139 102.645C57.1239 102.785 58.554 102.857 60.0009 102.857C83.6702 102.857 102.858 83.6691 102.858 59.9997C102.858 36.3304 83.6702 17.1426 60.0009 17.1426C58.554 17.1426 57.1239 17.2143 55.7139 17.3543V21.6638C57.1215 21.5082 58.5519 21.4283 60.0009 21.4283C81.3032 21.4283 98.5723 38.6974 98.5723 59.9997C98.5723 81.3021 81.3032 98.5711 60.0009 98.5711C58.5519 98.5711 57.1215 98.4912 55.7139 98.3356V102.645Z"
                                        fill="#CF9A07" />
                                    <path d="M75 59.9997H45M75 59.9997L62.1429 72.8569M75 59.9997L62.1429 47.1426"
                                        stroke="#CF9A07" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_861_179">
                                        <rect width="120" height="120" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
                    </button>




                </div>
            </div>
        </section>
    );
}

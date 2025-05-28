import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Replace these with your actual images
import redWine from "./redWine.webp";
import whiteWine from "./whiteWine.webp";
import roseWine from "./redWine.webp";

// Sample data
const wineTypes = {
    risingRoyals: [
        {
            id: 1,
            name: "Sweet Red Wine",
            image: redWine,
            description:
                "The Rising Royal Sweet Red Wine offers a rich, velvety     experience with bold Sangiovese and Cabernet flavors. It reveals ripe dark berries with a hint of spice, complemented by smooth tannins and a gracefully lingering finish.",
            howToDrink: [
                "Serve chilled around 10°C (50°F).",
                "Pairs well with light appetizers and salads.",
            ],
            whenToDrink: [
                "Perfect for special dinners and celebrations.",
                "Pairs well with roasted meats and bold cheeses.",
            ],
        },
        {
            id: 2,
            name: "Rosé Sensation",
            image: whiteWine,
            description:
                "The Rising Royal Sweet Red Wine offers a rich, velvety     experience with bold Sangiovese and Cabernet flavors. It reveals ripe dark berries with a hint of spice, complemented by smooth tannins and a gracefully lingering finish.",
            howToDrink: [
                "Serve chilled around 10°C (50°F).",
                "Pairs well with light appetizers and salads.",
            ],
            whenToDrink: [
                "Perfect for special dinners and celebrations.",
                "Pairs well with roasted meats and bold cheeses.",
            ],
        },
        {
            id: 3,
            name: "Rising Royals Reserve",
            image: redWine,
            description:
                "The Rising Royal Sweet Red Wine offers a rich, velvety     experience with bold Sangiovese and Cabernet flavors. It reveals ripe dark berries with a hint of spice, complemented by smooth tannins and a gracefully lingering finish.",
            howToDrink: [
                "Serve chilled around 10°C (50°F).",
                "Pairs well with light appetizers and salads.",
            ],
            whenToDrink: [
                "Perfect for special dinners and celebrations.",
                "Pairs well with roasted meats and bold cheeses.",
            ],
        },
    ],
    godawari: [
        {
            id: 1,
            name: "Godawari Ruby Red",
            image: redWine,
            description:
                "The Rising Royal Sweet Red Wine offers a rich, velvety     experience with bold Sangiovese and Cabernet flavors. It reveals ripe dark berries with a hint of spice, complemented by smooth tannins and a gracefully lingering finish.",
            howToDrink: [
                "Decant 30 minutes before serving.",
                "Serve at 16°C to 18°C.",
            ],
            whenToDrink: [
                "Perfect for hearty dinners or celebratory meals.",
                "Pairs with roasted lamb or aged cheese.",
            ],
        },
        {
            id: 2,
            name: "Godawari Fresh White",
            image: whiteWine,
            description:
                "The Rising Royal Sweet Red Wine offers a rich, velvety     experience with bold Sangiovese and Cabernet flavors. It reveals ripe dark berries with a hint of spice, complemented by smooth tannins and a gracefully lingering finish.",
            howToDrink: [
                "Best served at 7°C to 9°C.",
                "Swirl gently to release citrus aromas.",
            ],
            whenToDrink: [
                "Enjoy with light pasta dishes or shellfish.",
                "Ideal as an aperitif.",
            ],
        },
        {
            id: 3,
            name: "Godawari Premium Rosé",
            image: roseWine,
            description:
                "The Rising Royal Sweet Red Wine offers a rich, velvety     experience with bold Sangiovese and Cabernet flavors. It reveals ripe dark berries with a hint of spice, complemented by smooth tannins and a gracefully lingering finish.",
            howToDrink: [
                "Chill to around 10°C.",
                "Use a standard white wine glass.",
            ],
            whenToDrink: [
                "Pairs with fruit desserts and mild cheese.",
                "Delightful for brunch or afternoon soirees.",
            ],
        },
    ],
    specialKhukura: [
        {
            id: 1,
            name: "Khukura Signature Red",
            image: redWine,
            description:
                "The Rising Royal Sweet Red Wine offers a rich, velvety     experience with bold Sangiovese and Cabernet flavors. It reveals ripe dark berries with a hint of spice, complemented by smooth tannins and a gracefully lingering finish.",
            howToDrink: [
                "Decant briefly before serving at 18°C.",
                "Best in a large-bowled red wine glass.",
            ],
            whenToDrink: [
                "Ideal for barbeques or spicy dishes.",
                "Pairs well with strong cheeses.",
            ],
        },
        {
            id: 2,
            name: "Khukura Elegant White",
            image: redWine,
            description:
                "The Rising Royal Sweet Red Wine offers a rich, velvety     experience with bold Sangiovese and Cabernet flavors. It reveals ripe dark berries with a hint of spice, complemented by smooth tannins and a gracefully lingering finish.",
            howToDrink: [
                "Serve at 8°C to 10°C.",
                "Allow a brief swirl to aerate.",
            ],
            whenToDrink: [
                "Enjoy with light salads and grilled fish.",
                "Great for summer afternoons.",
            ],
        },
        {
            id: 3,
            name: "Khukura Blush Rosé",
            image: redWine,
            description:
                "The Rising Royal Sweet Red Wine offers a rich, velvety     experience with bold Sangiovese and Cabernet flavors. It reveals ripe dark berries with a hint of spice, complemented by smooth tannins and a gracefully lingering finish.",
            howToDrink: ["Chill to 10°C.", "Best in a standard wine glass."],
            whenToDrink: [
                "Pairs well with mild curries and fruit platters.",
                "Excellent for casual get-togethers.",
            ],
        },
    ],
};

const brandOptions = [
    { key: "risingRoyals", label: "Rising Royals", initials: "R" },
    { key: "godawari", label: "Godawari", initials: "G" },
    { key: "specialKhukura", label: "Special Khukura", initials: "O" },
];

export default function WineCollection() {
    const [selectedBrand, setSelectedBrand] = useState("risingRoyals");
    const [brandActiveIndex, setBrandActiveIndex] = useState({
        risingRoyals: 0,
        godawari: 0,
        specialKhukura: 0,
    });

    const winesForBrand = wineTypes[selectedBrand];
    const currentIndex = brandActiveIndex[selectedBrand];
    const activeWine = winesForBrand[currentIndex];

    // Single arrow => "Next" only.
    const handleNext = () => {
        setBrandActiveIndex((prev) => {
            const newIndex =
                (prev[selectedBrand] + 1) % winesForBrand.length;
            return { ...prev, [selectedBrand]: newIndex };
        });
    };

    // Dot Pagination Handler
    const handleDotClick = (idx) => {
        setBrandActiveIndex((prev) => ({
            ...prev,
            [selectedBrand]: idx,
        }));
    };

    return (
        <div className="min-h-screen flex w-full bg-[#FFFFE3] p-4 overflow-x-hidden ">
            <div className="mx-auto xl:max-w-7xl 2xl:max-w-screen grid grid-cols-1 xl:grid-cols-2 gap-0 items-center ">

                {/* Left Column: Wine Bottle */}
                <div className="flex justify-center relative xl:mr-60 pb-8 xl:pb-0 ">
                    <div>
                        <div className=" xl:hidden flex items-center justify-center xl:justify-start just space-x-3 mb-6  font-melodrama-medium">
                            <div className="bg-black text-[#FFFFE3] text-[45px] sm:text-[60px]   w-[100px] sm:w-[130px] sm:h-[100px] md:w-[200px] md:h-[140px] h-[85px]  lg:text-[80px] px-4 py-1 rounded-2xl sm:rounded-4xl flex justify-center items-center ">
                                Our
                            </div>
                            <h1 className="text-[41px] sm:text-[60px] lg:text-[100px] xl:text-[60px] font-light">
                                wine Collection
                            </h1>
                        </div>

                        <div className="xl:hidden flex items-center pl-2 space-x-6 mb-8 cursor-pointer">
                            {/* Container for the circles */}
                            <div className="flex space-x-2">
                                {brandOptions.map((brand) => {
                                    const isSelected = brand.key === selectedBrand;

                                    return (
                                        <div
                                            key={brand.key}
                                            className="flex flex-col items-center space-y-1"
                                        >
                                            {/* The circle button */}
                                            <button
                                                onClick={() => setSelectedBrand(brand.key)}
                                                className={`
              w-12 h-12 rounded-full border border-black
              flex items-center justify-center
              text-lg  transition-colors
              ${isSelected
                                                        ? "bg-black text-[#FFFFE3]"
                                                        : "bg-transparent text-black"
                                                    }
            `}
                                            >
                                                {brand.initials}
                                            </button>

                                            {/* Dot: stays in place, just changes color */}
                                            <div
                                                className={`w-2 h-2 rounded-full cursor-pointer ${isSelected ? "bg-black" : "bg-transparent"
                                                    }`}
                                            />

                                            {/* Label: occupies space but is invisible unless selected */}
                                            <div
                                                className={`
              text-black  text-[12px]  font-Satoshi
              ${isSelected ? "visible " : "invisible"}
            `}
                                            >
                                                {brand.label}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="flex justify-center relative   pb-8 sm:pb-12 xl:pb-24">
                            <AnimatePresence mode="popLayout">
                                <motion.img
                                    key={activeWine.id}
                                    src={activeWine.image}
                                    alt={activeWine.name}
                                    /* SLIDE-FROM-LEFT SPRING ANIMATION */
                                    initial={{ x: -400, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1, duration: 0.4 }}
                                    exit={{ x: -600, opacity: 0, duration: 0.4 }}
                                    transition={{ type: "spring", stiffness: 80, damping: 20, duration: 0.4, ease: "easeInOut" }}
                                    className=" h-[244px] sm:h-[400px] xl:h-[500px] max-h-[500px] object-contain"
                                />
                            </AnimatePresence>
                            {/* Gold Next Arrow (centered vertically, right side of bottle) */}
                            <button
                                onClick={handleNext}
                                className="absolute top-[39%]  right-5 xl:-right-40 transform -translate-y-1/2
                        w-10 h-10 md:w-12 md:h-12 rounded-full
                        text-white 
                        flex items-center justify-center
                        transition-colors"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="56"
                                    height="56"
                                    fill="none"
                                    viewBox="0 0 56 56"
                                >
                                    <circle cx="28" cy="28" r="27" stroke="#CF9A07" strokeWidth="2"></circle>
                                    <path
                                        fill="#CF9A07"
                                        fillRule="evenodd"
                                        d="M26 47.901q.987.099 2 .099c11.046 0 20-8.954 20-20S39.047 8 28 8q-1.013 0-2 .099v2.01q.986-.108 2-.109c9.942 0 18 8.059 18 18s-8.058 18-18 18q-1.014 0-2-.11z"
                                        clipRule="evenodd"
                                    ></path>
                                    <path
                                        stroke="#CF9A07"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M35 28H21m14 0-6 6m6-6-6-6"
                                    ></path>
                                </svg>
                            </button>

                            {/* Dot pagination (bottom center) */}
                            <div className="absolute  -bottom-4 xl:bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-12 my-4">
                                {winesForBrand.map((wine, idx) => (
                                    <button
                                        key={wine.id}
                                        onClick={() => handleDotClick(idx)}
                                        className={`
                                w-3 h-3 rounded-full border 
                                transition-colors
                                flex justify-center items-center
                                ${currentIndex === idx
                                                ? "bg-[#CF9A07] w-[10px] h-[10px]  xl:w-[16px] xl:h-[16px]  border-[#f7b501]"
                                                : "bg-[#D4BF87] w-[6px] h-[6px] border-[#f7b501] mt-[3px]"
                                            }
                                `}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Column: Heading, Brand Toggles, Wine Info */}
                <div className="  flex flex-col justify-center  xl:mb-50 lg:-ml-15  ">
                    {/* "Our" black box + "wine Collection" */}
                    <motion.div
                        className="hidden text-[41px] xl:flex items-center justify-center xl:justify-start just space-x-3 mb-12 font-melodrama-medium"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }} // triggers when 40% of it is visible
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <motion.div
                            className="bg-black text-[#FFFFE3] xl:text-[80px] px-4 py-1 rounded-2xl flex justify-center items-center"
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                        >
                            Our
                        </motion.div>
                        <motion.h1
                            className="text-[41px] md:text-[60px]"
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                        >
                            wine Collection
                        </motion.h1>
                    </motion.div>

                    {/* Brand Toggles + brand name */}
                    <div className=" hidden xl:flex cursor-pointer  items-center pl-2 space-x-4 mb-12">

                        <div className="flex space-x-4 cursor-pointer">
                            {brandOptions.map((brand) => (
                                <button
                                    key={brand.key}
                                    onClick={() => setSelectedBrand(brand.key)}
                                    className={`
                    w-12 h-12 rounded-full border 
                    flex items-center justify-center 
                    text-lg 
                    transition-colors
                    cursor-pointer
                    ${selectedBrand === brand.key
                                            ? "bg-black text-[#FFFFE3] border-1 border-black"
                                            : "bg-transparent text-black border-1 border-black"
                                        }
                    `}
                                >
                                    {brand.initials}
                                </button>
                            ))}
                        </div>
                        <div className="text-black  font-satoshi-regular  ">
                            {brandOptions.find((b) => b.key === selectedBrand)?.label}
                        </div>
                    </div>

                    {/* Wine Title & Description */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            className="px-2 sm:px-8 lg:px-28 xl:px-0 " // Instead of ml-2, add some overall padding
                            key={activeWine.id}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Wine Name */}
                            <h2
                                className="
        text-xl            
        sm:text-2xl        
        md:text-3xl        
        font-satoshi-bold
        leading-tight     
        mb-3
      "
                            >
                                {activeWine.name}
                            </h2>

                            {/* Wine Description */}
                            <p
                                className=" 
                                max-w-3xl        mb-4
        text-sm           
        sm:text-base    
        md:text-lg       
        text-[#202019]
        font-satoshi-regular
        leading-relaxed   
        break-words        "
                            >
                                {activeWine.description}
                            </p>

                            {/* How to Drink */}
                            <div className="mb-6 font-satoshi-regular text-[#202019] leading-relaxed">
                                <h3 className="text-base sm:text-lg md:text-xl  mb-2">
                                    How to Drink:
                                </h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    {activeWine.howToDrink.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* When to Drink */}
                            <div className="mb-6 font-satoshi-regular text-[#202019] leading-relaxed">
                                <h3 className="text-base sm:text-lg md:text-xl  mb-2">
                                    When to Drink:
                                </h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    {activeWine.whenToDrink.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                </div>
            </div>
        </div>
    );
}

import { motion } from 'framer-motion';
import wineShow from './wineshow.webp';
import { FiArrowUpRight } from 'react-icons/fi';
import smallwine from './smallwine.png';
import './WineShowcaseHero.css';

export default function WineShowcaseHero({ scrollToNext, mode = 'light' }) {
    const isDark = mode === 'dark';

    const bgColor = isDark ? '#202019' : '#FFFFE3';
    const textColor = isDark ? '#FFFFE3' : '#202019';
    const subTextColor = isDark ? '#D3D3C0' : '#202019';
    const circleBg = isDark ? '#FFFFE3' : '#202019';
    const circleText = isDark ? '#202019' : '#FFFFE3';
    const scrollRect = isDark ? '#FFFFE3' : '#202019';
    const scrollDot = isDark ? '#202019' : '#FFFFE3';

    return (
        <section
            className="min-h-screen w-full relative flex flex-col justify-between overflow-hidden"
            style={{ backgroundColor: bgColor }}
        >
            {/* Outer container */}
            <div className="max-w-[1400px] mx-auto w-full px-4 md:px-5 py-10 flex flex-col gap-8">

                {/* Top Row - 'Every' circle & Main Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="font-melodrama-medium flex items-center space-x-4"
                >
                    {/* Circle with 'Every' */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="w-[100px] h-[100px] sm:w-[208px] sm:h-[208px] rounded-full flex items-center justify-center"
                        style={{ backgroundColor: circleBg }}
                    >
                        <p
                            className="text-[40px] sm:text-[80px] font-semibold"
                            style={{ color: circleText }}
                        >
                            Every
                        </p>
                    </motion.div>

                    {/* Main heading */}
                    <div className="mt-8 sm:mt-0 sm:ml-5 -mb-14 flex flex-col items-start text-nowrap">
                        <motion.h1
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: true }}
                            className="sm:block font-melodrama-medium mb-10 sm:mb-0 text-[24px] sm:text-[40px] lg:text-[60px] xl:text-[80px] font-bold leading-tight tracking-wide"
                            style={{ color: textColor }}
                        >
                            Bottle of wine is a journey
                        </motion.h1>

                        <motion.h2
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
                            viewport={{ once: true }}
                            className="sm:block text-[24px] sm:text-[32px] font-normal  font-satoshi pl-2"
                            style={{ color: subTextColor }}
                        >
                            Elegance in every sip
                        </motion.h2>
                    </div>
                </motion.div>

                {/* Middle row - Image and Text */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 mt-10 w-full">
                    {/* Large screen image */}
                    <div className="hidden sm:block flex-shrink-0 relative w-full md:w-1/2 flex justify-center">
                        <div className="overflow-hidden">
                            <img
                                src={wineShow}
                                alt="Wine Bottles"
                                className="w-[400px] h-[1000px] sm:w-[800px] sm:h-[400px] md:w-[1200px] md:h-[280px] lg:w-[712px] lg:h-[336px]"
                            />
                        </div>
                    </div>

                    {/* Small screen image */}
                    <div className="mt-10 mb-8 sm:hidden flex-shrink-0 relative w-full md:w-1/2 flex justify-center">
                        <div className="overflow-hidden">
                            <img
                                src={smallwine}
                                alt="Wine Bottles"
                                className="w-[400px] h-[220px] md:w-[712px] md:h-[336px]"
                            />
                        </div>
                    </div>

                    {/* Text block */}
                    <div className="font-satoshi-medium md:w-1/2 flex flex-col items-start space-y-4">
                        <p
                            className="text-[18px] leading-relaxed sm:text-[20px] font-light mx-5 md:mx-0"
                            style={{ color: subTextColor }}
                        >
                            A story of sun-drenched vineyards, generations of craftsmanship,
                            and the perfect balance of art and science.
                            <br />
                            <p className="mt-4 sm:mt-0">
                                Where the land’s essence meets human passion, and every bottle becomes a timeless
                                celebration of flavor, heritage, and joy.
                            </p>
                        </p>

                        {/* Learn More Link */}
                        <button
                            className="cursor-pointer mt-5 mx-5 md:mx-0 flex flex-row items-center text-[32px] font-medium underline-animate group font-satoshi-medium"
                            style={{ color: textColor }}
                        >
                            Learn More
                            <FiArrowUpRight className="mb-4 ml-[2px] group-hover:translate-y-[-8px] transition-transform" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            {/* <motion.div
                className="flex flex-col pb-10 items-center cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: 5, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToNext}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="40" fill="none">
                    <rect width="24" height="40" fill={scrollRect} rx="12" />
                    <motion.circle
                        cx="12"
                        cy="12"
                        r="8"
                        fill={scrollDot}
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                    />
                </svg>
                <p className="text-[24px] font-Tanker" style={{ color: textColor }}>
                    Scroll Down
                </p>
            </motion.div> */}
        </section>
    );
}

import fourWine from './fourwine.webp';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function FromCrushToPour({ mode = 'light' }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

    const isDark = mode === 'dark';

    // Theme-based color values
    const bgColor = isDark ? '#202019' : '#FFFFE3';
    const headingColor = isDark ? '#FFFFE3' : '#202019';
    const textColor = isDark ? '#D3D3C0' : '#676767';
    const borderColor = isDark ? '#D3D3C0' : '#202019';
    const buttonBg = isDark ? '#FFFFE3' : '#202019';
    const buttonIconStroke = isDark ? '#202019' : '#FFFFE3';

    return (
        <section
            ref={ref}
            className="w-screen py-16 px-4 md:px-10 xl:px-18 font-satoshi-regular overflow-hidden"
            style={{ backgroundColor: bgColor }}
        >
            <div className="max-w-8xl mx-auto flex flex-col  gap-18">
                {/* Top: Heading with triangle */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="flex items-center gap-4 justify-center xl:mr-15 " 
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 214 161"
                        className="w-40 h-28 sm:w-48 sm:h-32 md:w-56 md:h-36"
                    >
                        <path
                            fill={headingColor}
                            fillRule="evenodd"
                            d="M120.726 154.268c-1.389 2.046-3.389 3.746-5.798 4.928-2.408 1.182-5.141 1.804-7.923 1.804s-5.514-.622-7.923-1.804-4.408-2.882-5.798-4.928L2.122 20.176C.732 18.13 0 15.812 0 13.45c0-2.362.732-4.68 2.122-6.726 1.39-2.044 3.39-3.742 5.797-4.923C10.326.622 13.057 0 15.837 0h182.326c2.78 0 5.511.622 7.918 1.802s4.407 2.879 5.797 4.923S214 11.09 214 13.451s-.732 4.68-2.122 6.725l-91.162 134.092z"
                            clipRule="evenodd"
                        ></path>
                        <path
                            fill={bgColor}
                            d="M32.68 80h-7.04V24.56H51.8v1.04H32.68v26.16h16.96v1.04H32.68zm25.224-41.04h6.8v5.36c1.6-3.76 4.96-6.16 9.36-6.16 6.08 0 10.4 4.56 10.4 11.12h-6.88c0-5.12-2.8-8.8-6.48-8.8-3.6 0-6.4 3.68-6.4 8.72V80h-6.8zm50.934 41.84c-12.24 0-21.6-8.88-21.6-21.36s9.36-21.28 21.6-21.28c12.32 0 21.68 8.8 21.68 21.28s-9.36 21.36-21.68 21.36m0-1.04c8.4 0 14.64-7.68 14.64-20.32 0-11.92-6-20.24-14.64-20.24-8.32 0-14.56 7.68-14.56 20.24 0 12 5.92 20.32 14.56 20.32m50.266.24V49.68c0-5.36-2.88-8.88-7.12-8.88s-7.28 3.6-7.28 8.88V80h-6.8V38.96h6.8v5.68c1.68-3.92 5.28-6.48 9.92-6.48 5.28 0 9.28 3.04 10.72 7.84 1.44-4.64 5.36-7.84 10.56-7.84 6.64 0 11.36 4.8 11.36 11.84v30h-6.8V49.76c0-5.44-2.88-8.96-7.12-8.96-4.4 0-7.44 3.6-7.44 9.12V80z"
                        ></path>
                    </svg>

                    <h1
                        className="text-3xl md:text-[40px]  lg:text-[55px] xl:text-[80px] font-melodrama-medium leading-snug"
                        style={{ color: headingColor }}
                    >
                        The first crush to the final pour
                    </h1>
                </motion.div>

                {/* Middle: Description and Image */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
                    className="flex flex-col-reverse lg:flex-row justify-center  items-center lg:items-start gap-10 lg:gap-10"
                >
                    <div
                        className="ml-6 xl:ml-12 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl flex-1 pt-4 font-satoshi-medium"
                        style={{ color: textColor }}
                    >
                        <p>
                            Our wines are crafted to capture the essence of the land and the
                            passion of the people behind it.
                        </p>
                        <p className="mt-2">
                            Each sip is an invitation to explore, celebrate, and connect.
                        </p>
                    </div>

                    <div className="w-full max-w-xl flex justify-center items-center">
                        <img
                            src={fourWine}
                            alt="Wine Process Art"
                            className="w-full h-auto xl:h-[240px] xl:w-[640px] rounded-lg"
                        />
                    </div>
                </motion.div>

                {/* Bottom: Info Row */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
                    className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-40 border-t pt-10"
                    style={{ borderColor: borderColor, borderTopWidth: '1px' }}
                >
                    <div className="flex gap-10">
                        <div className="flex items-start gap-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="45"
                                fill="none"
                                viewBox="0 0 13 47"
                            >
                                <path
                                    fill="#202019"
                                    d="M3.046 47c-.487 0-.954-.248-1.298-.688-.344-.441-.537-1.039-.537-1.662v-23.5c0-4.7 1.835-8.812 3.67-9.4V1.175c0-.312.096-.61.268-.83C5.321.123 5.555 0 5.798 0h1.835c.243 0 .477.124.649.344s.268.52.268.831V11.75c1.835.588 3.67 4.7 3.67 9.4v23.5c0 .623-.193 1.221-.538 1.662-.344.44-.81.688-1.297.688z"
                                ></path>
                                <path
                                    stroke="#FFFFE3"
                                    d="M8.623 3.81c-1.451.43-2.272.45-3.81 0M12.432 23.288c-4.354.552-6.816.576-11.432 0M12.432 40.227c-4.354.552-6.816.577-11.432 0M8.623 3.177c-1.451.431-2.272.45-3.81 0"
                                ></path>
                            </svg>
                            <h3
                                className="font-melodrama-medium text-3xl sm:text-4xl xl:text-[50px] leading-tight"
                                style={{ color: headingColor }}
                            >
                                Rich in flavor and <br /> steeped in history
                            </h3>
                        </div>

                        <button
                            className="rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center hover:scale-105 transition"
                            style={{ backgroundColor: buttonBg }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 104 104"
                                className="w-8 h-8 sm:w-20 sm:h-20 md:w-24 md:h-24"
                            >
                                <path
                                    stroke={buttonIconStroke}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="3"
                                    d="m42.712 61.414 18.707-18.707m0 0H45.05m16.369 0v16.369"
                                />
                            </svg>
                        </button>
                    </div>

                    <div
                        className="max-w-md text-[16px] sm:text-[18px] lg:text-xl leading-relaxed font-satoshi-medium"
                        style={{ color: textColor }}
                    >
                        At United Winery, we honor this legacy by crafting wines that reflect
                        the soul of the land and the passion of generations
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

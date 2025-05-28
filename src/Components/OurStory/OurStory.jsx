import { motion } from 'framer-motion';
import storyImage from './image.webp'; // Make sure this is correct

export default function WineryStorySection({ mode = 'light' }) {
    const isDark = mode === 'dark';

    const bgColor = isDark ? '#202019' : '#FFFFE3';
    const headingColor = isDark ? '#FFFFE3' : '#202019';
    const textColor = isDark ? '#D3D3C0' : '#848484';
    const highlightColor = isDark ? '#fcd34d' : '#B08E35';
    const lineColor = isDark ? '#D3D3C0' : '#202019';

    return (
        <section className="w-full py-16 px-4 md:px-12" style={{ backgroundColor: bgColor }}>
            <div className="max-w-[1400px] mx-auto flex flex-col gap-12">
                {/* Top Section: Heading + Line + Year */}
                <div className="flex flex-wrap items-center gap-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl xl:text-[80px] font-melodrama-medium  font-semibold whitespace-nowrap"
                        style={{ color: headingColor }}
                    >
                        The Beginning
                    </motion.h2>

                    <div className="flex-1 h-[2px] max-w-[430px] " style={{ backgroundColor: lineColor }} />

                    <motion.p
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-xl md:text-[30px] xl:text-[40px] font-melodrama-medium font-semibold"
                        style={{ color: headingColor }}
                    >
                        2<span className="inline-block rotate-45">0</span>78
                    </motion.p>
                </div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-base md:text-lg leading-relaxed max-w-5xl font-satoshi-medium "
                    style={{ color: textColor }}
                >
                    Founded in <span style={{ color: highlightColor }}>2078</span> by two seasoned winemakers, United Winery is nestled in the serene landscapes of Godawari, Lalitpur. We craft premium wines with passion, precision, and a commitment to quality, blending modern techniques with timeless traditions.
                </motion.p>

                {/* Image + Vision */}
                <div className="flex flex-col lg:flex-row gap-10  items-start ">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className=" overflow-hidden w-full lg:w-1/2"
                    >
                        <img src={storyImage} alt="Winery Story" className="w-full h-auto object-cover" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 flex flex-col gap-4 xl:pt-15"
                    >
                        <div className="flex flex-row  items-center gap-8 justify-start">
                            <h3
                                className="text-4xl md:text-5xl xl:text-[80px] font-melodrama-medium font-semibold"
                                style={{ color: headingColor }}
                            >
                                The Vision
                            </h3>

                            {/* Decorative icons */}
                            <div className="flex gap-4 text-xl sm:text-2xl" style={{ color: headingColor }}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 215 33"
                                    fill="none"
                                    className="w-[180px] h-[32px] sm:w-[180px] sm:h-[28px] md:w-[200px] md:h-[33px]"
                                >
                                    <circle
                                        cx="16.5"
                                        cy="16.5"
                                        r="9.5"
                                        fill="#202019"
                                        transform="rotate(-180 16.5 16.5)"
                                    ></circle>
                                    <circle
                                        cx="16.5"
                                        cy="2.5"
                                        r="2.5"
                                        fill="#202019"
                                        transform="rotate(-180 16.5 2.5)"
                                    ></circle>
                                    <path
                                        fill="#202019"
                                        fillRule="evenodd"
                                        d="M116.283 24.747c-.13.23-.317.42-.542.551a1.464 1.464 0 0 1-2.023-.55l-8.52-14.992a1.52 1.52 0 0 1 .542-2.055c.225-.132.48-.201.74-.201h17.04c.26 0 .515.07.74.201.225.132.412.322.542.55a1.52 1.52 0 0 1 0 1.505l-8.52 14.991z"
                                        clipRule="evenodd"
                                    ></path>
                                    <rect width="18" height="18" x="197" y="7.5" fill="#202019" rx="1"></rect>
                                </svg>
                            </div>
                        </div>
                        <p className="text-base md:text-lg leading-relaxed font-satoshi-medium " style={{ color: textColor }}>
                            Our vision is to elevate every sip, creating wines that inspire joy and connection. Now fully launched, we are dedicated to excellence and making a positive impact through our CSR initiatives.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import LoadingImage from './LoadingBg.png'; // Update with your image path

export default function Loading() {
    const [showLogo, setShowLogo] = useState(false);
    const [showText, setShowText] = useState(false);

    // Delays for staggered animations
    // Set "loadingShown" to true in localStorage when the component mounts
    useEffect(() => {
        setTimeout(() => setShowLogo(true), 0); // Show SVG immediately
        setTimeout(() => setShowText(true), 2500); // Show text after 2.5 seconds

        // Set loadingShown to true after full animation cycle (5 seconds)
        setTimeout(() => {
            localStorage.setItem("loadingShown", "true");
        }, 6000);
    }, []);



    return (
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gray-100 z-60">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${LoadingImage})`, backgroundAttachment: "fixed" }}
            />

            {/* Animated White Blur Effect */}
            <motion.div
                initial={{ opacity: 0.5, backdropFilter: "blur(10px)" }}
                animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute inset-0 bg-white/40"
            />

            {/* Animated Logo & Text */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: showLogo ? 1 : 0, scale: showLogo ? 1 : 0.8 }}
                transition={{ duration: 1, ease: "easeOut", delay: 1 }}
                className="relative z-10 text-center"
            >
                {showLogo && (
                    <motion.svg
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        width="216"
                        height="108"
                        viewBox="0 0 216 108"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M55.1756 59.2186C55.4843 59.2676 56.6474 55.4644 57.2384 51.1185C58.6086 41.0358 56.2258 33.0525 55.1756 29.9957C53.8619 26.1774 52.7139 22.9472 49.6762 19.9356C46.439 16.7242 41.6547 14.3609 40.5819 15.3823C40.3146 15.6387 40.1791 16.1965 40.1942 16.6375C40.2281 17.5082 40.8454 18.1452 41.1992 18.4543C41.8467 18.8538 49.7853 23.7877 51.3663 27.4552C51.7088 28.2468 52.4052 29.8562 51.6749 31.0586C51.4491 31.4318 51.1442 31.6655 50.9409 31.7936C50.6661 31.9331 48.1291 31.7597 46.71 31.1566C43.1604 29.6527 42.2946 27.8736 39.7312 27.7681C38.5982 27.7228 36.7951 27.9867 36.302 29.0948C36.0272 29.713 36.1966 30.5121 36.5618 31.0511C37.7512 32.8151 40.9169 31.6014 43.7513 32.1102C50.0488 33.241 53.1242 42.1703 53.6888 43.7572C54.8557 47.0326 55.0514 50.1573 55.1681 52.0156C55.4316 56.1919 54.8971 59.1734 55.1681 59.2148L55.1756 59.2186Z" fill="#1C272C" />
                        <path d="M58.9876 55.2307C58.9876 55.2307 63.7455 67.8312 58.9876 79.1578C54.2297 90.4881 41.4164 90.2733 41.4164 90.2733C41.4164 90.2733 30.7563 90.6955 24.9406 80.0021C19.1249 69.3088 22.6143 61.1559 22.6143 61.1559C22.6143 61.1559 29.9093 73.862 39.3198 64.2279C39.3198 64.2279 50.7403 67.7219 48.941 56.3916C48.6775 55.9544 48.2221 55.2608 47.5671 54.4844C45.0865 51.5594 43.0237 51.4238 42.3876 49.4034C42.0112 48.2124 42.2031 46.6104 43.0952 45.9018C44.4428 44.8314 47.2246 45.932 48.8356 47.1796C53.65 50.9036 53.8533 60.4662 50.3149 65.6036C49.2911 67.0925 47.8419 68.3702 47.6913 68.4984C45.3086 70.5828 42.8468 71.5402 41.3336 71.9963C41.3336 71.9963 49.8896 72.1659 54.1168 66.2369C58.3477 60.3078 58.9801 55.2269 58.9801 55.2269L58.9876 55.2307Z" fill="#1C272C" />
                        <path d="M19.2387 0H0V58.6607H19.2387V0Z" fill="#1C272C" />
                        <path d="M82.684 11.9937V58.6607H63.4377V6.24563L82.684 11.9937Z" fill="#1C272C" />
                        <path d="M82.684 58.6607V69.1919C82.684 90.6238 65.3311 108 43.928 108H38.7522C17.3529 108 0 90.6276 0 69.1957V58.6644H19.2387V70.3076C19.2387 82.5237 29.1348 92.4368 41.3382 92.4368C53.5417 92.4368 63.4377 82.5275 63.4377 70.3076V58.6644H82.6878L82.684 58.6607Z" fill="#1C272C" />
                        <path d="M181.532 106.568L166.325 106.737L144.768 1.11185L160.472 1.05908L181.532 106.568Z" fill="#1C272C" />
                        <path d="M172.656 106.549L186.828 106.918L216.001 0.904541L196.133 1.31539L172.656 106.549Z" fill="#1C272C" />
                        <path d="M115.273 106.394L129.449 106.764L154.391 1.10059L139.797 1.13828L115.273 106.394Z" fill="#1C272C" />
                        <path d="M124.763 106.568H109.522L82.6836 0.904541L103.707 1.05908L124.763 106.568Z" fill="#1C272C" />
                        <path d="M82.9432 0.83667H63.4824L84.6672 7.69668L82.9432 0.83667Z" fill="#1C272C" />

                    </motion.svg>
                )}

                {/* United Winery Text */}
                {showText && (
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeIn" }}
                        className="text-black font-kollektif mt-4 text-[32px]"
                    >
                        United Winery
                    </motion.h2>
                )}
            </motion.div>
        </div>
    );
}

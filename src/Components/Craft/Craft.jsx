import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import bgImage from './bg.png';
import Frame1 from './Frame1.png';
import Frame2 from './Frame2.png';
import Frame3 from './Frame3.png';
import Frame4 from './Frame4.png';

export default function Craft() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const frames = [Frame1, Frame2, Frame4, Frame3];

    return (
        <section
            className=" h-screen w-full relative py-16 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-3xl md:text-[40px] text-center font-alegreya font-bold text-[#CF9A07] mb-24"
            >
                Our Craft, Your Wine: A Journey from Vine to Glass
            </motion.h2>

            {/* Grid Layout */}
            <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {frames.map((frame, index) => (
                    <motion.div
                        key={index}
                        className={`px-4 flex justify-center ${index === 2 ? 'order-3 md:order-4' : index === 3 ? 'order-4 md:order-3' : ''}`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <img
                            src={frame}
                            alt={`Frame ${index + 1}`}
                            className="w-full max-w-[480px] h-auto md:h-[370px] rounded-md transition-all duration-300"
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

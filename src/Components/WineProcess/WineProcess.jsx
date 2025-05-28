import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
    {
        title: "The Harvest",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                fill="none"
                viewBox="0 0 64 64"
            >
                <circle cx="32" cy="32" r="32" fill="#202019"></circle>
                <path
                    fill="#E6E6E6"
                    d="M33.158 18.99c.133 1.841-.005 3.647-.49 5.424a7 7 0 0 0-.1-.352c-.51-1.642-1.614-3.05-3.352-4.119-1.184-.905-3.296-1.295-6.204-.456.123 1.218 2.486 1.358 3.29 1.468-1.58.348-3.325 1.705-5.654 1.98 2.151 1.135 5.068.241 7.059-.638-.103.968-.749 1.587-1.342 3.259 2.616-.605 3.875-2.047 3.946-3.422a5.8 5.8 0 0 1 1.282 2.232 7.1 7.1 0 0 1 .306 1.988c.212.271.377.581.482.917.295-.167.618-.281.953-.336.334-.816.71-1.482 1.123-1.977.814-.978 1.694-1.343 2.926-1.105l.002-.008c1.782 1.241 1.318 3.334.67 4.888 1.18-.366 1.826-1.09 1.828-2.35.981.643 1.39 1.7 1.671 2.847.395-1.176.316-2.45-.699-3.546l2.37.902c-1.526-1.824-2.97-3.77-5.757-3.756-1.447-.244-2.73.271-3.684 1.343.405-1.709.516-3.442.398-5.183zm-3.54 7.266c-1.04 0-1.872.83-1.872 1.87 0 .372.107.718.292 1.008q.307-.068.62-.068c.714 0 1.37.263 1.875.696.571-.32.954-.93.954-1.636 0-1.04-.83-1.87-1.87-1.87m-3.195 1.022c-1.04 0-1.871.83-1.871 1.87 0 .874.588 1.602 1.393 1.811.219-.59.625-1.09 1.146-1.428a2.87 2.87 0 0 1-.253-2.207 2 2 0 0 0-.415-.046m7.378.64c-1.04 0-1.871.83-1.871 1.87q0 .287.08.548.347-.087.704-.087a2.89 2.89 0 0 1 2.213 1.035c.453-.34.744-.882.744-1.497 0-1.039-.83-1.87-1.87-1.87m-5.143 2.17c-1.039 0-1.87.832-1.87 1.871s.831 1.872 1.87 1.872 1.872-.833 1.872-1.872-.832-1.871-1.872-1.871m8.048.384q-.048 0-.097.002a2.9 2.9 0 0 1-1.17 1.692 2.87 2.87 0 0 1 .09 1.634c.32.26.73.413 1.177.413 1.04 0 1.871-.832 1.871-1.871s-.832-1.87-1.871-1.87m-3.992.798c-.447 0-.856.155-1.176.412q.014.138.014.277c0 .668-.229 1.283-.612 1.774a1.86 1.86 0 0 0 1.774 1.279 1.865 1.865 0 0 0 1.871-1.872c0-1.04-.832-1.87-1.871-1.87m-7.889.607c-1.039 0-1.87.832-1.87 1.872 0 .653.33 1.224.833 1.558a2.9 2.9 0 0 1 2.211-2.211 2.9 2.9 0 0 1-.229-.964 1.87 1.87 0 0 0-.945-.255m1.79 2.172c-1.04 0-1.872.83-1.872 1.87a1.864 1.864 0 0 0 1.872 1.871c1.039 0 1.87-.832 1.87-1.871 0-.421-.137-.808-.368-1.12a2.9 2.9 0 0 1-1.453-.748zm3.52.395c-.267.16-.559.275-.863.342a2.86 2.86 0 0 1-.255 2.738c.34.361.826.586 1.366.586a1.866 1.866 0 0 0 1.854-2.118 2.9 2.9 0 0 1-2.102-1.548m4.978.31a2.9 2.9 0 0 1-1.837 1.223c.274.69.946 1.174 1.738 1.174 1.04 0 1.872-.83 1.872-1.87l-.002-.05a2.868 2.868 0 0 1-1.77-.477m-2.078 2.631a2.93 2.93 0 0 1-1.228 1.369 1.86 1.86 0 0 0 1.802 1.367 1.86 1.86 0 0 0 1.867-1.986 2.88 2.88 0 0 1-2.44-.75m-4.72.872c-.32.234-.686.399-1.073.485q-.07.248-.07.506c0 1.04.83 1.87 1.87 1.87a1.863 1.863 0 0 0 1.864-2.034q-.256.047-.523.048a2.89 2.89 0 0 1-2.068-.875m-3.351.034a1.9 1.9 0 0 0-.22.887 1.863 1.863 0 0 0 2.031 1.863 2.88 2.88 0 0 1-.586-2.261 2.9 2.9 0 0 1-1.225-.49m6.725 2.117a3 3 0 0 1-.235.428c.558.488.927 1.185.983 1.967a1.86 1.86 0 0 0 1.791-1.728q-.3.067-.619.068a2.88 2.88 0 0 1-1.92-.735m-.935 1.166a2.87 2.87 0 0 1-2.743.374c-.207.301-.328.666-.328 1.061 0 1.04.83 1.872 1.87 1.872a1.864 1.864 0 0 0 1.87-1.872c0-.58-.26-1.093-.67-1.435"
                ></path>
            </svg>
        ),
        description:
            "At our winery, every step is a labor of love. We begin by hand-selecting the finest grapes, ensuring only the best make it to the next stage.",
    },
    {
        title: "Crushing",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                fill="none"
                viewBox="0 0 64 64"
            >
                <circle cx="32" cy="32" r="32" fill="#202019"></circle>
                <path
                    fill="#E6E6E6"
                    d="M32 20.75a3.516 3.516 0 0 0-3.516 3.516c0 .8.276 1.518.725 2.109h-2.834l-4.219 9.844h19.688l-4.219-9.844h-2.834c.45-.59.725-1.31.725-2.11A3.516 3.516 0 0 0 32 20.75m0 1.406a2.11 2.11 0 1 1 0 4.219 2.11 2.11 0 0 1 0-4.219m-.198 15.469a2.81 2.81 0 0 0-2.614 2.813 2.812 2.812 0 1 0 5.625 0 2.81 2.81 0 0 0-3.01-2.813"
                ></path>
            </svg>
        ),
        description:
            "The grapes are gently crushed and destemmed, releasing their pure, vibrant juice. Through careful pressing, we extract the essence of the fruit, preserving its natural character.",
    },
    {
        title: "Fermentation",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                fill="none"
                viewBox="0 0 64 64"
            >
                <circle cx="32" cy="32" r="32" fill="#202019"></circle>
                <path
                    fill="#E6E6E6"
                    fillRule="evenodd"
                    stroke="#E6E6E6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 30c0 6.075 3 11 9 11s9-4.925 9-11z"
                    clipRule="evenodd"
                ></path>
                <path
                    stroke="#E6E6E6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M30 27v-4m5 4v-2m-10 2v-2m13.095 10.312c.495-1.292.787-2.743.876-4.286q.26-.026.529-.026c1.933 0 3.5 1.008 3.5 2.25s-1.567 2.25-3.5 2.25c-.5 0-.975-.068-1.405-.188"
                ></path>
            </svg>
        ),
        description:
            "Fermentation is where science meets art—where the magic of yeast transforms grape juice into wine, unlocking its depth, character, and soul.",
    },
    {
        title: "Aging",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                fill="none"
                viewBox="0 0 64 64"
            >
                <circle cx="32" cy="32" r="32" fill="#202019"></circle>
                <path
                    fill="#E6E6E6"
                    d="M26 22v6l4 4-4 4v6h12v-6l-4-4 4-4v-6zm10 14.5V40h-8v-3.5l4-4zm-4-5-4-4V24h8v3.5z"
                ></path>
            </svg>
        ),
        description:
            "Aging is a patient dance with time—where wine matures in harmony with oak barrels, developing complexity, elegance, and a story in every sip.",
    },
];

export default function WineProcess() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section
            ref={ref}
            className="w-screen min-h-screen bg-[#FFFFE3] py-12 md:py-4  px-4 md:px-10 xl:px-0 font-satoshi-regular overflow-hidden "
        >
            <div className="max-w-[1400px] mx-auto space-y-16">
                {steps.map((step, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: idx * 0.2, ease: "easeOut" }}
                        className="flex flex-row items-start gap-4 sm:items-center sm:gap-8"
                    >
                        {/* Icon Container */}


                        {/* Text Content */}
                        <div className="flex-1 border-b border-black pb-6 relative">
                            <div className="flex flex-row items-center space-x-4 ">

                                <div className=" mb-4 flex-shrink-0 w-16 h-16 rounded-full bg-black text-white flex items-center justify-center text-xl">
                                    {step.icon}
                                </div>
                                <h3 className="font-melodrama-medium font-semibold text-4xl sm:text-5xl xl:text-5xl mb-2">
                                    {step.title}
                                </h3>
                            </div>
                            <p className="text-[#202019] text-[16px] sm:text-lg md:text-2xl leading-relaxed">
                                {step.description}
                            </p>

                            {/* Right end dot */}
                            <div className="absolute right-0 bottom-0 translate-y-1/2 w-2 h-2 rounded-full bg-black"></div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

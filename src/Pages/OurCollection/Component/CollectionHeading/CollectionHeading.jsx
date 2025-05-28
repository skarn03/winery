import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CollectionHeading() {
    // The lines we want to type out
    const lines = [
        "OUR COLLECTION",
        "OF",
        "THE FINEST WINE"
    ];

    // We'll store the typed text for each of the three lines
    const [typedLine1, setTypedLine1] = useState("");
    const [typedLine2, setTypedLine2] = useState("");
    const [typedLine3, setTypedLine3] = useState("");

    // Keep track of which line we're typing
    const [lineIndex, setLineIndex] = useState(0);
    // Track which character we’re on within that line
    const [charIndex, setCharIndex] = useState(0);

    // Set up an interval to type the next character
    useEffect(() => {
        if (lineIndex >= lines.length) return; // All lines typed

        const timer = setInterval(() => {
            setCharIndex((prev) => prev + 1);
        }, 60); // typing speed in ms

        return () => clearInterval(timer);
    }, [lineIndex]);

    // Whenever charIndex changes, we “apply” that many characters to the current line
    useEffect(() => {
        const currentFullLine = lines[lineIndex] || "";

        if (charIndex <= currentFullLine.length) {
            const partial = currentFullLine.slice(0, charIndex);

            // Update the appropriate typed line state
            if (lineIndex === 0) setTypedLine1(partial);
            if (lineIndex === 1) setTypedLine2(partial);
            if (lineIndex === 2) setTypedLine3(partial);
        } else {
            // Done with this line; move on to the next
            setLineIndex((prev) => prev + 1);
            setCharIndex(0);
        }
    }, [charIndex, lineIndex, lines]);

    return (
        <motion.section
            className="flex items-center justify-center min-h-screen bg-[#FFFFE3] font-alegreya -mt-20 w-screen"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <div className="text-center">
                <h2 className="text-[56px] tracking-wide mb-2">
                    {typedLine1}
                </h2>
                <h2 className="text-[56px] tracking-wide mb-2">
                    {typedLine2}
                </h2>
                <h2 className="text-[56px] font-bold tracking-wide">
                    {typedLine3}
                </h2>
            </div>
        </motion.section>
    );
}

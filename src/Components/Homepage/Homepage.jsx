import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "../Loading/Loading";
import Hero from "../Hero/Hero";
import FromCrushToPour from "../FromCrushToPour/FromCrushToPour";
import WineCollection from "../WineCollection/WineCollection";
import OurStory from "../OurStory/OurStory";
import WineProcess from "../WineProcess/WineProcess";
import Testimonial from "../Testimonial/Testimonial";
import WineShowcaseHero from "../WineShowcaseHero/WineShowcaseHero";
import CraftsmanshipSection from "../CraftsmanShipSection/CraftsmanshipSection";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
export default function Homepage() {
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState("light");
  const nextSectionRef = useRef(null);
  const secondNextSectionRef = useRef(null);

  useEffect(() => {
    const hasLoadedBefore = localStorage.getItem("loadingShown");

    if (hasLoadedBefore === "true") {
      setLoading(false);
    } else {
      setTimeout(() => {
        localStorage.setItem("loadingShown", "true");
        setLoading(false);
      }, 3000);
    }
  }, []);

  const getSectionMode = (index) => {
    if (mode === "light" || mode === "dark") return mode;
    return index % 2 === 0 ? "light" : "dark";
  };

  if (loading) return <Loading />;

  // Define colors for light/dark transitions
  const themeStyles = {
    light: {
      backgroundColor: "#FFFFE3",
      color: "#202019"
    },
    dark: {
      backgroundColor: "#202019",
      color: "#FFFFE3"
    }
  };

  return (
    <div className="relative">
      {/* Dropdown Selector */}
      {/* <div className="fixed top-20 right-4 z-50 bg-white shadow-md px-4 py-2 rounded-md text-sm">
        <label className="mr-2 font-medium text-gray-700">Theme:</label>
        <select
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          className="bg-white border border-gray-300 rounded px-2 py-1 outline-none focus:ring"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="alternate">Alternate</option>
        </select>
      </div> */}

      {/* Animate Presence wrapper for smooth transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={mode} // triggers animation on change
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            backgroundColor: themeStyles[mode === "alternate" ? "light" : mode].backgroundColor,
            color: themeStyles[mode === "alternate" ? "light" : mode].color
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col space-y-20 overflow-x-hidden "
        >

          <div className="h-screen flex items-center justify-center ">
            <Hero scrollToNext={() => nextSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })} />
          </div>

          <div ref={nextSectionRef} className="min-h-screen flex items-center justify-center">
            <WineShowcaseHero
              mode={getSectionMode(0)}
              scrollToNext={() => secondNextSectionRef.current?.scrollIntoView({ behavior: "smooth" })}
            />
          </div>

          <div ref={secondNextSectionRef} className="min-h-screen flex items-center justify-center">
            <FromCrushToPour mode={getSectionMode(1)} />
          </div>
          <div className="min-h-screen flex items-center justify-center">
            <CraftsmanshipSection mode={getSectionMode(1)} />
          </div>
          <div className="min-h-screen flex items-center justify-center">
            <WineCollection mode={getSectionMode(2)} />
          </div>

          <div className="h-screen flex items-center justify-center">
            <OurStory mode={getSectionMode(3)} />
          </div>

          <div className="min-h-screen flex items-center justify-center">
            <WineProcess mode={getSectionMode(4)} />
          </div>

          <div className="h-screen flex items-center justify-center">
            <Testimonial mode={getSectionMode(5)} />
          </div>
          <Footer></Footer>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

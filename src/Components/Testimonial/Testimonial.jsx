import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Sample images
import Profile1 from "./Profile1.png";
import Profile2 from "./Profile2.png";
import Profile3 from "./Profile3.png";
import Profile4 from "./FeaturedProfile.png";
import Profile5 from "./Profile5.png";

/**
 * Helper: Reorders 5 items so `selectedIndex` goes to position 2 in the array
 */
function reorderToMiddle(original, selectedIndex) {
  const length = original.length;
  const result = new Array(length);

  for (let i = 0; i < length; i++) {
    const offset = i - 2; // i=0 => offset=-2 ... i=2 => offset=0 ... i=4 => offset=+2
    const originalIndex = (selectedIndex + offset + length) % length;
    result[i] = { ...original[originalIndex], originalIndex };
  }
  return result;
}
const profiles = [
  {
    name: "Sumit Shrestha",
    role: "Motorparts Seller, Birtamod",
    image: Profile1,
    quote:
      "I’m not a wine expert, but I know what tastes good! Rising Royals Wine is smooth and easy to drink. Even my friends who don’t usually like wine enjoy it. Now, I always keep a few bottles at home for special occasions.",
  },
  {
    name: "Deepak Mainali",
    role: "Liquor Seller, Birtamod",
    image: Profile2,
    quote:
      "As a liquor seller, I’ve tried many wines, but Rising Royals stands out. Customers love its unique flavor, and it sells fast! The sweet red one is especially popular. Great quality for the price!",
  },
  {
    name: "Ramesh Acharya",
    role: "Auditor, Itahari",
    image: Profile3,
    quote:
      "After a long day at work, I unwind with a glass of Rising Royals. It’s not too strong, just perfect—relaxing and flavorful. My wife and I serve it to guests, and they always ask where to buy it!",
  },
  {
    name: "Liladevi Gurung",
    role: "Job Holder, Dharan",
    image: Profile4,
    quote:
      "I brought Rising Royals to a family gathering, and everyone was impressed! The taste is rich but not overpowering. Even my parents, who prefer traditional drinks, liked it. Now it’s our go-to celebration wine.",
  },
  {
    name: "Sankhar Singh Bista",
    role: "Textile Industry, Kathmandu",
    image: Profile5,
    quote:
      "I serve Rising Royals at business dinners—it’s a crowd-pleaser! The packaging looks premium, and the taste is consistent. Clients always compliment it. A great choice for gifting too!",
  },
  {
    name: "Aman Manandhar",
    role: "Electronics Businessman, Bhaktapur",
    image: Profile1, // reuse or replace with Profile6 if available
    quote:
      "I’m picky about wines, but Rising Royals won me over. The balance of sweetness and flavor is just right. I even stocked it in my shop because customers kept asking for it!",
  },
  {
    name: "Raju Lama",
    role: "Restaurant Owner, Kathmandu",
    image: Profile2, // reuse or replace with Profile7 if available
    quote:
      "We added Rising Royals to our menu, and it’s a hit! Guests love its smooth finish, and it pairs well with both Nepali and Western dishes. Repeat orders speak for themselves!",
  },

];

export default function Testimonial() {
  const [selectedIndex, setSelectedIndex] = useState(4);

  // Every time selectedIndex changes (auto or manual), schedule the next auto-change
  useEffect(() => {
    const timer = setTimeout(() => {
      setSelectedIndex((prev) => (prev + 1) % profiles.length);
    }, 12000);

    // Cleanup: if user changes index before 8s is up,
    // we reset the timer and start a new one.
    return () => clearTimeout(timer);
  }, [selectedIndex]);

  // Reorder so the selected item is index 2 (middle).
  const reordered = reorderToMiddle(profiles, selectedIndex);
  const middleItem = reordered[2]; // the "selected" person

  return (
    <section className="w-full py-16 px-6 md:px-0  font-alegreya">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-[#CF9A07] text-xl md:text-2xl xl:text-4xl font-bold tracking-widest mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          WORDS WE CHERISH
        </motion.h2>

        {/* Quote Section */}
        <div className="relative px-6 max-w-2xl mx-auto mb-12 mt-5">
          <motion.div
            className="text-gray-800 text-lg md:text-xl xl:text-2xl italic leading-relaxed min-h-[120px] flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={middleItem.name}
                className="text-center mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {middleItem.quote}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Decorative quote mark */}
          <span className="text-5xl text-[#5B0E0E] absolute left-1/2 -translate-x-1/2 top-0 -mt-5">
            “
          </span>
        </div>

        {/* Horizontal line + downward arrow */}
        <div className="relative w-full flex justify-center items-center mb-8">
          <div className="flex-1 h-[2px] bg-[#5B0E0E]" />
          <div className="w-4 h-4 border-l-[2px] border-b-[2px] border-[#5B0E0E] rotate-315 bg-[#FDFBF7]" />
          <div className="flex-1 h-[2px] bg-[#5B0E0E]" />
        </div>

        {/* Profile row */}
        <div
          className=" max-w-screen overflow-x-hidden  flex justify-center items-end gap-6 flex-nowrap  scrollbar-hide pb-4 
        gap-x-9"
        >
          {reordered.map((profile, i) => {
            const isSelected = i === 3; // Middle item
            const isOuter = i === 0 || i === 4; // Left or right edge

            return (
              <motion.div
                key={profile.name}
                // On click, user changes the testimonial => resets the auto timer
                onClick={() => setSelectedIndex(profile.originalIndex)}
                className="flex flex-col items-center cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  className={`
                    w-20 h-20 md:w-24 md:h-24 rounded-full border-4 overflow-hidden flex-shrink-0
                    ${
                      isSelected
                        ? "border-[#5B0E0E] mb-2 md:mb-3 mt-2"
                        : "border-gray-300 mb-2 md:mb-3 filter grayscale"
                    }
                    ${
                      isOuter
                        ? // Edge images blurred on small screens
                          "hidden sm:block sm:blur-sm md:blur-none"
                        : ""
                    }
                  `}
                  animate={{ scale: isSelected ? 1.1 : 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {isSelected && (
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3 className="text-md md:text-lg font-bold text-gray-900">
                      {profile.name}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600">
                      {profile.role}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Hide scrollbars globally (if not using a plugin) */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* for IE and Edge */
          scrollbar-width: none; /* for Firefox */
        }
      `}</style>
    </section>
  );
}

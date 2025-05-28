import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  HamburgerMenuIcon,
  HomeIcon,
  Logo,
  MenuCrossIcon,
} from "../../assets/Icons/index";
import {
  FaHome,
  FaShoppingBag,
  FaBlogger,
  FaInfoCircle,
  FaImages,
} from "react-icons/fa";

import "./Header.css";

const iconVariants = {
  initial: { opacity: 0, scale: 0.8, rotate: -90 },
  animate: { opacity: 1, scale: 1, rotate: 0 },
  exit: { opacity: 0, scale: 0.8, rotate: 90 },
};

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [menu, setMenu] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const navigations = [
    { name: "Home", path: "/", icon: <FaHome size={20} /> },
    { name: "Our Collection", path: "/collection", icon: <FaShoppingBag size={20} /> },
    { name: "Blog", path: "/Blog", icon: <FaBlogger size={20} /> },
    { name: "About Us", path: "/Aboutus", icon: <FaInfoCircle size={20} /> },
    { name: "Gallery", path: "/Gallery", icon: <FaImages size={20} /> },
  ];

  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY.current) < 2) return; // ignore micro scrolls

      if (currentScrollY > lastScrollY.current) {
        setShowHeader(false); // scroll down
      } else {
        setShowHeader(true); // scroll up
      }

      lastScrollY.current = currentScrollY;
    };

    // Use requestAnimationFrame loop for ultra fast detection
    const onScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setMenu(false);
  };

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={showHeader ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
      }}
      className="  fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-[#4d4d41] text-[#FFFFE3] shadow-md rounded-full w-[95%] max-w-8xl"
    >
      <div className="px-4 py-4 relative z-50 font-kollektif">
        {/* Desktop Navbar */}
        <div className="hidden md:flex h-[8vh] px-7 justify-center items-center">
          <div className="grow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="75"
              height="40"
              fill="none"
              viewBox="0 0 75 40"
            >
              <g fill="#FFFFE3" clipPath="url(#clip0_1755_561)">
                <path d="M18.93 21.933c.105.018.504-1.39.707-3a18.5 18.5 0 0 0-.708-7.823c-.45-1.415-.845-2.611-1.887-3.726-1.11-1.19-2.752-2.065-3.12-1.687-.092.095-.139.302-.133.465.011.322.223.558.344.673.223.148 2.947 1.975 3.489 3.334.118.293.357.889.106 1.334a.8.8 0 0 1-.252.272c-.094.052-.965-.012-1.452-.236-1.218-.557-1.515-1.216-2.394-1.255-.39-.016-1.008.081-1.177.492-.094.229-.036.525.089.724.408.654 1.495.204 2.467.393 2.16.418 3.216 3.726 3.41 4.313.4 1.213.468 2.37.508 3.059.09 1.547-.093 2.651 0 2.666z"></path>
                <path d="M20.244 20.456s1.632 4.667 0 8.862c-1.633 4.196-6.03 4.116-6.03 4.116s-3.658.157-5.653-3.804c-1.996-3.96-.799-6.98-.799-6.98s2.504 4.706 5.733 1.138c0 0 3.919 1.294 3.301-2.902a5.6 5.6 0 0 0-.471-.707c-.851-1.083-1.56-1.133-1.778-1.881-.129-.442-.063-1.035.243-1.297.463-.397 1.417.01 1.97.473 1.652 1.38 1.722 4.92.508 6.824a6.3 6.3 0 0 1-.9 1.072 5.8 5.8 0 0 1-2.182 1.295s2.936.063 4.386-2.133c1.452-2.196 1.669-4.078 1.669-4.078zM6.602 0H0v21.726h6.602zM28.372 4.442v17.284h-6.604V2.313z"></path>
                <path d="M28.372 21.726v3.9C28.372 33.565 22.418 40 15.073 40h-1.776C5.954 40 0 33.566 0 25.628v-3.9h6.602v4.312c0 4.524 3.395 8.196 7.583 8.196 4.187 0 7.583-3.67 7.583-8.196v-4.312h6.605zM62.287 39.47l-5.218.062L49.672.412l5.389-.02z"></path>
                <path d="m59.242 39.463 4.863.136L74.115.335l-6.817.152zM39.555 39.405l4.864.137L52.977.408 47.97.422z"></path>
                <path d="M42.814 39.47h-5.23L28.375.334l7.214.057z"></path>
                <path d="M28.459.31h-6.678l7.27 2.54z"></path>
              </g>
              <defs>
                <clipPath id="clip0_1755_561">
                  <path fill="#fff" d="M0 0h74.118v40H0z"></path>
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className="grow-2 flex items-center">
            <ul className="flex flex-row justify-evenly w-full">
              {navigations.map((item, index) => (
                <li
                  key={index}
                  className="text-center cursor-pointer  duration-300 underline-animate"
                  onClick={() => handleNavigation(item.path)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          <button onClick={() => {
            handleNavigation('/enquiryform/')
          }} className="grow flex justify-end items-center">
            <div className="mr-9 text-2xl text-[#FFFFE3]">Get In Touch</div>
            <div
              id="menu-bar"
              className="flex flex-col py-2 w-5 h-1/2 gap-1"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.div
                className="ml-auto w-3 border border-[#FFFFE3] rounded-sm"
                animate={{ x: isHovered ? 1 : 0, rotate: isHovered ? 45 : 0 }}
                transition={{ duration: 0.5 }}
              />
              <div className="border border-[#FFFFE3] rounded-sm" />
              <motion.div
                className="w-3 border border-[#FFFFE3] rounded-sm"
                animate={{ x: isHovered ? 8 : 0, rotate: isHovered ? -45 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navbar */}
        <div className="flex justify-between items-center md:hidden">
          <svg
            className=" py-[6px] w-[75px] h-[40px]"
            xmlns="http://www.w3.org/2000/svg"

            fill="none"
            viewBox="0 0 75 40"
          >
            <g fill="#FFFFE3" clipPath="url(#clip0_1755_561)">
              <path d="M18.93 21.933c.105.018.504-1.39.707-3a18.5 18.5 0 0 0-.708-7.823c-.45-1.415-.845-2.611-1.887-3.726-1.11-1.19-2.752-2.065-3.12-1.687-.092.095-.139.302-.133.465.011.322.223.558.344.673.223.148 2.947 1.975 3.489 3.334.118.293.357.889.106 1.334a.8.8 0 0 1-.252.272c-.094.052-.965-.012-1.452-.236-1.218-.557-1.515-1.216-2.394-1.255-.39-.016-1.008.081-1.177.492-.094.229-.036.525.089.724.408.654 1.495.204 2.467.393 2.16.418 3.216 3.726 3.41 4.313.4 1.213.468 2.37.508 3.059.09 1.547-.093 2.651 0 2.666z"></path>
              <path d="M20.244 20.456s1.632 4.667 0 8.862c-1.633 4.196-6.03 4.116-6.03 4.116s-3.658.157-5.653-3.804c-1.996-3.96-.799-6.98-.799-6.98s2.504 4.706 5.733 1.138c0 0 3.919 1.294 3.301-2.902a5.6 5.6 0 0 0-.471-.707c-.851-1.083-1.56-1.133-1.778-1.881-.129-.442-.063-1.035.243-1.297.463-.397 1.417.01 1.97.473 1.652 1.38 1.722 4.92.508 6.824a6.3 6.3 0 0 1-.9 1.072 5.8 5.8 0 0 1-2.182 1.295s2.936.063 4.386-2.133c1.452-2.196 1.669-4.078 1.669-4.078zM6.602 0H0v21.726h6.602zM28.372 4.442v17.284h-6.604V2.313z"></path>
              <path d="M28.372 21.726v3.9C28.372 33.565 22.418 40 15.073 40h-1.776C5.954 40 0 33.566 0 25.628v-3.9h6.602v4.312c0 4.524 3.395 8.196 7.583 8.196 4.187 0 7.583-3.67 7.583-8.196v-4.312h6.605zM62.287 39.47l-5.218.062L49.672.412l5.389-.02z"></path>
              <path d="m59.242 39.463 4.863.136L74.115.335l-6.817.152zM39.555 39.405l4.864.137L52.977.408 47.97.422z"></path>
              <path d="M42.814 39.47h-5.23L28.375.334l7.214.057z"></path>
              <path d="M28.459.31h-6.678l7.27 2.54z"></path>
            </g>
            <defs>
              <clipPath id="clip0_1755_561">
                <path fill="#fff" d="M0 0h74.118v40H0z"></path>
              </clipPath>
            </defs>
          </svg>
          <div className="cursor-pointer" onClick={() => setMenu(!menu)}>
            <AnimatePresence mode="wait">
              {menu ? (
                <motion.img
                  key="cross"
                  src={MenuCrossIcon}
                  alt="Close"
                  className="size-5"
                  variants={iconVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.2 }}
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  fill="none"
                  viewBox="0 0 25 24"
                >
                  <path
                    stroke="#FFFFE3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10.906 6h10m-16 6h16-13m-3 6h10"
                  ></path>
                </svg>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {menu && (
            <motion.div
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{
                type: "spring",
                damping: 18,
                stiffness: 140,
                mass: 0.5,
              }}
              className="fixed top-0 left-0 w-full h-screen z-50 md:hidden bg-[#4d4d41] text-[#FFFFE3] font-semibold text-lg overflow-hidden rounded-b-2xl shadow-xl"
            >
              {/* Header with Logo and Close */}
              <div className="flex justify-between items-center px-4 py-5 border-b border-[#f0f0d0]/20">
                <div className="flex items-center gap-2 justify-center items-center">
                  <svg
                    className=" py-[6px] w-[75px] h-[40px]"
                    xmlns="http://www.w3.org/2000/svg"

                    fill="none"
                    viewBox="0 0 75 40"
                  >
                    <g fill="#FFFFE3" clipPath="url(#clip0_1755_561)">
                      <path d="M18.93 21.933c.105.018.504-1.39.707-3a18.5 18.5 0 0 0-.708-7.823c-.45-1.415-.845-2.611-1.887-3.726-1.11-1.19-2.752-2.065-3.12-1.687-.092.095-.139.302-.133.465.011.322.223.558.344.673.223.148 2.947 1.975 3.489 3.334.118.293.357.889.106 1.334a.8.8 0 0 1-.252.272c-.094.052-.965-.012-1.452-.236-1.218-.557-1.515-1.216-2.394-1.255-.39-.016-1.008.081-1.177.492-.094.229-.036.525.089.724.408.654 1.495.204 2.467.393 2.16.418 3.216 3.726 3.41 4.313.4 1.213.468 2.37.508 3.059.09 1.547-.093 2.651 0 2.666z"></path>
                      <path d="M20.244 20.456s1.632 4.667 0 8.862c-1.633 4.196-6.03 4.116-6.03 4.116s-3.658.157-5.653-3.804c-1.996-3.96-.799-6.98-.799-6.98s2.504 4.706 5.733 1.138c0 0 3.919 1.294 3.301-2.902a5.6 5.6 0 0 0-.471-.707c-.851-1.083-1.56-1.133-1.778-1.881-.129-.442-.063-1.035.243-1.297.463-.397 1.417.01 1.97.473 1.652 1.38 1.722 4.92.508 6.824a6.3 6.3 0 0 1-.9 1.072 5.8 5.8 0 0 1-2.182 1.295s2.936.063 4.386-2.133c1.452-2.196 1.669-4.078 1.669-4.078zM6.602 0H0v21.726h6.602zM28.372 4.442v17.284h-6.604V2.313z"></path>
                      <path d="M28.372 21.726v3.9C28.372 33.565 22.418 40 15.073 40h-1.776C5.954 40 0 33.566 0 25.628v-3.9h6.602v4.312c0 4.524 3.395 8.196 7.583 8.196 4.187 0 7.583-3.67 7.583-8.196v-4.312h6.605zM62.287 39.47l-5.218.062L49.672.412l5.389-.02z"></path>
                      <path d="m59.242 39.463 4.863.136L74.115.335l-6.817.152zM39.555 39.405l4.864.137L52.977.408 47.97.422z"></path>
                      <path d="M42.814 39.47h-5.23L28.375.334l7.214.057z"></path>
                      <path d="M28.459.31h-6.678l7.27 2.54z"></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1755_561">
                        <path fill="#fff" d="M0 0h74.118v40H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-2xl text-center font-bold tracking-wide font-melodrama-medium">United Winery</span>
                </div>
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className="cursor-pointer"
                  onClick={() => setMenu(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFFFE3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </motion.div>
              </div>

              {/* Navigation Items */}
              <motion.ul
                className="flex flex-col gap-y-6 px-6 py-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                {navigations.map((item, index) => (
                  <motion.li

                    key={index}
                    className={`flex items-center gap-x-4  text-base cursor-pointer px-4 py-2 rounded-md transition-colors duration-300 ${location.pathname === item.path
                      ? "bg-[#FFFFE3] text-[#4d4d41] font-semibold"
                      : "hover:text-gray-300"
                      }`}
                    onClick={() => handleNavigation(item.path)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span>{item.name}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="absolute bottom-28 w-full px-6"
              >
                <button
                  onClick={() => handleNavigation("/enquiryform")}
                  className="w-full py-3 rounded-full bg-[#FFFFE3] text-[#4d4d41] font-semibold text-base shadow-sm hover:shadow-md transition-all duration-300"
                >
                  Get In Touch
                </button>
              </motion.div>
              {/* Optional: CTA or Footer */}
              <div className="absolute bottom-15 w-full text-center text-sm text-[#f0f0d0]/50">
                © {new Date().getFullYear()} United Winery· Crafted with 🍷
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Header;

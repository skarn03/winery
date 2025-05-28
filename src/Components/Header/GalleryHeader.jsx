import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import {
  HamburgerMenuIcon,
  HomeIcon,
  Logo,
  MenuCrossIcon,
} from "../../assets/Icons/index";

import "./Header.css";

const iconVariants = {
  initial: { opacity: 0, scale: 0.8, rotate: -90 },
  animate: { opacity: 1, scale: 1, rotate: 0 },
  exit: { opacity: 0, scale: 0.8, rotate: 90 },
};

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const navigations = [
    { name: "Home", path: "/", icon: HomeIcon },
    { name: "Our Collection", path: "/collection", icon: HomeIcon },
    { name: "Blog", path: "/Blog", icon: HomeIcon },
    { name: "About Us", path: "/Aboutus", icon: HomeIcon },
    { name: "Gallery", path: "/Gallery", icon: HomeIcon },
  ];

  // Handle navigation and close menu
  const handleNavigation = (path) => {
    navigate(path);
    setMenu(false); // Close menu after clicking
  };

  return (
    <div className="px-4 py-2 sm:px-4 sm:py-2 md:px-0 md:py-0 lg:px-0 lg:py-0 relative z-50 font-kollektif ">
      {/* Navbar for Larger Screens */}
      <div className="hidden sm:hidden md:flex lg:flex font-kollektif h-[10vh] px-7 justify-center items-center border-black">
        {/* Left Most */}
        <div className="grow-1 border-red-400">
          <img src={Logo} alt="logo" />
        </div>

        {/* Middle Navigation */}
        <div className="grow-2 flex border-black-400 items-center">
          <ul className="flex flex-row justify-evenly w-full">
            {navigations.map((item, index) => (
              <li
                key={index}
                className="text-center cursor-pointer underline-animate"
                onClick={() => handleNavigation(item.path)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Most */}
        <div className="grow-1 flex justify-end items-center border-blue-400">
          <div className="mr-9 font-kollektif text-2xl">Get In Touch</div>
          <div
            id="menu-bar"
            className="flex flex-col py-2 w-5 h-1/2 gap-1"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              className="ml-auto w-3 border-1 border-black rounded-sm"
              animate={{ x: isHovered ? 1 : 0, rotate: isHovered ? 45 : 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
            <div className="border-1 border-black rounded-sm" />
            <motion.div
              className="w-3 border-1 border-black rounded-sm"
              animate={{ x: isHovered ? 8 : 0, rotate: isHovered ? -45 : 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>

      {/* Navbar for Smaller Screens */}
      <div className="flex justify-between items-center relative z-40 sm:flex md:hidden lg:hidden">
        {/* Logo */}
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        {/* Hamburger Icon */}
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
              <motion.img
                key="hamburger"
                src={HamburgerMenuIcon}
                alt="Menu"
                className="size-5"
                variants={iconVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.2 }}
              />
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* The Dropdown Menu for Small Screens */}
      <div
        className={` ${menu ? "translate-y-[-48px]" : "translate-y-[-2000px]"
          } md:hidden lg:hidden absolute z-50 text-black left-0 font-semibold text-lg w-full transition-transform duration-400 px-0 py-0`}
      >
        
        <div className="bg-[#E9E9E9] rounded-2xl flex flex-col gap-5 h-[140vh]">
          {/* Top Section */}
          <div className="flex justify-between items-center px-3 py-3">
            {/* Logo */}
            <div>
              <img src={Logo} alt="Logo" />
            </div>
            {/* Close Icon */}
            <div className="cursor-pointer" onClick={() => setMenu(false)}>
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
                  <motion.img
                    key="hamburger"
                    src={HamburgerMenuIcon}
                    alt="Menu"
                    className="size-5"
                    variants={iconVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.2 }}
                  />
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col gap-y-4 px-3 py-8">
            {navigations.map((item, index) => (
              <div
                key={index}
                className="text-[16px] pt-[4px] transition-colors duration-300 ease-out hover:text-black cursor-pointer flex items-center gap-x-12"
                onClick={() => handleNavigation(item.path)} // Navigate & close menu
              >
                <img src={item.icon} alt="icon" className="size-5" />
                <p>{item.name}</p>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

import { GlassIcon, GlassIconBlack, RightArrowIcon } from "../../assets/Icons";
import "./HeroButton.css";
import "./HeroButtonTextSwap.css";
const HeroButton = () => {
  return (
    <>
      {/* button for larger screens */}
      <button className="hero-button bg-[#fff] white hidden sm:hidden md:flex lg:flex items-center rounded-full py-1 px-2 min-w-[0%] cursor-pointer ">
        {/* Right Arrow Icon */}
        <div className=" px-5 py-4 bg-[#1C272C] rounded-full arrow-right">
          <img src={RightArrowIcon} alt="->" className="invert-0" />
        </div>

        {/* Text Container */}
        <div className="hero-text-container mx-4 font-bold text-[#1C272C]">
          {/* Default text (visible initially) */}
          <span className="hero-text-default">Discover the blend</span>
          {/* Hover text (initially hidden) */}
          <span className="hero-text-hover">Raise A Glass</span>
        </div>
        {/* The Glass Icon */}
        <div className="px-3 sm:px-3 md:px-5 lg:px-5 py-2 sm:py-2 md:py-4 lg:py-4 bg-[#1C272C] rounded-4xl raise-glass-icon">
          <img src={GlassIcon} alt="->" className="invert-0" />
        </div>
      </button>

      {/* button for smaller screens */}

      <div className="pr-4">
        <div className="overflow-hidden transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl px-4 wine-card-button bg-white rounded-2xl py-2 flex sm:flex md:hidden lg:hidden justify-between ">
          <button className="text-[16px] font-bold text-[#1C272C] font-kollektif">
            Raise a glass
          </button>
          <div className="flex rounded-full justify-center items-center transition-all duration-500 ease-in-out hover:scale-110 border bg-[#2E2E2E] ">
            <img src={GlassIcon} alt="->" className="w-6 h-6 px-1 py-1 invert-0" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroButton;

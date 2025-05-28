import React from "react";
import {
    FaInstagram,
    FaFacebookF,
    FaEnvelope,
    FaPhoneAlt,
} from "react-icons/fa";

export default function Footer({ mode = "dark" }) {
    const isDark = mode === "dark";
    const bgColor = isDark ? "#202019" : "#FFFFE3";
    const textColor = isDark ? "#FFFFE3" : "#202019";

    return (
        <footer
            className="w-full px-6 py-12 md:px-16 xl:px-24 font-satoshi-regular"
            style={{ backgroundColor: bgColor, color: textColor }}
        >
            <div className="max-w-7xl mx-auto flex flex-col gap-10">
                {/* Top Logo + Email */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-3xl md:text-4xl xl:text-[80px] font-melodrama-medium">
                        United Winery
                    </h2>
                    <p className="text-base md:text-lg xl:text-[40px]">info@unitedwinery.com</p>
                </div>

                {/* Line with end dot */}
                <div className="relative w-full h-[1px] bg-[#FFFFE3]/70">
                    <div
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[6px] h-[6px] rounded-full"
                        style={{ backgroundColor: textColor }}
                    ></div>
                </div>

                {/* Link Sections */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                    {/* Quick Links */}
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg xl:text-[40px] font-Tanker uppercase tracking-wide">
                            Quick Links
                        </h3>
                        <ul className="space-y-1 text-sm md:text-base">
                            <li>Home</li>
                            <li>Wine Collection</li>
                            <li>Blog</li>
                            <li>Gallery</li>
                        </ul>
                    </div>

                    {/* About Us */}
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg xl:text-[40px] font-Tanker uppercase tracking-wide">
                            About Us
                        </h3>
                        <ul className="space-y-1 text-sm md:text-base">
                            <li>About Us</li>
                            <li>Terms and Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>

                    {/* Spacer (if needed) */}
                    <div className="hidden md:block"></div>

                    {/* Contact Us */}
                    <div className="flex flex-col gap-4  w-full">
                        <h3 className="text-lg xl:text-[40px] font-Tanker uppercase tracking-wide">
                            Contact Us
                        </h3>
                        <button
                            className="border px-6 py-2 text-sm md:text-base xl:text-[36px] font-Tanker uppercase tracking-wide rounded hover:bg-[#FFFFE3]/10 transition"
                            style={{ borderColor: textColor, color: textColor }}
                        >
                            Get In Touch
                        </button>

                        {/* Social Icons */}
                        <div className="flex gap-8 pt-2 text-[#202019] text-xl">
                            <span className="bg-[#FFFFE3] p-3 rounded-full">
                                <FaInstagram />
                            </span>
                            <span className="bg-[#FFFFE3] p-3 rounded-full">
                                <FaFacebookF />
                            </span>
                            <span className="bg-[#FFFFE3] p-3 rounded-full">
                                <FaEnvelope />
                            </span>
                            <span className="bg-[#FFFFE3] p-3 rounded-full">
                                <FaPhoneAlt />
                            </span>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-[#FFFFE3]/70"></div>

                {/* Footer Bottom */}
                <div className="text-center text-xs md:text-sm xl:text-lg pt-4">
                    <p>&copy; {new Date().getFullYear()} United Winery. All rights reserved.</p>
                    <p>
                        Designed & Developed by{" "}
                        <a
                            href="https://saikanepal.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold  text-blue-200 hover:underline"
                        >
                            Saika Nepal
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

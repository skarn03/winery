import {
  GalleryCrossIcon,
  GalleryImage1,
  GalleryImage10,
  GalleryImage11,
  GalleryImage2,
  GalleryImage4,
  GalleryImage5,
  GalleryImage6,
  GalleryImage8,
  GalleryImage9,
  RightArrowIcon1,
  TestImage1,
} from "../../assets/Icons";
import Header from "../../Components/Header/Header";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import GalleryOverLay from "./GalleryOverLay";
import FullPageModalWrapper from "./FullPageModalWrapper";
import "./GalleryPhotos.css";
import Loading from "../../Components/Loading/Loading";
import LoaderScreen from "../../Components/Loading/LoadingScreen";

const Galleryv3 = () => {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  // this text is displayed in the gallery section
  const [galleryPhotoVideoDisplayText, setGalleryPhotoVideoDisplayText] =
    useState("Photos");

  // gallery images to loop over
  const galleryImages = [
    { src: GalleryImage1, alt: "Image 1", colSpan: 2, rowSpan: 2 },
    { src: GalleryImage2, alt: "Image 2", colSpan: 1, rowSpan: 1 },
    { src: GalleryImage11, alt: "Image 3", colSpan: 1, rowSpan: 1 },
    { src: GalleryImage4, alt: "Image 4", colSpan: 2, rowSpan: 1 },
    { src: GalleryImage5, alt: "Image 5", colSpan: 2, rowSpan: 1 },
    { src: GalleryImage6, alt: "Image 6", colSpan: 1, rowSpan: 1 },
    { src: GalleryImage8, alt: "Image 7", colSpan: 1, rowSpan: 1 },
    { src: GalleryImage9, alt: "Image 8", colSpan: 1, rowSpan: 1 },
    { src: GalleryImage10, alt: "Image 9", colSpan: 1, rowSpan: 1 },
  ];
  // for smaller screen
  const galleryImagesSmallScreen = [
    { src: GalleryImage1, alt: "Image 1", colSpan: 2, rowSpan: 2 },
    { src: GalleryImage2, alt: "Image 2", colSpan: 2, rowSpan: 1 },
    { src: GalleryImage11, alt: "Image 3", colSpan: 1, rowSpan: 1 },
    { src: GalleryImage4, alt: "Image 4", colSpan: 1, rowSpan: 1 },
    { src: GalleryImage5, alt: "Image 5", colSpan: 1, rowSpan: 2 },
    { src: GalleryImage6, alt: "Image 6", colSpan: 1, rowSpan: 1 },
    { src: GalleryImage8, alt: "Image 7", colSpan: 1, rowSpan: 1 },
    { src: GalleryImage9, alt: "Image 8", colSpan: 2, rowSpan: 1 },
    { src: GalleryImage10, alt: "Image 9", colSpan: 2, rowSpan: 1 },
  ];
  const [isGalleryLoaded, setIsGalleryLoaded] = useState(false);
  // Toggle between gallery and video
  const handleToggleVideoPhotos = async () => {
    setGalleryPhotoVideoDisplayText(
      galleryPhotoVideoDisplayText === "Photos" ? "Videos" : "Photos"
    );
  };
  // Close the gallery overlay function
  const closeOverLay = async () => {
    setIsClosing(true);
    setTimeout(() => {
      setOverlayOpen(false);
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsGalleryLoaded(true);
    }, 3500);
  }, []);
  
  if (!isGalleryLoaded) return <LoaderScreen isLoading={true} text="GALLERY" />;
  return (
    <>
      {/* Gallery Hero */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.7 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="h-screen relative px-4 py-2 flex flex-col w-full overflow-hidden"
      >
        {/* background bg */}
        <div
          className="absolute inset-0 px-2 py-2"
          // The key is "absolute" + "inset-0" so it fully covers the parent
          style={{
            backgroundImage: `url(${TestImage1})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />

        {/* Header */}
        {/* <div className="flex-[10%] relative z-40">
          <Header />
        </div> */}
        {/* Gallery Content*/}
        <div className="flex-[90%] relative z-10 flex flex-col px-4 sm:px-4 md:px-16   lg:px-16">
          <div className="flex-[40%]" />
          <div className="flex-[60%] flex flex-col justify-end sm:justify-end md:justify-start lg:justify-start pb-8 sm:pb-8 md:pb-0 lg:pb-0">
            {/* Gallery Title */}
            <div className="flex items-center">
              <motion.p
                initial={{ opacity: 0, x: -200, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-[58px] sm:text-[58px] md:text-[100px] lg:text-[144px] text-white font-melodrama-medium"
              >
                Gallery
              </motion.p>
              {/* Button Image */}
              <div
                className="px-2 flex sm:flex md:hidden  lg:hidden"
                onClick={() => setOverlayOpen(true)}
              >
                <img src={RightArrowIcon1} alt="->" className="size-12" />
              </div>
            </div>
            {/* Instruction and Image */}
            <motion.div
              initial={{ opacity: 0, x: 200, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-row items-center gap-x-4 "
            >
              {/* Button Image */}
              <div
                className="px-2 hidden sm:hidden md:flex  lg:flex"
                onClick={() => setOverlayOpen(true)}
              >
                <img src={RightArrowIcon1} alt="->" className="size-12" />
              </div>
              {/* Instruction */}
              <div>
                <div className="text-white">
                  <p className="text-[20px] sm:text-[20px] md:text-[20px] lg:text-[24px] font-satoshi-medium">
                    Discover the refined path of our wines, from wineyard{" "}
                  </p>
                  <p className="text-[20px] sm:text-[20px] md:text-[20px] lg:text-[24px] font-satoshi-medium">
                    to you glass
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      {/* Gallery Photos */}
      <div className="min-h-screen py-4 flex flex-col gap-y-4 bg-[#FFFFE3] ">
        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.7 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }} // optional
          className="flex gap-x-4 px-8 sm:px-8 md:px-20 lg:px-20 flex-[5%] justify-between"
        >
          {/* Chosen section */}
          <div>
            <motion.p
              key={galleryPhotoVideoDisplayText} // Key ensures the transition occurs smoothly on state change
              initial={{ opacity: 0, y: -100 }} // Initial state: slightly off-screen to the left
              animate={{ opacity: 1, y: 0 }} // Final state: fully visible at its original position
              exit={{ opacity: 0, y: 50 }} // Exit state: slightly off-screen to the right
              transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition duration
              whileInView={{ opacity: 1, y: 0 }} // When the element comes into view
              viewport={{ once: true }} // Only trigger once when the element is in view
              className="font-melodrama-medium font-bold text-[56px]"
            >
              {galleryPhotoVideoDisplayText}
            </motion.p>
          </div>
          {/* buttons */}
          <div className="flex items-center gap-x-2">
            {/* Photos */}
            <div
              className={`min-w-[40px] flex justify-center flex-col transition-all duration-300 ${galleryPhotoVideoDisplayText === "Photos"
                  ? "photo-button-gallery-container active"
                  : ""
                }`}
              onClick={handleToggleVideoPhotos}
            >
              <button
                className={`text-[24px] px-5 py-2  rounded-full ${galleryPhotoVideoDisplayText === "Photos"
                    ? "bg-black text-white"
                    : "text-[#202019] border border-black"
                  } cursor-pointer`}
              >
                P
              </button>
              <div
                className={`${galleryPhotoVideoDisplayText === "Photos"
                    ? "text-photo-container active"
                    : ""
                  } font-satoshi-medium`}
                data-content="Photos"
              />
            </div>
            {/* Videos */}
            <div
              className={`min-w-[40px] flex justify-center flex-col transition-all duration-300 ${galleryPhotoVideoDisplayText === "Videos"
                  ? "photo-button-gallery-container active"
                  : ""
                }`}
              onClick={handleToggleVideoPhotos}
            >
              <button
                className={`text-[24px] px-5 py-2 ${galleryPhotoVideoDisplayText === "Videos"
                    ? "bg-black text-white"
                    : "text-[#202019]"
                  }  rounded-full border cursor-pointer`}
              >
                V
              </button>
              <div
                className={`${galleryPhotoVideoDisplayText === "Videos"
                    ? "text-photo-container active"
                    : ""
                  } font-satoshi-medium`}
                data-content="Video"
              />
            </div>
          </div>
        </motion.div>
        {/* Gallery Grid */}
        {/* grid for photos */}
        <motion.div
          // initial={{ opacity: 0, y: 30, scale: 0.7 }}
          // whileInView={{ opacity: 1, y: 0, scale: 1 }}
          // transition={{ duration: 0.7, ease: "easeOut" }}
          // viewport={{ once: true, amount: 0.3 }}
          className="flex-[95%]  flex  py-4"
          onClick={() => setOverlayOpen(true)}
        >
          {/* column 1 */}
          <div className="flex-[100%] px-8 sm:px-8 md:px-20 lg:px-20 py-4 ">
            {/* Grid container with fixed row height for big screen*/}
            <div className="hidden sm:hidden md:grid lg:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[220px]">
              {galleryImages.map((img, index) => (
                <motion.div
                  key={index}
                  onClick={() => setOverlayOpen(true)}
                  // initial={{ opacity: 0, y: 30, scale: 1.2 }}
                  // whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  // transition={{ duration: 0.1, ease: "easeOut" }}
                  // viewport={{ once: false, amount: 0.3 }}
                  className={`
              relative overflow-hidden rounded-sm shadow-lg cursor-pointer 
              transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl
              hover:scale-100
              ${img.colSpan === 2 ? "col-span-2" : "col-span-1"}
              ${img.rowSpan === 2 ? "row-span-2" : "row-span-1"}
            `}
                >
                  <motion.img
                    src={img.src}
                    alt={img.alt}
                    initial={{ opacity: 0, scale: 1.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    // whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    viewport={{ once: true }} // optional
                    className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
                  />
                  {/* Gradient overlay with smooth transition */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 transition duration-300 hover:opacity-50"></div>
                  {/* Hover effect: scale image and darken */}
                </motion.div>
              ))}
            </div>

            {/* grid container for small screen */}
            <div className="grid sm:grid md:hidden lg:hidden grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[220px]">
              {galleryImagesSmallScreen.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setOverlayOpen(true)}
                  className={`
              relative overflow-hidden rounded-sm shadow-lg cursor-pointer 
              transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl
              hover:scale-100
              ${img.colSpan === 2 ? "col-span-2" : "col-span-1"}
              ${img.rowSpan === 2 ? "row-span-2" : "row-span-1"}
            `}
                >
                  <motion.img
                    src={img.src}
                    alt={img.alt}
                    initial={{ opacity: 0, scale: 1.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
                  />
                  {/* Gradient overlay with smooth transition */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 transition duration-300 hover:opacity-50"></div>
                  {/* Hover effect: scale image and darken */}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/*Overlay modal covering the full screen  */}
      <FullPageModalWrapper isOpen={overlayOpen} isClosing={isClosing}>
        <div className="h-screen max-h-screen overflow-hidden bg-black">
          {/* Over lay for larger screen      */}
          <div className="h-screen flex flex-col bg-black relative">
            {/* gallery text for the over lay and the closing of overlay button */}
            <div className="text-white flex-[5%] px-7 sm:px-7 md:px-10 lg:px-10 flex items-center py-2 absolute top-[48px] sm:top-[48px] md:top-[20px] lg:top-[20px] z-10 justify-between w-full ">
              {/* title of overlay */}
              <div
                className="underline-animate-back-to-gallery cursor-pointer"
                onClick={closeOverLay}
              >
                <p className="text-[48px] lg:text-[48px] font-satoshi-medium font-bold py-0">
                  Gallery
                </p>
              </div>
              {/* button to close the over lay */}
              <div
                className="cursor-pointer transition-transform transform hover:scale-105"
                onClick={closeOverLay}
              >
                <img
                  src={GalleryCrossIcon}
                  alt="X"
                  className="size-14 lg:size-16"
                />
              </div>
            </div>
            {/* For Bigger Screens */}
            <div className=" flex-[100%] flex flex-col justify-center ">
              <GalleryOverLay />
            </div>
            {/* For Smaller Screens */}
          </div>
        </div>
      </FullPageModalWrapper>
    </>
  );
};

export default Galleryv3;

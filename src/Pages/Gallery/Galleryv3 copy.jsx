import { GalleryCrossIcon, RightArrowIcon1, TestImage1 } from "../../assets/Icons";
import Header from "../../Components/Header/Header";
import {
  ArrowLeftGalleryIcon,
  ArrowRightGalleryIcon,
  GalleryBg,
  SampleImageJarCan,
  WineGlassTest3,
  WineTest,
} from "../../assets/Icons";
import { delay, easeInOut, motion } from "framer-motion";
import Overlay from "./Overlay";
import { useState } from "react";
import GalleryOverLay from "./GalleryOverLay";
import FullPageModalWrapper from "./FullPageModalWrapper";
import ModalWrapper from "./ModalWrapper";
import './GalleryPhotos.css';
import Galleryv5 from "./Galleryv5";

const Galleryv3 = () => {
  const images = [WineGlassTest3, WineTest, SampleImageJarCan];
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  // this text is displayed in the gallery section
  const [galleryPhotoVideoDisplayText, setGalleryPhotoVideoDisplayText] = useState('Photos');

  // Toggle between gallery and video
  const handleToggleVideoPhotos = async () => {
    setGalleryPhotoVideoDisplayText(galleryPhotoVideoDisplayText === 'Photos' ? 'Videos' : 'Photos');
  };
  // Close the gallery overlay function
  const closeOverLay = async () => {
    setIsClosing(true);
    setTimeout(() => {
      setOverlayOpen(false);
      setIsClosing(false);
    }, 300);
  };
  return (
    <>
      {/* Gallery Hero */}
      <div className="h-screen relative px-2 py-2 flex flex-col">
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
        <div className="flex-[10%] relative z-10">
          <Header />
        </div>
        {/* Gallery Content*/}
        <div className="flex-[90%] relative z-10 flex flex-col   px-6">
          <div className="flex-[40%]" />
          <div className="flex-[60%]">
            {/* Gallery Title */}
            <div>
              <p className="text-[144px] text-white font-melodrama-medium">Gallery</p>
            </div>
            {/* Instruction and Image */}
            <div className="flex flex-row items-center gap-x-4 ">
              {/* Button Image */}
              <div className="px-2" onClick={() => setOverlayOpen(true)}>
                <img src={RightArrowIcon1} alt="->" className="size-12" />
              </div>
              {/* Instruction */}
              <div>
                <div className="text-white">
                  <p className="text-[24px] font-satoshi-medium">Discover the refined path of our wines, from wineyard  </p>
                  <p className="text-[24px] font-satoshi-medium">to you glass</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Gallery Photos */}
      <div className="h-screen py-4 flex flex-col gap-y-4 bg-[#FFFFE3]" >
        {/* Buttons */}
        <div className="flex gap-x-4 px-8 flex-[5%] justify-between">

          {/* Chosen section */}
          <div>
            <motion.p
              key={galleryPhotoVideoDisplayText}  // Key ensures the transition occurs smoothly on state change
              initial={{ opacity: 0, y: -100 }}    // Initial state: slightly off-screen to the left
              animate={{ opacity: 1, y: 0 }}      // Final state: fully visible at its original position
              exit={{ opacity: 0, y: 50 }}        // Exit state: slightly off-screen to the right
              transition={{ duration: 0.5,ease:"easeOut" }}       // Smooth transition duration
              whileInView={{ opacity: 1, y: 0 }}  // When the element comes into view
              viewport={{ once: false }}            // Only trigger once when the element is in view
              className="font-melodrama-medium font-bold text-[56px]">{galleryPhotoVideoDisplayText}</motion.p>
          </div>
          
          {/* buttons */}
          <div className="flex items-center gap-x-2">
            {/* Photos */}
            <div
              className={`min-w-[40px] flex justify-center flex-col transition-all duration-300 ${galleryPhotoVideoDisplayText === 'Photos' ? 'photo-button-gallery-container active' : ''}`}
              onClick={handleToggleVideoPhotos}
            >
              <button className="text-[24px] px-5 py-2 text-white rounded-full bg-black cursor-pointer">P</button>
              <div className={`${galleryPhotoVideoDisplayText === 'Photos' ? 'text-photo-container active' : ''} font-satoshi-medium`} data-content="Photos" />
            </div>
            {/* Videos */}
            <div
              className={`min-w-[40px] flex justify-center flex-col transition-all duration-300 ${galleryPhotoVideoDisplayText === 'Videos' ? 'photo-button-gallery-container active' : ''}`}
              onClick={handleToggleVideoPhotos}
            >
              <button className="text-[24px] px-5 py-2 text-[#202019] rounded-full border cursor-pointer">V</button>
              <div className={`${galleryPhotoVideoDisplayText === 'Videos' ? 'text-photo-container active' : ''} font-satoshi-medium`} data-content="Video" />
            </div>
          </div>


          {/* Gallery Grid */}
        </div>
        {/* grid for photos */}
        <div className="flex-[95%]  flex flex-col py-4" onClick={() => setOverlayOpen(true)}>
          <div className="flex-[30%] px-6 py-4">
            <div className="grid grid-cols-4 gap-4">
              {/* First image spanning two columns */}
              <div
                className="w-full h-[224px] md:h-[240px] lg:h-[280px] xl:h-[320px] rounded-md overflow-hidden relative col-span-2"
              >
                <motion.img
                  src={WineGlassTest3}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              </div>
              <div
                className="w-full h-[224px] md:h-[240px] lg:h-[280px] xl:h-[320px] rounded-md overflow-hidden relative"
              >
                <motion.img
                  src={WineTest}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              </div>

              <div
                className="w-full h-[224px] md:h-[240px] lg:h-[280px] xl:h-[320px] rounded-md overflow-hidden relative"
              >
                <motion.img
                  src={SampleImageJarCan}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              </div>


            </div>
          </div>
          {/* Photos section */}
          <div className=" h-full flex px-6">
            <div className="flex-[50%] ">
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="w-full h-[224px] md:h-[240px] lg:h-[280px] xl:h-[440px] rounded-md overflow-hidden relative col-span-1 row-span-2"
                >
                  <motion.img
                    src={SampleImageJarCan}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                </div>
                <div
                  className="w-full h-[224px] md:h-[240px] lg:h-[280px] xl:h-[440px] rounded-md overflow-hidden relative col-span-1 row-span-2"
                >
                  <motion.img
                    src={SampleImageJarCan}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </div>
            <div className="flex-[50%] px-2">
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="w-full h-[224px] md:h-[240px] lg:h-[240px] xl:h-[224px] rounded-md overflow-hidden relative"
                >
                  <motion.img
                    src={WineTest}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                </div>
                <div
                  className="w-full h-[224px] md:h-[240px] lg:h-[240px] xl:h-[224px] rounded-md overflow-hidden relative"
                >
                  <motion.img
                    src={GalleryBg}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                </div>
                <div
                  className="w-full h-[224px] md:h-[240px] lg:h-[240px] xl:h-[200px] rounded-md overflow-hidden relative"
                >
                  <motion.img
                    src={GalleryBg}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                </div>
                <div
                  className="w-full h-[224px] md:h-[240px] lg:h-[240px] xl:h-[200px] rounded-md overflow-hidden relative"
                >
                  <motion.img
                    src={GalleryBg}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* {overlayOpen && (
        <Overlay onClose={() => setOverlayOpen(false)}>
         <GalleryOverLay/>
        </Overlay>
      )} */}

      {/* <ModalWrapper isOpen={overlayOpen} isClosing={isClosing} invokeOutSideProp={{ close: true }} onClose={closeOverLay}>
        <GalleryOverLay />
      </ModalWrapper> */}
      <FullPageModalWrapper isOpen={overlayOpen} isClosing={isClosing}>
        <div className='h-screen max-h-screen overflow-hidden bg-black'>

          {/* Over lay for larger screen      */}
          <div className="h-screen flex flex-col bg-black relative">
            <div className="text-white flex-[5%] px-10 flex items-center py-2 absolute top-[20px] z-10 justify-between w-full">
              <div className="underline-animate-back-to-gallery cursor-pointer" onClick={closeOverLay}>
                <p className="text-[54px] font-satoshi-medium font-bold py-0">Gallery</p>
              </div>
              <div className="cursor-pointer transition-transform transform hover:scale-105" onClick={closeOverLay}>
                <img src={GalleryCrossIcon} alt="X" className="size-16" />
              </div>
            </div>
            <div className="flex-[100%] flex flex-col justify-center ">
              <GalleryOverLay />
            </div>
          </div>
        </div>

      </FullPageModalWrapper>
    </>
  );
};

export default Galleryv3;

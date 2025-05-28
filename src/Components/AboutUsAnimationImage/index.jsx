import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {  ArrowInsideCircle } from '../../assets/Icons';


const Index = ({images}) => {
 const [currentPositionIndex, setCurrentPositionIndex] = useState(0);


 const [ContainerImage, GardenImage, GlassImage] = images;
 // Initial positions for the three elements
 const positions = [
   [
     { x: 0,scale:1},     // Element 1 position 0
     { x: 0,scale:0.7},   // Element 2 position 0
     { x: -50,scale:0.5},  // Element 3 position -50
   ],
   [
     { x: 488-50,scale:0.5},   // Element 1 moved to position 3 488-50
     { x: -244,scale:1},  // Element 2 moved to position 1 -244
     { x: -244,scale:0.7},     // Element 3 moved to position 2 -244
   ],
   [
     { x: 244,scale:0.7},  // Element 1 moved to position 2 244
     { x: 244-50,scale:0.5},     // Element 2 moved to position 3 244-50
     { x: -488,scale:1},   // Element 3 moved to position 1 -488
   ],
 ];


 const swapDuration = 2;     // 2 seconds for the animation
 const pauseDuration = 2;    // 5 seconds pause between animations
  useEffect(() => {
   // Timer to cycle through position states
   const timer = setInterval(() => {
     setCurrentPositionIndex((prevIndex) => (prevIndex + 1) % positions.length);
   }, (swapDuration + pauseDuration) * 1000); // Convert to milliseconds
 
   return () => clearInterval(timer); // Cleanup on unmount
 }, []);


 return (


   <div className='flex justify-between'>
  
   {/* Left Most division */}
  
    <div className='flex flex-col gap-2 max-w-[510px] '>
  
    <div className='font-melodrama-regular text-4xl'>The Art of Winemaking</div>
       <div className='font-melodrama-medium text-4xl font-bold self-end'>From Vine To Bottle</div>


       <motion.div
     key={currentPositionIndex}
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     exit={{ opacity: 0 }}
     transition={{ duration: swapDuration }}
     className='flex my-5 sm:hidden'
   >
     <motion.img
       src={images[currentPositionIndex]}
       alt={`Slide ${currentPositionIndex + 1}`}
     className='w-full'
     />
   </motion.div>
     <div className='flex gap-x-5 flex-row'>
   <div>
      <img src={ArrowInsideCircle} alt="" srcset="" />


      </div>








   <motion.div className='flex flex-col gap-3'
   key ={currentPositionIndex}>
     <motion.span className='text-2xl'
                 
                  initial={{opacity:0}}
                  animate={{opacity:1}}
                  transition={{duration:swapDuration}}
     >
       {currentPositionIndex===0 ? "Vineyard" : currentPositionIndex===1 ? "International Wine Making Equipments" : "Class Aging and Bottling" }
   
       </motion.span>


   <motion.span className='text-[#636363]'
               
                  initial={{opacity:0}}
                  animate={{opacity:1}}
                  transition={{duration:swapDuration}}
     >
       {currentPositionIndex===0 ? "From the lush vineyards, Every ounce of grapes are the essence of wine." : currentPositionIndex===1 ? "Imported straight from  the European Market, Never Seen Before In Nepal" : "  Every Bottle is MasterPiece, crafted with care and presented with elegance" }
     
     </motion.span>
   </motion.div>
     </div>
  
  
     </div>


     {/* Right Most Image Division */}
<div className=' hidden sm:flex lg:hidden md:flex'>


<motion.div
     key={currentPositionIndex}
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     exit={{ opacity: 0 }}
     transition={{ duration: swapDuration }}
   >
     <motion.img
       src={images[currentPositionIndex]}
       alt={`Slide ${currentPositionIndex + 1}`}
     width={244}
     />
   </motion.div>


</div>


   <div className="hidden lg:flex">
     {/* Element 1 */}
     {/* <motion.div
       className="absolute w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white"
       animate={{
         x: positions[currentPositionIndex][0].x,
         y: positions[currentPositionIndex][0].y
       }}
       transition={{ duration: swapDuration, ease: "easeInOut" }}
     >
       1
     </motion.div> */}


<motion.img
       src={GardenImage}
       alt=""   
       height={344}
        width={244}
       animate={{
         x: positions[currentPositionIndex][0].x,
         scale: positions[currentPositionIndex][0].scale,
         // scale:1/((currentPositionIndex%3)+1)
       }}
       transition={{ duration: swapDuration }}
    />
  




     {/* Element 2 */}
     <motion.img
      src={ContainerImage}
       alt=""   
       height={344}
        width={244}
       animate={{
         x: positions[currentPositionIndex][1].x,
         scale: positions[currentPositionIndex][1].scale,
       }}
       transition={{ duration: swapDuration }}
    />


     {/* Element 3 */}
     <motion.img
       src={GlassImage}
       alt=""   
       height={344}
        width={244}
       animate={{
         x: positions[currentPositionIndex][2].x,
         scale: positions[currentPositionIndex][2].scale,
         // scale:1/(3-currentPositionIndex)
       
       }}
       transition={{ duration: swapDuration }}
    />
   </div>
   </div>


 );
};


export default Index;
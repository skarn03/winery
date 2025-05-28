import React, { useEffect, useState } from 'react'


import { motion } from 'framer-motion'
import { NepalPinnedMap, NepalSemiMap, ArrowInsideCircle, UWLogoImage, AboutusContainerImage, AboutusGardenImage, AboutusGlassImage, AboutusImage1, ArrowIconRight, ArrowIconRightv1, ArrowRightGalleryIcon, AboutUsCroppedEyeWine } from '../../assets/Icons/index.jsx'
import TeamMemberFrame from '../../Components/AboutUsMemberFrame/index.jsx'
import SecondSection from '../../Components/AboutUsAnimationImage/index.jsx'
import Header from '../../Components/Header/Header.jsx'




const Aboutuspage = () => {






 return (


   <div className="bg-[#FFFFE3]">




     <div className='flex flex-col gap-y-30 font-satoshi  bg-[#FFFFE3] sm:gap-y-70 sm:px-20 p-5  '
       style={{
         backgroundImage: ` url(${NepalSemiMap})`,
         backgroundRepeat: "no-repeat",
         backgroundPosition: "right 1px",
         backgroundSize: "989px 848px",
       }}>




       {/* First Section */}


       <div className="flex flex-col gap-y-20 mt-40 "
       >




         <div className='flex flex-col font-melodrama-regular sm:items-start sm:w-1/3 mt-10'>


           <div className='text-4xl'>
             Shared Moments,
           </div>
           <div className='text-4xl font-bold self-end'>
             Shared Wines
             <img src={ArrowInsideCircle} alt="" srcset="" className='mt-5 sm:mt-0 sm:inline sm:ml-5' />
           </div>
         </div>


         <div className='hidden sm:block text-2xl'>
           The story behind the wine
           <hr class="relative top-23 z-1 border-0 h-px bg-gradient-to-r from-[#CF9A07] via-[#303030] to-[#CF9A07]" />


         </div>


         <div className=' flex items-center z-2 sm:items-start sm:justify-between'>




           <div className='hidden  sm:flex flex-col w-[250px] gap-y-2'>
             <div className=' self-center mb-15 bg-white px-1'>
               1994
             </div>
             <img src={AboutusImage1} alt="" width={248} />
             <div className='font-bold'>First Wine Industry</div>
             <div className='text-[#636363]'>Hinva was the first wine company started in Nepal</div>
           </div>




           <div className='flex flex-col  gap-y-5 w-full sm:gap-y-2 sm:w-auto'>
             <div className='hidden sm:flex self-center mb-5 bg-white px-1'>
               1994
             </div>
             <img src={AboutusImage1} alt=""/>
             <div className='font-bold flex justify-between  w-full'>
               First Wine Industry
               <span className='sm:hidden'>2022</span>
             </div>
             <div className='text-[#636363]'>Hinva was the first wine company started in Nepal</div>
           </div>




           <div className='hidden  sm:flex flex-col w-[250px] gap-y-2 '>
             <div className=' self-center mb-15 bg-white px-1'>
               1994
             </div>
             <img src={AboutusImage1} alt="" width={248} />
             <div className='font-bold'>First Wine Industry</div>
             <div className='text-[#636363]'>Hinva was the first wine company started in Nepal</div>
           </div>
         </div>
       </div>




       {/* Second section */}
       <SecondSection images={[AboutusContainerImage, AboutusGardenImage, AboutusGlassImage]} />




       {/* Third Section */}


       <div className='flex flex-col-reverse sm:flex-row gap-x-5  items-center justify-center'>


         <div className='flex flex-col gap-4 flex-2 pt-5 '>
           <div className='flex '>


             <hr className=" self-center border-0 w-full h-px bg-[#636363] " />
             <hr className='w-1 border-4 rounded-2xl bg-[#636363]' />
           </div>




           <div className='font-satoshi text-lg  sm:pr-25  sm:tracking-wide'>
             At United Winery, we honor centuries-old winemaking traditions while embracing modern techniques to create wines  that are truly exceptional.
             Our passion for quality, sustainability, and innovation ensures every bottle tells a story of craftsmanship and care.
           </div>
         </div>


         <div className='text-center sm:text-left sm:flex-3 flex items-center justify-center font-melodrama-regular text-5xl font-bold'>
           Where Tradition Meets Innovation <br className='hidden sm:inline' />The Art Of WineMaking <br className='hidden sm:inline' />Redefined
         </div>


       </div>


       {/* Fourth Section */}
       <div className='relative '>


         {/* Pinned Map */}
         <div className='hidden sm:block absolute md:top-70 top-1/4 left-10 z-10  '>
           <img src={NepalPinnedMap} alt="" srcset="" />
         </div>


         {/* Main Texts part */}
         <div className="flex flex-col sm:w-10/12  items-center gap-4 ">
           <div className='font-melodrama-regular text-4xl'>
             Where Our Wines Travel
           </div>
           <div className='font-melodrama-regular text-4xl font-bold sm:ml-85 '>
             Distribution Channel
           </div>


           {/* Pinned Map in mobile screen */}
           <div className='sm:hidden '>
             <img src={NepalPinnedMap} alt="" srcset="" />
           </div>


           <div className='text-[#636363] lg:ml-100'>
             Delivering all across Nepal with our trusted distributors
           </div>


           <div className='flex gap-2 items-center sm:ml-30'>


             <div>
               JOIN US
             </div>
             <div>
               <img src={ArrowInsideCircle} alt="" srcset="" />
             </div>
           </div>
           {/* Distributors */}


           <div className='hidden lg:flex flex-col gap-8 mt-20 ml-auto '>
             <div className='font-melodrama-regular font-bold text-2xl'>
               Some of our Distributors
             </div>
             <div>
               <ul>
                 <li><span className='mr-1 text-[#636363]'>Paras Cold Store -</span>Birtamod</li>
                 <li><span className='mr-1 text-[#636363]'>Dinesh Enterprise -</span>Birtamod</li>
                 <li><span className='mr-1 text-[#636363]'>New Vision Enterprise -</span>Birtamod</li>


               </ul>
             </div>
           </div>
         </div>
       </div>






       {/* Last section */}


       <div className='flex flex-col gap-y-10 mt-50 '>
<div className='flex items-center'>


       <svg
           xmlns="http://www.w3.org/2000/svg"
           width="70"
           height="30"
           fill="none"
            viewBox="0 0 20 20"
           className='transform -rotate-90'
        
           >
           <path fill="#202019" d="M11.283 17.747c-.13.23-.317.42-.542.551a1.463 1.463 0 0 1-2.023-.55L.198 2.755a1.52 1.52 0 0 1 0-1.504c.13-.229.317-.419.542-.55C.965.568 1.22.5 1.48.5h17.04c.26 0 .515.07.74.201.225.132.412.322.542.55a1.52 1.52 0 0 1 0 1.505l-8.52 14.991"></path>
         </svg>


             <div className='font-melodrama-regular text-5xl'>
               Crafting Excellence,
             </div>
          
         <svg
           xmlns="http://www.w3.org/2000/svg"
           className='ml-auto  '
           width="70"
           height="70"
           fill="none"
         >
           <circle cx="40" cy="30" r="20" fill="#202019"></circle>
       
         </svg>
           </div>


{/* Second Eye Cropped Image Section */}
<div className='flex gap-x-10'>
 <div className='flex '>


<img src={AboutUsCroppedEyeWine} alt="" srcset="" width={500}/>
 </div>


<div className='flex  flex-col text-lg '>
<div className='flex justify-between'>


       <div className="flex gap-24 mb-5 max-w-screen">
         {/* Circle SVG */}
         <motion.svg
           xmlns="http://www.w3.org/2000/svg"
           className='relative bottom-[6px]'
           width="33"
           height="33"
           fill="none"
          
           >
           <circle cx="16.5" cy="16.5" r="9.5" fill="#202019"></circle>
           <circle cx="16.5" cy="2.5" r="2.5" fill="#202019"></circle>
         </motion.svg>


         {/* Triangle SVG */}
         <motion.svg
           xmlns="http://www.w3.org/2000/svg"
           width="20"
           height="19"
           fill="none"
           >
           <path fill="#202019" d="M11.283 17.747c-.13.23-.317.42-.542.551a1.463 1.463 0 0 1-2.023-.55L.198 2.755a1.52 1.52 0 0 1 0-1.504c.13-.229.317-.419.542-.55C.965.568 1.22.5 1.48.5h17.04c.26 0 .515.07.74.201.225.132.412.322.542.55a1.52 1.52 0 0 1 0 1.505l-8.52 14.991"></path>
         </motion.svg>


         {/* Square SVG */}
         <motion.svg
           xmlns="http://www.w3.org/2000/svg"
           width="18"
           height="19"
           fill="none"
          
           >
           <rect width="18" height="18" y="0.5" fill="#202019" rx="1"></rect>
         </motion.svg>


</div>
<div className='font-melodrama-regular text-5xl'>
One bottle at a time
</div>


           </div>
           <br/>
           This winery is built on a foundation of innovation and precision. Cutting-edge equipment and advanced techniques are seamlessly integrated with traditional winemaking practices to ensure every bottle meets the highest standards of quality.
           <br />
           The focus is on exploring new possibilities – from unique blends to refined processes – all while staying true to the artistry of winemaking. The result is a collection of wines that are not only consistent but also bold, distinctive, and unforgettable.
           </div>


</div>


{/* LinePoint Section */}
<div className='flex'>
<div className='flex w-1/4 items-center'>


<hr className="  border-0 w-10/12  h-px bg-[#636363] " />
<hr className='w-1 border-4 rounded-2xl bg-[#636363]' />
</div>
<div className='flex flex-col mt-15'>
<div className='font-melodrama-regular text-4xl '>
 Together, let us raise a glass to <br /> the future
 </div>


<div>
 where every sip tells a story of innovation, creativity, and endless possibilities
 </div>
</div>
</div>
       </div>
 
     </div>
   </div>




 )
}


export default Aboutuspage
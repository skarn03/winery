import React, { useEffect } from 'react';
import Header from '../../Components/Header/Header';
import './Galleryv5.css';
import {
    ArrowLeftGalleryIcon,
    ArrowRightGalleryIcon,
    GalleryBg,
    SampleImageJarCan,
    WineGlassTest3,
    WineTest,
} from "../../assets/Icons";
const Galleryv5 = () => {
    const slides = [
        {
            name: "Gallery Bg",
            description:
                "Imported Wine making tanks First in Nepal",
            imageUrl: GalleryBg,
        },
        {
            name: "Equipment",
            description: "Imported Wine making tanks First in Nepal",
            // imageUrl: "https://i.ibb.co/jrRb11q/img2.jpg",
            imageUrl: SampleImageJarCan,
        },
        {
            name: "Machinery",
            description:
                "High-efficiency juice extraction for wineries and breweries",
            imageUrl: "https://i.ibb.co/NSwVv8D/img3.jpg",
        },
        {
            name: "WineGlassTest3",
            description: "Ideal for aging and storing premium wines",
            imageUrl: WineGlassTest3,
        },
        {
            name: "Netherland",
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
            imageUrl: "https://i.ibb.co/jTQfmTq/img5.jpg",
        },
        {
            name: "Ireland",
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
            imageUrl: "https://i.ibb.co/qCkd9jS/img1.jpg",
        },
        {
            name: "Ireland2",
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
            imageUrl: "https://i.ibb.co/NSwVv8D/img4.jpg",
        },
        {
            name: "idx1",
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
            imageUrl: "https://i.ibb.co/RNkk6L0/img2.jpg",
        },
        {
            name: "idx2",
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
            imageUrl: "https://i.ibb.co/NSwVv8D/img3.jpg",
        },
    ];

    useEffect(() => {
        const nextBtn = document.querySelector(".next");
        const prevBtn = document.querySelector(".prev");

        const handleNext = () => {
            const items = document.querySelectorAll(".slider-item");
            document.querySelector(".slider-slide").appendChild(items[0]);
        };

        const handlePrev = () => {
            const items = document.querySelectorAll(".slider-item");
            document.querySelector(".slider-slide").prepend(items[items.length - 1]);
        };

        nextBtn?.addEventListener("click", handleNext);
        prevBtn?.addEventListener("click", handlePrev);

        return () => {
            nextBtn?.removeEventListener("click", handleNext);
            prevBtn?.removeEventListener("click", handlePrev);
        };
    }, []);

    return (
        <div className=' h-screen max-h-screen overflow-hidden'>
            {/* Header */}
            <div className='px-2'>
                <Header />
            </div>
            {/* slider */}
            <div className='px-6'>
                {/* slider container */}
                <div className='slider-container'>
                    {/* Buttons */}
                    <div className='flex'>
                        <div className='flex-[50%]'/>

                        <div className="flex gap-x-4 flex-[47%]  py-16 px-3">
                            <div className="min-w-[120px] sm:min-w-[120px] md:min-w-[140px] lg:min-w-[160px] py-3 border flex justify-center items-center bg-[#1C272C] text-[#fff] rounded-2xl transition-all duration-300  text-[16px] sm:text-[16px] md:text-[18px] lg:text-[24px]">
                                <button>Photos</button>
                            </div>
                            <div className="min-w-[120px] sm:min-w-[120px] md:min-w-[140px] lg:min-w-[160px] py-3 border flex justify-center items-center bg-[#1C272C] text-[#fff] rounded-2xl transition-all duration-300 text-[16px] sm:text-[16px] md:text-[18px] lg:text-[24px]">
                                <button>Videos</button>
                            </div>
                        </div>
                    </div>

                    {/* slider slides */}
                    <div className='slider-slide'>
                        {
                            slides.map((slide, index) => {
                                return (
                                    <div
                                        className='slider-item'
                                        style={{
                                            backgroundImage: `url(${slide.imageUrl})`
                                        }}
                                        key={index}
                                    >
                                        {/* Slider content */}
                                        <div className='slider-content'>
                                            {/* slider name */}
                                            <div className='slider-name'>
                                                {slide.name}
                                            </div>
                                            {/* slider description */}
                                            <div className='slider-des'>
                                                {slide.description}
                                            </div>
                                            {/* slider button */}

                                            <div className='slider-button-button border '>
                                                See More
                                            </div>

                                        </div>

                                    </div>);
                            })
                        }
                    </div>

                    {/*slider navitation  */}
                    <div className='slider-navigation-button '>
                        <button className='prev text-white'>
                            {"<"}
                        </button>
                        <button className='next text-white'>
                            {">"}
                        </button>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Galleryv5;
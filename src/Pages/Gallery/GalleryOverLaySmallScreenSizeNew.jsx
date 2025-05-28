import './GalleryOverLaySmallScreenSizeNew.css';
import {
    ArrowLeftGalleryIcon,
    ArrowLeftIconGallery,
    ArrowRightIconGallery,
    GalleryBg,
    SampleImageJarCan,
    WineGlassTest3,
} from "../../assets/Icons";
import { useEffect } from 'react';
const GalleryOverLaySmallScreenSizeNew = () => {
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
            const items = document.querySelectorAll(".slider-item-overlay");
            document.querySelector(".slider-slide-overlay").appendChild(items[0]);
        };

        const handlePrev = () => {
            const items = document.querySelectorAll(".slider-item-overlay");
            document.querySelector(".slider-slide-overlay").prepend(items[items.length - 1]);
        };

        nextBtn?.addEventListener("click", handleNext);
        prevBtn?.addEventListener("click", handlePrev);

        return () => {
            nextBtn?.removeEventListener("click", handleNext);
            prevBtn?.removeEventListener("click", handlePrev);
        };
    }, []);

    return (
        <div className='px-6 bg-black'>
            {/* slider container */}
            <div className='slider-container-overlay bg-black'>

                {/* slider slides */}
                <div className='slider-slide-overlay bg-black'>
                    {
                        slides.map((slide, index) => {
                            return (
                                <div
                                    className='slider-item-overlay bg-black'
                                    style={{
                                        backgroundImage: `url(${slide.imageUrl})`
                                    }}
                                    key={index}
                                >
                                    {/* Slider content */}
                                    <div className='slider-content-overlay '>
                                        {/* slider name */}
                                        <div className='slider-name-overlay'>
                                            {slide.name}
                                        </div>
                                        {/* slider description */}
                                        <div className='slider-des-overlay'>
                                            {slide.description}
                                        </div>
                                        {/* slider button */}

                                        <div className='slider-button-button-overlay border '>
                                            See More
                                        </div>

                                    </div>

                                </div>);
                        })
                    }
                </div>

                {/*slider navitation  */}
                <div className='slider-navigation-button-overlay'>
                    <button className="transition-transform transform hover:scale-105 ">
                        <img className='prev text-white' src={ArrowLeftIconGallery} alt='<' />
                    </button>
                    <button className="transition-transform transform hover:scale-105">
                        <img className='next text-white' src={ArrowRightIconGallery} alt='>' />
                    </button>
                </div>
            </div>
        </div>

    );
};

export default GalleryOverLaySmallScreenSizeNew;
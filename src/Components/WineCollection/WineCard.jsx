
import './WineCard.css';
import { ArrowIconRightv1, Wine } from "../../assets/Icons";
import { useEffect, useRef, useState } from 'react';

const WineCard = () => {
    const [isHovered, setIsHovered] = useState(false);
    const descriptionRef = useRef(null);
    const [maxHeight, setMaxHeight] = useState("0px");
    useEffect(() => {
        if (descriptionRef.current) {
            setMaxHeight(
                isHovered ? `${descriptionRef.current.scrollHeight}px` : "0px"
            );
        }
    }, [isHovered]);
    return (
        <div
            className="py-4 wine-card bg-white rounded-2xl overflow-hidden shadow-md border border-gray-400 flex flex-col cursor-pointer w-[350px] sm:w-[350px] md:w-[400px] lg:w-[400px] h-[450px] sm:h-[450px] md:h-[500px] lg:h-[500px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Util section */}
            <div
                className={`transition-[flex] duration-500 ease-in-out ${isHovered ? "flex-[0%]" : "flex-[5%]"
                    }`}
            />

            {/* Image section */}
            <div className='flex justify-center'>
                <img className='wine-card-image h-[270px] sm:h-[270px] md:h-[300px] lg:h-[300px]' src={Wine} alt='wine' />
            </div>
            {/* Util section */}
            <div
                className={`transition-[flex] duration-500 ease-in-out ${isHovered ? "flex-[0%]" : "flex-[5%]"
                    }`}
            />

            {/* Button sections */}
            <div className='overflow-hidden transition-all duration-500 ease-in-out px-4 wine-card-button'
                style={{ maxHeight: isHovered ? "0px" : '60px' }}
            >
                <div className='border w-full flex justify-between items-center px-4 py-2 bg-[#2E2E2E] rounded-2xl'>
                    <div>
                        <span className='text-[#CDCDCD]'>Rising Royals Wine</span>
                    </div>
                    <div className='bg-white w-[40px] h-[40px] flex rounded-full justify-center items-center'>
                        <img src={ArrowIconRightv1} alt='->' className='size-8' />
                    </div>
                </div>
            </div>

            {/* Description section collapsable  */}
            <div
                ref={descriptionRef}
                style={{ maxHeight: maxHeight, height: maxHeight }}
                className='overflow-hidden transition-all duration-500 ease-in-out px-4 relative'
            >
                {/* description text */}
                <div className={`bg-[#2E2E2E] text-[#CDCDCD] rounded-3xl py-2 mt-2 transition-all duration-500 ease-in-out px-4 ${isHovered
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                    }`}>
                    <div>
                        <div className="flex justify-between text-sm py-2">
                            <div className='font-bold'>Rising Royals White Wine</div>
                            <div className='font-bold'>$ 24.99</div>
                        </div>
                        <div className='py-4'>
                            <div className="text-xs">
                                Symphony of bold flavors,deep aromas,
                                <br />
                                and timeless elegance,
                                <br />
                                crafted to awaken the senses and warm the soul
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default WineCard;
import glassImage from './tabler_glass-full-filled.svg'

export default function RaiseGlass() {
    return (
        <div 
            className="mt-[4vw] sm:mt-[6vw] md:mt-[64.8px] lg:mt-[90px] mx-auto md:ml-[8%] 
                    min-w-[130px] w-[31.01%] aspect-[4.05/1] border-[1px] border-white 
                    py-[1vw] md:py-[11.52px] lg:py-[16px] mb-[8%] md:mb-[0]
                    flex items-center justify-evenly"
        >  
            <p 
                className="font-alegreya 
                    text-[clamp(12px,2vw,18px)] leading-[1] flex items-center 
                    justify-center text-white whitespace-nowrap md:text-[clamp(10px,1.5vw,14px)] lg:text-[clamp(12px,2vw,18px)] leading-[1]"
            >
                RAISE A GLASS
            </p>

            <img src={glassImage} 
                className='w-[clamp(16px,3vw,24px)] h-[clamp(16px,3vw,24px)] lg:w-[clamp(16px,3vw,24px)] lg:h-[clamp(16px,3vw,24px)] md:w-[clamp(12px,2vw,18px)] md:h-[clamp(12px,2vw,18px)]'/>
        </div>
    )
}
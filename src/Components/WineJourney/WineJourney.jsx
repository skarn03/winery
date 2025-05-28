import wineJourneyImage from './winejourney.png';
import FromCrushToPour from '../FromCrushToPour/FromCrushToPour';

export default function WineJourney() {
  return (
    <div>
      <div className="relative h-[697px]">  
        <div className="w-[657px] h-[65px] ml-[3.6%]">
          <h1 className="font-alegreya font-bold text-[#CF9A07] text-[48px] leading-[100%] tracking-[0%]">
            Every bottle of wine is a journey -
          </h1>
        </div>

          <div className="w-[657px] h-[66px] mt-[32px] ml-[3.6%]">
            <p className="font-alegreya text-[24px] leading-[100%] tracking-[0%] text-[#4A3B0A]">
              A story of sun-drenched vineyards, generations of craftsmanship, and the perfect balance of art and science.
            </p>
          </div>

          <div className="w-[657px] h-[66px] mt-[24px] ml-[3.6%]">
            <p className="font-alegreya font-normal text-[24px] leading-[100%] tracking-[0%] text-[#4A3B0A]">
              —where the land’s essence meets human passion, and every bottle becomes a timeless celebration of flavor, heritage, and joy.
            </p>
        </div>
        
        <div className="w-full h-[560px] absolute top-[137px]">
          <img
            className="w-full h-full"
            src={wineJourneyImage}
            alt="Wine vineyard landscape"
          />
        </div>
      </div>
    </div>
    
  );
}

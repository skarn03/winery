import React from 'react'
import ImageAnimation from '../AboutUsAnimationImage/index'

const index = () => {
  return (
    <div className='flex justify-between'>
    
    {/* Left Most division */}
    
     <div className='flex flex-col max-w-[510px]'>
    
     <div className='text-4xl'>The Art of Winemaking</div>
        <div className='text-4xl font-bold self-end'>From Vine To Bottle</div>
    
      <div className='flex gap-x-5'>
    <div>  <img src={ArrowInsideCircle} alt="" srcset="" /></div>
    
    <div className='flex flex-col gap-3'>
      <span className='text-2xl'>
        Vineyard
        International Wine Making Equipments
        Class Aging and Bottling
        </span>
    <div className='text-[#636363]'>
        From the lush vineyards, Every ounce of grapes are the essence of wine.
        Imported straight from  the European Market, Never Seen Before In Nepal
        Every Bottle is MasterPiece, crafted with care and presented with elegance
      </div>
    </div>
      </div>
    
    
      </div> 
    
      {/* Right Most division(image part)) */}
      <div className=' flex gap-x-4'>
      <ImageAnimation images={[AboutusGardenImage,AboutusContainerImage,AboutusGlassImage]}/>
    
      </div>
    </div>
  )
}

export default index
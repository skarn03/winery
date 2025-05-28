import React from 'react'

const index = ({position}) => {
  return (
    <div className={`relative flex flex-col h-[264px] w-[280px] self-${position} text-white rounded-3xl bg-[#CF9A07]`}>
    <div className='absolute -top-4 self-center border-2 border-white bg-white h-6 w-6 rounded-full p-0.5'>
    <div className=' border-2 border-[#CF9A07] bg-[#CF9A07] h-4 w-4 rounded-full'></div>
    </div>
    {/* Member Detail */}
    <div className='p-2 ml-2'>
    
    <span className='text-2xl font-bold '>Bishal Shrestha</span><br />
    
    <span className='text-[12px]'>Founder</span><br />
    </div>
    <div className='h-[184px] w-[270px] m-auto bg-white border-0 rounded-3xl'>
    </div>
    </div>
      )
}

export default index
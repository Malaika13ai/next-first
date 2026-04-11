"use client"
import Button from '@/src/components/Button'
import Ratings from '@/src/components/Ratings'
import Image from 'next/image'
import React from 'react'

function Trusty() {
  return (

    <div className='xl:mx-34 lg:mx-25 mx-auto md:mx-15 bg-[#05442E] rounded-2xl sm:pl-15 sm:pr-9 px-5 md:pt-5 pt-10 flex md:justify-between gap-5 md:gap-0 md:flex-row flex-col items-center md:w-[80%] w-[90%] min-h-[320px] lg:h-83 relative z-20  mb-10'>
      
      <div className="z-10">
        <p className='font-semibold xl:text-[32px] lg:text-[28px] sm:text-[28px] md:text-[24px] text-[22px] text-center md:text-left text-[#FFFFFF] mb-2 xl:w-125 lg:w-100 md:w-70 leading-tight'>
          We Provide Trusty Feedback You Can Rely On
        </p>
        <p className='font-normal xl:text-[16px] lg:text-[14px] md:text-[12px] text-[12px] sm:text-[14px] text-[#FFFFFF] text-center md:text-left mb-5.5 leading-[1.3] xl:w-130 lg:w-100 md:w-70'>
          We’re a review platform accessible to all. Our vision is to become a global symbol of trust, empowering consumers to shop confidently while helping businesses grow and improve.
        </p>
        <div className="flex justify-center md:justify-start">
           <Button 
            btnStyle="px-6.25 rounded-[100px] font-semibold h-[53px] bg-[#04DA8D] text-[16px]"
            btnText="More About Us"
          />
        </div>
      </div>

      <div className='relative'>
        <Image src="/man.png" alt="man" height={500} width={500} className='xl:h-88 xl:w-70 h-75 w-61 relative z-10'/>
        <div className='rounded-full bg-[#0D5D41] xl:w-70 xl:h-67 lg:w-60 lg:h-60 absolute z-0 top-15'/>
        <Image src="/Vector.png" alt="arrow-twist" height={79} width={73} className='absolute xl:top-35 xl:right-70 md:top-30 md:right-55 md:w-15 md:h-16 lg:w-18 lg:h-20 z-20'/>
        
        <div className='bg-white rounded-xl p-3.5 absolute lg:top-3 lg:right-55 md:top-0 md:right-50 xl:w-44.5 lg:w-35 md:w-30 z-20'>
          <div className='flex gap-2 mb-0.5 items-center md:w-25 w-30 xl:w-40'>
            <Image src="/elipse.png" height={36} width={36} alt="elipse" />
            <p className='font-medium text-[14px] md:text-[12px] lg:text-[14px] text-[#000000] w-25'>How was your order?</p>
          </div>
          <p className='text-[#17253F]/50 lg:text-[14px] text-[14px] md:text-[12px] mb-0.5'>Give us a review</p>
          <Ratings starStyle='text-[#FFFFFF] bg-[#00B57A]/50 p-0.5'/>
        </div>

        <div className='rounded-4xl bg-[#04DA8D] px-5 py-2.5 absolute top-15 -right-5 z-20'>
          <p className='text-[10px] text-[#17253F] font-medium mb-1'>It was Delicious!</p>
          <Ratings starStyle='text-[#FFFFFF] bg-[#17253F] p-0.5'/>
        </div>
      </div>
    </div>
  )
}

export default Trusty;
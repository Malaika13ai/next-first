import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'

function Feedback() {
  return (
    <div className='mx-7.5 bg-[#05442E] xl:px-34 lg:px-24 md:px-15 px-6 mb-3 pt-40 md:pt-75 pb-15 flex justify-between flex-col md:flex-row items-center gap-10 xl:gap-0 rounded-2xl'>
       <Image src="/ring.png" height={400} width={400} alt="ring" className='xl:w-100 xl:h-100 lg:w-90 lg:h-80 md:w-70 md:h-65'/>
            <div className='flex items-center flex-col md:items-start'>
        <p className="font-semibold text-[32px] md:text-[24px] lg:text-[32px] text-[#FFFFFF] mb-4 xl:w-125 lg:w-110 md:w-80 leading-tight text-center md:text-left">
       We're Trustyfeedback, Committed to Growing Your Business!
        </p>
        <p className="font-normal text-[16px] md:text-[14px] lg:text-[16px] text-[#FFFFFF] mb-7 leading-[1.3] xl:w-125 lg:w-110 md:w-80 text-center md:text-left">
      At Trustyfeedback, our mission is to help your business thrive through genuine, trusted reviews from real customers. We connect you with authentic feedback that builds credibility, drives improvement, and enhances your reputation.
        </p>
        <Button
          btnStyle="px-6.25 rounded-[100px] font-semibold h-[53px] text-[#17253F] bg-[#04DA8D] text-[16px] "
          btnText="Get Started"
        />
      </div>
    </div>
  )
}

export default Feedback
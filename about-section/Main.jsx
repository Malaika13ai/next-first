"use client"
import Image from 'next/image'
import React from 'react'

function Main() {
  return (
  
    <div className='relative bg-[url("/default.png")] flex flex-col items-center pt-32 md:pt-50 px-6 lg:px-40 bg-white'>
      
  
      <p className='font-semibold xl:text-[45px] lg:text-[41px] md:text-[35px] text-[28px] text-center leading-[1.3] max-w-225 text-[#17253F] mb-10'>
        Trusty Feedback connects people with great local businesses.
      </p>


      <div className='flex flex-col md:flex-row justify-between items-center w-full gap-6 md:gap-20 mb-10'>
        <p className='text-[24px] md:text-[32px] font-semibold leading-[1.3] text-[#17253F] '>
          Meet Our Founder & CEO
        </p>
        <p className='text-[14px] md:text-[16px] lg:w-135 md:w-80 leading-[1.6] text-[#17253F]'>
          Our vision is to become the universal symbol of trust, empowering consumers to make confident, informed buying decisions while allowing businesses to credibly signal the quality of their services and to gain actionable insights to improve them.
        </p>
      </div>

 
      <div className='lg:w-full w-[80%] relative z-20 -mb-20 md:-mb-60'>
        <Image 
          src="/CEO.png" 
          alt="CEO" 
          height={600} 
          width={1200} 
          className='w-full h-auto object-cover rounded-2xl shadow-lg'
          priority
        />
      </div>
    </div>
  )
}

export default Main
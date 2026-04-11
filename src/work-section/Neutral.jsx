import Image from 'next/image'
import React from 'react'

function Neutral() {
  return (
 
    <div className='px-6 md:px-20 lg:px-45 bg-[#FFFFFF] pt-20 pb-20 lg:pt-30 lg:pb-40 flex flex-col md:flex-row justify-between w-full items-center gap-10'>
    
        <div className="text-center md:text-left">
            <h2 className='font-semibold text-[28px] md:text-[32px] text-[#17253F] mb-4 leading-tight'>
                A neutral space for dialogue and collaboration
            </h2>
            
     
            <p className='text-[16px] text-[#17253F] mb-6 leading-[1.6] max-w-120 mx-auto lg:mx-0'>
                "We're open to all. We believe this is the best way to help consumers make informed decisions when buying products and services."
            </p>
            
            <p className='font-semibold text-[16px] text-[#17253F]'>
                Ben Martin <span className="block lg:inline font-normal lg:font-semibold">Director of Privacy</span>
            </p>
        </div>

      
        <div className="w-full max-w-100">
            <Image 
                src="/voice.png" 
                alt="neutral" 
                height={440} 
                width={480}
                className="w-full h-auto object-contain"
                priority
            />
        </div>
    </div>
  )
}

export default Neutral
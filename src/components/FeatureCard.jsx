"use client"
import Image from 'next/image';
import React from 'react'

const FeatureCard = ({ title, description}) => {
    return (
        <div className="bg-[#FFFFFF]  rounded-4xl px-6 pt-5 pb-10">
          
            
             <div className='flex gap-4 items-center mb-2'>
                   <Image src="/comp.png" height={40} width={40} alt="comp"/>
                
                
          
                    <h3 className="font-bold text-[#17253F] text-[18px]">
                        {title}
                    </h3>
                    </div>
                    <p className="text-[#000000] text-[15px] leading-[1.3]">
                        {description}
                    </p>
            
          
        </div>
    )
}

export default FeatureCard;
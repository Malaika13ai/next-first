"use client"
import Image from 'next/image';
import React from 'react'
import { FaArrowRight } from 'react-icons/fa';

const InfoCard = ({ index,type, description,cardIcon }) => {
 
    return (
     <div className='w-full bg-[#EFF3F7] rounded-2xl px-4 pt-4 pb-7 text-left h-full'>
    
          <div className='bg-[#FFFFFF] border border-[#17253F33] rounded-xl flex justify-center items-center h-22.5 mb-4 px-4 gap-3'>
    
            <div className={`${index%2 !== 0 ? "h-9 w-9 " : "h-8.25 w-12.5"} shrink-0 flex items-center justify-center`} >
              <Image
                src={cardIcon} 
                alt="icon" 
                width={50} 
                height={33} 
                className="object-contain max-h-full"
              />
            </div>
            
            <p className='font-bold text-[#17253F] md:text-[20px] text-[24px] lg:text-[24px] '>
              {type}
            </p>
          </div>
    
       
            <p className='mb-2 text-[14px] leading-[1.4] text-[#000000] '>
              {description }
            </p>
    
          <div className='flex gap-1.5 items-center cursor-pointer '>
            <p className='font-bold text-[15px] text-[#17253F]'>View Details</p>
            <FaArrowRight size={12} className='text-[#17253F]' />
          </div>
        </div>
    )
}

export default InfoCard;
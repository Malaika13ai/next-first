import React from 'react'
import Image from 'next/image'
import Ratings from './Ratings'
import { FaArrowRight } from "react-icons/fa";

function Card({ cardIcon, cardText, cardHead, index,cardStyle,topStyle }) {
  return (
    <div className={cardStyle}>

      <div className={topStyle}>

        <div className={`${index%2 !== 0 ? "h-9 w-9 " : "h-8.25 w-12.5"} shrink-0 flex items-center justify-center`} >
          <Image 
            src={cardIcon} 
            alt="icon" 
            width={50} 
            height={33} 
            className="object-contain max-h-full"
          />
        </div>
        
        <p className='font-bold text-[#17253F] text-[24px] '>
          {cardText}
        </p>
      </div>

   
      <div className='flex gap-2 items-center mb-1'>
        <p className='font-bold text-[18px] text-[#000000] '>
          {cardHead}
        </p>
        <div className="shrink-0">
          <Image src="/FlatColor.png" height={16} width={16} alt="flat" />
        </div>
      </div>

      <p className='font-normal text-[14px] text-[#000000]/50 mb-3'>
        www.businesstoolkit.com
      </p>

      <div className='flex gap-2 items-center mb-4'>
        <Ratings starStyle='text-[#FFFFFF] bg-[#00B57A] p-0.5'/>
        <p className='font-normal text-[12px] text-[#000000]'>
          4.9/5.0 <span className='opacity-50'>(7891)</span>
        </p>
      </div>

      <div className='flex gap-1.5 items-center cursor-pointer '>
        <p className='font-bold text-[15px] text-[#17253F]'>View Details</p>
        <FaArrowRight size={12} className='text-[#17253F]' />
      </div>
    </div>
  )
}

export default Card








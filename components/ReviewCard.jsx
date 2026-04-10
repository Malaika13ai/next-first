import Image from 'next/image';
import React from 'react'
import { FaCalendar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
function ReviewCard({reviewImg, reviewText,cardStyle}) {
  return (
        <div className={cardStyle}>
                     <Image src={reviewImg} alt="scam" height={500} width={500} className='w-full rounded-xl'/>
                     <div className='flex gap-2'>
                     <div className='rounded-4xl bg-[#FFFFFF] px-3.5 py-2.5 w-40 mt-3 text-[12px] mb-2 '>Review Matters</div>
                                        <div className='rounded-4xl bg-[#FFFFFF] px-3.5 py-2.5  w-42 mt-3 text-[12px] mb-2 flex items-center gap-1'><FaCalendar />
                                          <p>July 30, 2024</p>
</div>

                     </div>
                     <p className='text-[16px] font-semibold mb-2'>{reviewText}</p>
                     <p className='text-[14px] mb-3 text-[#252525CC]'>The prevalence of influencers in our</p>
                     <div className='flex items-center gap-2'>
                        <span className='text-[16px] font-semibold text-[#04DA8D]'>Read Article</span>
                        <span><FaArrowRight className='w-2.75 h-3.25 text-[#04DA8D]'/></span>
                     </div>
                    </div>
  )
}

export default ReviewCard
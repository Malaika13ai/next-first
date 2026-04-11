import BlogCard from '@/src/components/BlogCard';
import Image from 'next/image';
import React from 'react'
import { FaArrowRight } from "react-icons/fa";
function Perspective() {
    const blogData = [
        {
            blogImage:"/hacker.png",
            blogHead:"Romance scams: Spot the signs",
        
        },
           {
            blogImage:"/close-up.png",
            blogHead:"Holiday hoaxes: How scammers take advantage of the holiday.",
            
        },
           {
            blogImage:"/gift.png",
            blogHead:"Gift card scams: What to look out for and how to avoid them",
            
        },
    ]
  return (
        <div className='relative bg-[url("/default.png")] flex flex-col items-center pt-32 md:pt-50 px-6 lg:px-40 md:px-22 bg-white'>
     <p className='font-semibold xl:text-[45px] lg:text-[41px] md:text-[35px] text-[28px] text-center leading-[1.3] max-w-225 text-[#17253F] mb-10'>
     Fresh Perspectives & Expert Advice
      </p>
       <div className='mt-6 mb-5 flex justify-between items-center w-full flex-col sm:flex-row'>
              <p className='font-semibold md:text-[38px] sm:text-[30px] text-[26px]'>Trends in Trust</p>
          <button className='flex items-center py-3.75 px-6.25 gap-1 text-[18px] font-medium border border-[#04DA8D] rounded-4xl h-10.75'>See More <FaArrowRight className='w-2.75 h-3.25 text-[#17253F]'/></button>
            </div>

            <div className='flex flex-col md:flex-row w-full gap-6'>
                <div className='bg-[#EFF3F7] px-4 pt-4 pb-10 md:w-[48%] w-full rounded-xl '>
                 <Image src="/scam.png" alt="scam" height={500} width={500} className='w-full rounded-xl'/>
                 <div className='rounded-4xl bg-[#FFFFFF] px-4.5 py-3 w-38 mt-3 text-[16px] mb-2'>Trends in Trust</div>
                 <p className='text-[22px] font-semibold mb-2'>Quarterly bug fixes and feature releases</p>
                 <p className='text-[16px] mb-3'>At Trustpilot we’re committed to continually improving our platform to better serve your needs. As part of our wider</p>
                 <div className='flex items-center gap-2'>
                    <span className='text-[16px] font-semibold text-[#17253F]'>Read Article</span>
                    <span><FaArrowRight className='w-2.75 h-3.25 text-[#17253F]'/></span>
                 </div>
                </div>

                <div className='md:w-[48%] w-full flex flex-col gap-4'>
                 {blogData.map((item,index)=>(
                    <BlogCard blogImage={item.blogImage} blogHead={item.blogHead} key={index}/>
                 ))}
                </div>
            </div>
</div>
  )
}

export default Perspective
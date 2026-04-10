"use client"
import Ratings from '@/components/Ratings'
import SearchBar from '@/components/SearchBar'
import Image from 'next/image'
import React, { useState } from 'react'
  import { FaStar, FaCamera, FaArrowRight } from 'react-icons/fa';
function page() {
  const [rating, setRating] = useState(0);
const stars = Array(5).fill(0);
  return (
      <div className='pb-8 flex items-center px-6 md:px-20 lg:px-10 xl:px-45 flex-col pt-50'>
       <p className="font-semibold text-[38px] text-center text-[#17253F] mb-8 leading-tight ">
        Write a Review on Products & Services
        </p>
 
        <SearchBar searchText="Categories" />
        <div className='flex w-full mt-12'>
<div className='w-[50%] bg-[#05442E] pt-20 px-9 rounded-tl-2xl rounded-bl-2xl flex flex-col items-center justify-between '>
<div>
    <p className='text-[16px] text-[#FFFFFF] text-center'>Can't Wait to Read Your Thoughts!</p>
    <p className='font-bold text-[28px] text-[#FFFFFF] text-center w-98'>Select a Company & Contribute Your Feedback Today!</p>
    </div>
        <div className='relative '>
            <Image src="/man.png" alt="man" height={500} width={500} className='xl:h-88 xl:w-70 h-75 w-61 relative z-10'/>

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
<div className='w-[50%] bg-[#EFF3F7]  pt-20 px-9 pb-10 rounded-tr-2xl rounded-br-2xl '>
  

      <div className="mb-6">
        <label className="block text-[#1E293B] font-semibold mb-2">
          Title of your review<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="Summarize your review in few words"
          className="w-full p-4 rounded-2xl border border-gray-200 outline-none placeholder:text-[12px] focus:ring-2 focus:ring-blue-500 bg-white"
        />
      </div>

  
      <div className="mb-6">
        <label className="block text-[#1E293B] font-semibold mb-2">
          Write Review<span className="text-red-500">*</span>
        </label>
        <textarea
          rows="5"
          placeholder="Enter comments"
          className="w-full p-4 h-15  rounded-2xl border border-gray-200 outline-none focus:ring-2 placeholder:text-[12px] focus:ring-blue-500 bg-white resize-none"
        ></textarea>
      </div>


      <div className="mb-8">
        <label className="block text-[#1E293B] font-semibold mb-4">How do you rate?</label>
      <div className='flex gap-0.5'>
      {stars.map((_, index) => {
        const starValue = index + 1;
        
    
        const isActive = starValue <= rating;

        return (
          <div
            key={index}
            onClick={() => setRating(starValue)}
      
            className={`
              bg-[#00B57A] w-6 h-6 p-0.5
              flex items-center justify-center transition-all duration-200
              ${isActive ? 'opacity-100 text-[#000000]' : 'opacity-30 text-[#FFFFFF]'}
            `}
          >
            <Image
              src="/Subtract.png"
              height={13}
              width={13}
              className="w-full h-full object-contain"
              alt="star"
            />
          </div>
        )
      })}
    </div>
                
      </div>

      <hr className="border-gray-200 mb-8" />

      <div className="mb-10">
        <label className="block text-[#1E293B] font-semibold mb-4">
          Add Photos <span className="text-gray-400 font-normal">(Optional)</span>
          <span className="text-red-900">*</span>
        </label>
        <div className="flex gap-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="p-5 border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center text-gray-400 bg-white cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <FaCamera size={24} />
            </div>
          ))}
        </div>
      </div>

  
      <button className="w-full bg-[#17253F] text-white pt-2 pb-2 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#0F1A2D] transition-all">
        Submit Review <FaArrowRight size={16} />
      </button>
    </div>
    </div>
</div>
                
  )
}

export default page
import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function page() {
  return (
      <div className='pb-8 flex items-center px-6 md:px-20 lg:px-10 xl:px-45 flex-col pt-50'>
        <p className='text-[16px] text-center mb2'>Log In Now</p>
       <p className="font-semibold text-[38px] text-center text-[#17253F] mb-8 leading-tight ">
        Read. Write. Discover.
        </p>
 
  
        <div className='flex w-full mt-12'>
<div className='w-[50%] relative bg-[#05442E] pt-20 px-9 rounded-tl-2xl rounded-bl-2xl flex flex-col items-center justify-between '>
<div>
   <p className='font-bold text-[28px] text-[#FFFFFF] text-center w-98'>Be Part of the Millions Giving Feedback Daily!</p>
               <Image src="/Vector.png" alt="arrow-twist" height={79} width={73} className='absolute top-100 left-70 lg:w-18 lg:h-20 z-20'/>

    </div>

</div>
<div className='w-[50%] bg-[#EFF3F7]  pt-20 px-9 pb-10 rounded-tr-2xl rounded-br-2xl '>
  
            <p className="font-semibold text-[30px] text-center mb-8 leading-tight ">
        Log in or sign up below
        </p>
 
 <div className='flex gap-2'>
    <div className='bg-[#FFFF] rounded-2xl border border-gray-200 px-9 py-4'>
               <Image src="/gl.png" alt="google" height={79} width={73} className='w-6.5 h-6.5 '/>

    </div>
       <div className='bg-blue-500 rounded-2xl border border-gray-200 px-9 py-4'>
               <Image src="/fb-logo.png" alt="google" height={79} width={73} className='w-6.5 6-7.5 '/>

    </div>
       <div className='bg-gray-900 rounded-2xl border border-gray-200 px-9 py-4'>
               <Image src="/apple-logo.png" alt="google" height={79} width={73} className='w-6.5 h-6.5 '/>

    </div>
 </div>


<p className='text-[16px] flex items-center mt-4 mb-4 gap-3'><span className='border border-gray-200 w-full'></span>OR<span className='border border-gray-200 w-full mr-2'></span></p>

 <div className="mb-6">
        <label className="block text-[#1E293B] font-semibold mb-2">
          Enter Email Address<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="name@gmail.com"
          className="w-full p-4 rounded-full border border-gray-200 outline-none placeholder:text-[12px]  bg-white"
        />
      </div>

        <button className="w-full bg-[#17253F] text-white p-4 rounded-full font-bold text-[14px] flex items-center justify-center gap-2 hover:bg-[#0F1A2D] transition-all">
        Continue with email <FaArrowRight size={16} />
      </button>
</div>
    </div>
</div>
                
  )
}



export default page
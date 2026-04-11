"use client"
import Button from "@/src/components/Button";
import Ratings from "@/src/components/Ratings";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Business() {
  return (
    <div className="mx-7 bg-[#17253F]  rounded-2xl px-34 py-20 flex justify-center gap-14 items-center   flex-col md:flex-row">
      <div>
        <p className="font-semibold text-center md:text-left sm:text-[32px] lg:text-[28px] xl:text-[32px] text-[24px] text-[#FFFFFF] mb-4 xl:w-125 lg:w-110 w-80 sm:w-100 leading-tight">
          Own a Business? Sign Up Now & Gain Genuine Reviews!
        </p>
        <p className="font-normal text-center md:text-left xl:text-[16px] text-[14px] sm:text-[16px] md:text-[14px] text-[#FFFFFF] mb-7 leading-[1.3] xl:w-130 lg:w-110 w-80 sm:w-100">
          Register with us to build trust through authentic reviews. Showcase
          your services, engage with your audience, and grow your reputation
          with real feedback.
        </p>
        <Button
          btnStyle="px-6.25 rounded-[100px] font-semibold h-[53px] text-[#17253F] bg-[#04DA8D] text-[16px] "
          btnText="Get Started"
        />
      </div>

      <div className="relative">
        <Image src="/business.png" height={371} width={360} alt="business" className="xl:w-85 xl:h-92 lg:w-80 lg:h-80 w-70 h-70 md:w-65 md:h-65 sm:w-90 sm:h-92"/>

        <div className="absolute top-15 -right-26 bg-[#FFFFFF] rounded-2xl px-3 pt-2 pb-4 text-left xl:w-45 lg:w-41 sm:w-45 md:w-35 w-32 shadow-xl ">
          
          <div className="bg-[#EFF3F7] border border-[#17253F33] rounded-xl flex justify-center items-center h-22.5 mb-2 px-4 gap-3">
           
          </div>

       
          <div className='flex gap-2 items-center mb-0.5'>
            <p className='font-bold text-[12px] sm:text-[14px] md:text-[12px lg:text-[14px]] text-[#000000]'>
              Your Business
            </p>
            <div className="shrink-0">
              <Image src="/FlatColor.png" height={16} width={16} alt="flat" />
            </div>
          </div>

          <p className='font-normal text-[12px] text-[#000000]/50 mb-2'>
            www.businesstoolkit.com
          </p>

          <div className='flex gap-2 items-center mb-2'>
            <Ratings starStyle='text-[#FFFFFF] bg-[#00B57A] p-0.5'/>
            <p className='font-normal text-[10px] text-[#000000]'>
              4.9/5.0 <span className='opacity-50'>(7891)</span>
            </p>
          </div>

          <div className='flex gap-1.5 items-center cursor-pointer'>
            <p className='font-bold text-[11px] text-[#17253F]'>Register Now</p>
            <FaArrowRight size={12} className='text-[#17253F]' />
          </div>
        </div>

        <div className="bg-[#FFFFFF] rounded-[69px] lxl:px-5.5 xl:py-4 px-2 py-2 flex gap-2 items-center absolute bottom-13 -left-22">
            <Image src="/medal.png" alt="medal" height={35} width={35}/>
            <div>
                <p className="lg:text-[20px] text-[16px] sm:text-[20px] md:text-[14px] text-[#04DA8D] font-bold">Top Rated</p>
                <p className="lg:text-[15px] text-[12px] sm:text-[15px] md:text-[12px] text-[#1A1A1A] font-normal">10k+ Real Reviews</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Business;


"use client";
import React from 'react';

const Consumer = () => {
  return (
   
    <section className="relative w-full bg-white py-10 md:py-16 px-6 md:px-20 overflow-hidden isolate">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
     
        <div className="text-left z-10 flex flex-col  items-center md:items-start ">
          <h1 className="text-4xl md:text-[28px] lg:text-[38px] font-bold text-[#1A2B3B] leading-[1.1] mb-6  text-center md:text-left">
            Connecting Consumers
            and Businesses Through 
            Authentic Reviews
          </h1>
          
          <p className="text-gray-600 text-[16px] lg:text-[16px] md:text-[14px] leading-relaxed mb-10 max-w-xl text-center md:text-left">
            At Trustyfeedback, our mission is to help your business thrive 
            through genuine, trusted reviews from real customers. We 
            connect you with authentic feedback that builds credibility, 
            drives improvement, and enhances your reputation.
          </p>

      <button className="bg-[#00D690] hover:bg-[#00bf81] text-black font-semibold py-4 px-10 rounded-full transition-all duration-300 text-lg">
        Get Started
      </button>
    </div>

  
    <div className="relative flex justify-center lg:justify-end items-center min-h-100">
      

      <div className="absolute lg:top-83 top-72 md:top-63 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-120 lg:h-60 w-80 h-40 md:w-80 md:h-40 bg-[#F3F6F6] rounded-tl-full rounded-tr-full z-0" />

    

   
      <img 
        src="/medium.png" 
        alt="Connecting Consumers and Businesses" 
        className="relative w-100 lg:w-137.5 md:w-80 n z-10" 
      />
    </div>

  </div>
</section>
  );
};

export default Consumer;
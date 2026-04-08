

"use client";
import React from 'react';

const Consumer = () => {
  return (
   
    <section className="relative w-full bg-white py-16 md:py-24 px-6 md:px-20 overflow-hidden isolate">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
     
        <div className="text-left z-10">
          <h1 className="text-4xl md:text-5xl lg:text-[38px] font-bold text-[#1A2B3B] leading-[1.1] mb-6">
            Connecting Consumers <br className="hidden md:block" />
            and Businesses Through <br className="hidden md:block" />
            Authentic Reviews
          </h1>
          
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
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
      

      <div className="absolute top-83 left-1/2 -translate-x-1/2 -translate-y-1/2 w-120 h-60 bg-[#F3F6F6] rounded-tl-full rounded-tr-full z-0" />

    

   
      <img 
        src="/medium.png" 
        alt="Connecting Consumers and Businesses" 
        className="relative w-full max-w-137.5 object-contain z-10" 
      />
    </div>

  </div>
</section>
  );
};

export default Consumer;
import Image from 'next/image';
import React from 'react';
import {MdArrowForward } from 'react-icons/md';

const CategoryCard = ({ title, items, headerBg, titleColor = "text-[#17253F]" }) => {
  return (
    <div className="bg-[#F3FBF8] rounded-3xl overflow-hidden shadow-sm flex flex-col h-full">
   
      <div className={`${headerBg} p-5 flex items-center gap-4`}>
        <div className="bg-white/20 p-2 rounded-lg">
           <Image src="/comp.png" alt="comp" height={40} width={40}/>
        </div>
        <h3 className={`font-bold text-[20px] ${titleColor}`}>{title}</h3>
      </div>

  
      <div className="flex flex-col">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-5 py-3 border-b border-gray-300 last:border-0 hover:bg-white transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#04DA8D]"></span>
              <span className="text-[#17253F] font-medium text-sm md:text-base">
                {item}
              </span>
            </div>
            <MdArrowForward className="text-gray-400 group-hover:text-[#04DA8D] transition-colors" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
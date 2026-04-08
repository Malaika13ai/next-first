import Button from '@/components/Button'
import Image from 'next/image';
import React from 'react'
import Marquee from 'react-fast-marquee';
import { FaArrowRight } from "react-icons/fa";
function Looking() {
const data =[ {
    icon:"/electronics.png",
    text:"Electronics"
},
{
      icon:"/clothing-store.png",
    text:"Clothing"
},
{
      icon:"/real-estate.png",
    text:"Real Estate"
},
{
      icon:"/hotel.png",
    text:"Hotels"
},
{
      icon:"/Bank.png",
    text:"Bank"
},
{
      icon:"/Restraunt.png",
    text:"Restraunt"
},
{
      icon:"/couch.png",
    text:"Furniture Store"
},
]

  return (
    <section className='lg:pl-41 md:pl-15 pl-4 bg-[url("/default.png")] h-auto pt-5'>
      <div className='lg:pr-41 md:pr-15 pr-4 flex justify-between items-center flex-col sm:flex-row'>
        <p className='font-semibold md:text-[38px] sm:text-[30px] text-[26px]'>What you are looking for?</p>
    <button className='flex items-center py-3.75 px-6.25 gap-1 text-[18px] font-medium border border-[#04DA8D] rounded-4xl h-10.75'>See More <FaArrowRight className='w-2.75 h-3.25 text-[#17253F]'/></button>
      </div>

      <Marquee className='mt-12.5'>
        {data.map((item,index)=>(
            <div className='bg-white h-36 w-45 shadow-[0_2px_10px_0_#17253F1A]/10 rounded-lg flex flex-col items-center justify-center ml-3.75 border border-[#17253F1A] gap-4' key={index}>
                <Image src={item.icon} height={40} width={35} alt="icon"/>
                <p>{item.text}</p>
            </div>
        ))}
      </Marquee>
      <div className="mr-41 border border-[#000000]/10 mt-20"/>
    </section>
  )
}

export default Looking

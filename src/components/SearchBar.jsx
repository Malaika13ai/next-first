"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';

function SearchBar({searchText}) {
    const [isOpen,setIsOpen] = useState(false);


const dropDownData = [
     "Electronics","Clothing","Real Estate"
]

    const toggle= ()=>{
        setIsOpen(!isOpen)
    }
  return (
    <div className='border border-[#E1E3F6] rounded-4xl bg-[#FFFFFF]  flex items-center justify-between h-13 md:h-16'>
        <div className='flex justify-between items-center gap-0.5 sm:gap-1  px-3 md:px-7 relative'>
      <Image src="/category.png" height={20} width={20} alt="cateogory" className='w-3 h-3 md:w-5 md:h-5'/>
       <span  className='text-[14px] md:text-[16px] text-[#17253F] ml-0.5 cursor-pointer'><Link href="/category">{searchText}</Link></span>
       <Image src="/Chevron.png" height={15} width={15} onClick={toggle} alt="chevron"/>
       {isOpen && (
          <div className='bg-[#04DA8D] rounded-lg p-4  absolute top-10 '>
            {dropDownData.map((item,index)=>(
                <p key={index} className='border-b border-b-[#2A2A2A]/20 pb-1 text-[#FFFFFF] mb-1'>{item}</p>
            ))}
          </div>
       )}
       </div>
       <input className='outline-none border-l border-l-[#2A2A2A]/20 h-9 px-2 md:px-6.25 xl:w-100 ml-2 sm:ml-0 lg:w-85 md:w-80 sm:w-60 w-52 md:placeholder:text-[16px] placeholder:text-[12px] ' placeholder='Search company or product'/>
       <div className='bg-[#04DA8D] flex justify-center items-center rounded-r-4xl  w-12 md:w-22.5 h-13 md:h-16'>
         <Image src="/Search.png" height={36} width={36} alt="search" className='w-6 h-6 md:w-9 md:h-9'/>
       </div>
    </div>
  )
}

export default SearchBar

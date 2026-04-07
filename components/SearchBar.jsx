"use client"
import React, { useState } from 'react'
import Image from 'next/image'

function SearchBar({searchText}) {
    const [isOpen,setIsOpen] = useState(false);


const dropDownData = [
     "Electronics","Clothing","Real Estate"
]

    const toggle= ()=>{
        setIsOpen(!isOpen)
    }
  return (
    <div className='border border-[#E1E3F6] rounded-4xl bg-[#FFFFFF]  flex items-center justify-between h-16'>
        <div className='flex justify-between items-center gap-1  px-7 relative'>
      <Image src="/category.png" height={20} width={20} alt="cateogory"/>
       <span  className='text-[16px] text-[#17253F] ml-0.5 cursor-pointer'>{searchText}</span>
       <Image src="/Chevron.png" height={15} width={15} onClick={toggle} alt="chevron"/>
       {isOpen && (
          <div className='bg-[#04DA8D] rounded-lg p-4  absolute top-10 '>
            {dropDownData.map((item,index)=>(
                <p key={index} className='border-b border-b-[#2A2A2A]/20 pb-1 text-[#FFFFFF] mb-1'>{item}</p>
            ))}
          </div>
       )}
       </div>
       <input className='outline-none border-l border-l-[#2A2A2A]/20 h-9 px-6.5 w-100 placeholder:text-[16px] ' placeholder='Search company or product'/>
       <div className='bg-[#04DA8D] flex justify-center items-center rounded-r-4xl  w-20.25 h-16'>
         <Image src="/Search.png" height={36} width={36} alt="search"/>
       </div>
    </div>
  )
}

export default SearchBar

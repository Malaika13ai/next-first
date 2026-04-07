"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
import Link from 'next/link'
function Navbar() {
    const [isActive,setIsActive] = useState("business")
  return (
<header className='w-full bg-white z-999 border-b border-b-[#17253F]/20 px-28 flex gap-5  justify-center items-center py-4 fixed'>
    <Image width={168}
    height={51}
    src="/variant.png"
    alt="logo"
    />
    <nav className='flex gap-6.5 ml-14'>
        <Link href="#" className='text-[16px] text-[#17253F] font-light hover:text-[#04CC84] cursor-pointer'>Write a review</Link>
            <Link href="#" className='text-[16px] text-[#17253F] font-light hover:text-[#04CC84] cursor-pointer'>How it Works</Link>   
                <Link href="#" className='text-[16px] text-[#17253F] font-light hover:text-[#04CC84] cursor-pointer'>About Us</Link>
                    <Link href="#" className='text-[16px] text-[#17253F] font-light hover:text-[#04CC84] cursor-pointer'>Blog</Link>
                        <Link href="#" className='text-[16px] text-[#17253F] font-semibold hover:text-[#04CC84] cursor-pointer'>Log In</Link>
                        
    </nav>
<div className='border border-[#17253F26] p-1.5 rounded-[100px] flex '>
  <Button 
    btnStyle={`px-6.25 rounded-[100px] font-semibold h-[53px] text-[16px] ${
      isActive === "business" 
        ? "bg-[#17253F] text-white" 
        : "text-[#17253F] bg-white"
    }`} 
    onClick={() => setIsActive("business")} 
    btnText="For Businesses"
  />

  <Button 
    btnStyle={`px-6.25 rounded-[100px] font-semibold h-[53px] text-[16px] ${
      isActive === "consumer"   
        ? "bg-[#17253F] text-white" 
        : "text-[#17253F] bg-white"
    }`} 
    onClick={() => setIsActive("consumer")} 
    btnText="For Consumer"
  />
</div>
 </header>
  )
}

export default Navbar

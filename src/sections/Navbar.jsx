"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Button from '@/src/components/Button'
import Link from 'next/link'
import { HiMenu, HiX } from 'react-icons/hi'

function Navbar() {
  const [isActive, setIsActive] = useState("business")
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
   
      <header className='w-full bg-white z-1000 border-b border-b-[#17253F]/20 px-6 md:px-12 lg:px-28 flex justify-between items-center py-4 fixed top-0'>
        
      
        <div className='shrink-0'>
          <Image width={168} height={51} src="/variant.png" alt="logo" className='w-[130px] md:w-[168px] lg:w-[140px] h-auto' />
        </div>

      
        <nav className='hidden lg:gap-4 lg:flex items-center gap-7'>
          <Link href="/write" className='text-[16px] xl:text-[16px] lg:text-[14px] text-[#17253F]'>Write a review</Link>
          <Link href="#" className='text-[16px]  xl:text-[16px] lg:text-[14px] text-[#17253F]'>How it Works</Link>
          <Link href="/about" className='text-[16px]  xl:text-[16px] lg:text-[14px] text-[#17253F]'>About Us</Link>
          <Link href="/blog" className='text-[16px] lg:text-[14px]  xl:text-[16px] text-[#17253F]'>Blog</Link>
          <Link href="/login" className='text-[16px] lg:text-[14px] text-[#17253F]  xl:text-[16px] font-semibold ml-4'>Log In</Link>
        </nav>

        <div className='flex items-center gap-4'>
   
          <div className='hidden sm:flex border border-[#17253F26] p-1 rounded-[100px]'>
            <Button 
              btnStyle={`px-6.25 lg:px-4 rounded-[100px] font-semibold h-[53px] text-[16px] transition-all ${
                isActive === "business" ? "bg-[#17253F] text-white" : "text-[#17253F] bg-transparent"
              }`} 
              onClick={() => setIsActive("business")} 
              btnText="For Businesses"
            />
            <Button 
              btnStyle={`px-6.25 lg:px-4 rounded-[100px] font-semibold h-[53px] text-[16px] transition-all ${
                isActive === "consumer" ? "bg-[#17253F] text-white" : "text-[#17253F] bg-transparent"
              }`} 
              onClick={() => setIsActive("consumer")} 
              btnText="For Consumer"
            />
          </div>

       
          <button 
            className='lg:hidden text-[#17253F] text-3xl'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </header>

   
      <div className={`fixed left-0 right-0 bg-white z-999 shadow-2xl border-b border-[#17253F]/10 transition-transform duration-500 ease-in-out lg:hidden ${isOpen ? 'translate-y-0' : '-translate-y-full'}`} 
           style={{ top: '0', paddingTop: '85px' }}>
        
        <nav className='flex flex-col p-6 gap-5'>
          
      
          <div className='flex border border-[#17253F26] p-1 rounded-[100px] w-fit mx-auto mb-4'>
            <Button 
              btnStyle={`px-5 rounded-[100px] font-semibold h-[48px] lg:text-[12px] text-[14px] transition-all ${
                isActive === "business" ? "bg-[#17253F] text-white" : "text-[#17253F] bg-transparent"
              }`} 
              onClick={() => setIsActive("business")} 
              btnText="For Businesses"
            />
            <Button 
              btnStyle={`px-5 rounded-[100px] font-semibold h-[48px] lg:text-[12px] text-[14px] transition-all ${
                isActive === "consumer" ? "bg-[#17253F] text-white" : "text-[#17253F] bg-transparent"
              }`} 
              onClick={() => setIsActive("consumer")} 
              btnText="For Consumer"
            />
          </div>

          <Link href="/write"  className='text-lg text-[#17253F] font-medium py-2 border-b border-gray-100'>Write a review</Link>
          <Link href="#"  className='text-lg text-[#17253F] font-medium py-2 border-b border-gray-100'>How it Works</Link>
          <Link href="/about" className='text-lg text-[#17253F] font-medium py-2 border-b border-gray-100'>About Us</Link>
          <Link href="/blog" className='text-lg text-[#17253F] font-medium py-2 border-b border-gray-100'>Blog</Link>
          <Link href="/login" className='text-lg text-[#17253F] font-bold py-2'>Log In</Link>
        </nav>
      </div>
    </>
  )
}

export default Navbar
import React from 'react'
import Image from 'next/image'
import SearchBar from '@/components/SearchBar'

function Hero() {
  return (
 <main className='bg-[url("/default.png")] px-13.25 flex flex-col justify-center items-center relative h-screen pt-14'>
     <Image src="/Harley.png" width={222} height={237} alt='Harley' className='absolute left-8 top-36 h-auto w-auto'/>
     <p className='font-semibold text-[45px] leading-[1.3] text-[#17253F]'>Find Top Businesses & Services, <span className='font-bold block text-center '>Trusted by Your Reviews</span></p>
       <Image src="/twisted-arrow.png" width={81} height={87} alt="arrow" className='absolute right-68 bottom-75 h-auto w-auto'/>
     <p className='text-[24px] text-[#17253F] font-medium mt-2 mb-9'>Millions of unbiased reviews. Trusted by 700 Million+ users</p>
     <SearchBar searchText="Categories"/>
     <Image src="/john.png" width={222} height={237} alt="john" className='absolute right-11 bottom-6 h-auto w-auto'/>

 </main>
  )
}

export default Hero

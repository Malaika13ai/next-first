import React from 'react'
import Image from 'next/image'
import SearchBar from '@/components/SearchBar'

function Hero() {
  return (
 <main className='bg-[url("/default.png")] md:px-13.25 sm:px-8 px-5 flex flex-col justify-center items-center relative h-screen pt-14'>
     <Image src="/Harley.png" width={222} height={237} alt='Harley' className='absolute xl:left-8 lg:left-2 top-36 xl:h-59 lg:h-55 xl:w-55 lg:w-51 hidden lg:block'/>
     <p className='font-semibold xl:text-[45px] lg:text-[41px] text-[38px] text-center leading-[1.3] text-[#17253F]'>Find Top Businesses & Services, <span className='font-bold block text-center '>Trusted by Your Reviews</span></p>
       <Image src="/twisted-arrow.png" width={81} height={87} alt="arrow" className='absolute xl:right-68 xl:bottom-75 lg:right-50 lg:bottom-85 h-auto w-auto hidden lg:block'/>
     <p className='xl:text-[24px] lg:text-[22px] text-center text-[20px]  text-[#17253F] font-medium mt-2 mb-9'>Millions of unbiased reviews. Trusted by 700 Million+ users</p>
     <SearchBar searchText="Categories"/>
     <Image src="/john.png" width={222} height={237} alt="john" className='absolute xl:right-15 lg:right-5 lg:bottom-30 xl:bottom-20 xl:h-59 lg:h-55 xl:w-55 lg:w-51 hidden lg:block'/>

 </main>
  )
}

export default Hero

import Image from 'next/image'
import React from 'react'

function Scam() {
  return (
 <div className=' bg-[url("/default.png")] flex flex-col justify-center items-center pt-32 md:pt-50 px-6 lg:px-60 md:px-22 bg-white'>
     <p className='font-semibold xl:text-[45px] lg:text-[41px] md:text-[35px] text-[28px] text-center leading-[1.3] max-w-225 text-[#17253F] mb-5'>
     Romance scams: Spot the signs
      </p>
      <div className='flex items-center gap-6 mb-12'>
      <div className='flex items-center gap-2'>
        <Image src="/profile-trust.png" alt="profile" height={32} width={32}/>
        <p className='text-[16px] font-medium '>Article by : <span className='text-[16px] font-medium text-gray-600'>TrustyFeedback</span></p>
      </div>
              <p className='text-[16px] font-medium '>Published : <span className='text-[16px] font-medium text-gray-600'>July 30, 2024</span></p>

      </div>
  
        <Image src="/hacking.png" alt="hack" height={418} width={800} className='w-full rounded-2xl '/>
      
             </div>
  )
}

export default Scam
import Button from '@/components/Button'
import Ratings from '@/components/Ratings'
import Image from 'next/image'
import React from 'react'

function Trusty() {
  return (
    <div className='mx-34 bg-[#05442E] rounded-2xl pl-15 pr-9 pt-5 flex justify-between items-center gap-14 absolute -z-2 -bottom-60'>
      <div >
        <p className='font-semibold text-[32px] text-[#FFFFFF] mb-2 w-125 leading-tight'>We Provide Trusty Feedback You Can Rely On</p>
        <p className='font-normal text-[16px] text-[#FFFFFF] mb-5.5 leading-[1.3] w-130'>We’re a review platform accessible to all. Our vision is to become a global symbol of trust, empowering consumers to shop confidently while helping businesses grow and improve.</p>
      <Button 
    btnStyle="px-6.25 rounded-[100px] font-semibold h-[53px] bg-[#04DA8D] text-[16px] "
    btnText="More About Us"
  />
      </div>
      <div className='relative'>
    
   
         <Image src="/man.png" alt="man" height={396} width={344} className='h-88 w-70  '/>
    <div className='rounded-full bg-[#0D5D41] w-70 h-67  absolute -z-1 top-15'/>
    <Image src="/vector.svg" alt="arrow-twist" height={79} width={73} className='absolute top-35 right-70'/>
         <div className='bg-white rounded-xl p-3.5 absolute top-3 right-55 w-44.5'>
            <div className='flex gap-2 mb-0.5 items-center'>
                <Image src="/elipse.png" height={36} width={36} />
                <p className='font-medium text-[14px] text-[#000000] w-25'>How was your order?</p>
            </div>
            <p className='text-[#17253F]/50 text-[14px] mb-0.5'>Give us a review</p>
            <Ratings       starStyle='text-[#FFFFFF] bg-[#00B57A]/50 p-0.5'/>
         </div>
         <div className='rounded-4xl bg-[#04DA8D] px-5 py-2.5 absolute top-15 -right-5'>
            <p className='text-[10px] text-[#17253F] font-medium mb-1'>It was Delicious!</p>
                 <Ratings       starStyle='text-[#FFFFFF] bg-[#17253F] p-0.5'/>
         </div>
      </div>
    </div>
  )
}

export default Trusty

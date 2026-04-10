import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'

function Missions() {
    const text = 
        {mission:"Our mission is to make your day better. We get it. We like to squeeze the most out of every day and we want to help you live your best life too. Whether you’re working hard or working out, a night owl or and early bird, staying focused or staying Zen, Boost Patches give your that little extra something. We want you to give yourself a boost into better health, fitness, and mindfulness",
         look:"Looking for an incredible, interactive, and affordable animal experience in central Virginia? SeaQuest Lynchburg is a perfect choice! Boasting over 20,000 square feet of fun-packed adventures, SeaQuest Lynchburg is one of the few places in the state that offers hands-on encounters where visitors get to touch, feel, and feed animals from a variety of ecosystems found throughout the world.",
         journey:"You’ll journey through the Amazon, Caribbean, Egyptian Desert, and Mayan Jungle as you interact with sharks, snakes, turtles, and lizards during your quest."
        }
    
  return (
     <div className=' pt-12 px-6 lg:px-60 pb-10 md:px-22 bg-white'>
        <h3 className='font-bold text-[24px] text-[#252525] mb-2'>Our Mission</h3>
        <p className='text-[16px] leading-[1.4] mb-5'>{text.mission}</p>

        <h3 className='font-bold text-[24px] text-[#252525] mb-2'>Dive In! SeaQuest Lynchburg</h3>
        <p className='text-[16px] leading-[1.4] mb-5'>{text.look} <span className='text-[16px] leading-[1.4] mb-5 block'>{text.journey}</span></p>
   
   <h3 className='font-bold text-[24px] text-[#252525] mb-2'>Let’s Find</h3>
  <p className='text-[16px] leading-[1.4] mb-8'>{text.mission}</p>
 <Image src="/trustyy.png" alt="hack" height={418} width={800} className='w-full rounded-2xl '/>
  
        <p className='text-[16px] leading-[1.4] mb-5 mt-8'>{text.look} <span className='text-[16px] leading-[1.4] mb-3 block'>{text.journey}</span></p>
  <p className='text-[16px] leading-[1.4] mb-3'>{text.mission}</p>

  <div className='bg-[#E7F4EF] rounded-4xl p-10 mt-8'>
    <h3 className='font-bold text-[24px] text-[#252525] mb-2'>Conclusion</h3>
        <p className='text-[16px] leading-[1.4] mb-5'>{text.mission}</p>
  </div>

         <div className='border border-[#F1F1F1] mt-8 mb-8 w-full'/>

         <div>
             <p className='font-semibold text-[38px] mb-6'>Leave a Reply</p>
            <textarea className='w-full h-24 border border-[#F1F1F1] p-5 rounded-2xl resize-none'  placeholder='Comment*'  />
            <div className='flex gap-5 mt-3 flex-col sm:flex-row'>
                 <input className='sm:w-[49%] w-full h-15 border border-[#F1F1F1] p-5 rounded-4xl' type='text' placeholder='Name'  />
                  <input className='sm:w-[49%] w-full h-15 border border-[#F1F1F1] p-5 rounded-4xl' type='text' placeholder='Email*'  />
            </div>
            <Button    btnStyle='px-9 mt-6 rounded-[100px] bg-[#17253F] text-white font-semibold h-[53px] text-[14px]' 
              btnText=" Submit"/>
         </div>
     </div>
  )
}

export default Missions
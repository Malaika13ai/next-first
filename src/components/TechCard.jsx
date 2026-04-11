import Image from 'next/image';
import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import Ratings from './Ratings';
function TechCard({face,name}) {
  return (
    <div className='p-5 bg-[#EFF3F7] rounded-2xl ml-4 w-82'>
      <div className='flex gap-5 items-center mb-5'>
        <div className='bg-white w-18 h-17 rounded-2xl relative'>
        <Image src="/FlatColor.png" height={17} width={17} alt="flat col" className="absolute -top-1 -right-1"/>
        </div>
        <div >
            <p className='font-semibold text-[20px] '>Tech Wizards</p>
            <p className='text-[15px] font-normal text-[#000000]/50'>techwizards.com</p>
        </div>
      </div>
<div className='flex gap-3 mb-5 items-center'>
       <Ratings    starStyle='text-[#FFFFFF] bg-[#00B57A] p-0.5'/>
       <p className='text-[16px] '>5.0</p>
</div>

<p className='text-[16px] leading-[1.3] text-[#2A2A2A] mb-1'>Had a great experience with Tech Wizards when my laptop crashed. They were able to recover all my files and had my computer running like new again.....</p>
<div className='mb-5 flex gap-1 items-center' >
    <span className='text-[#00B57A] text-[14px]'>Read Review</span>
      <FaArrowRight size={12} className='text-[#00B57A]' />
</div>

<div className='border border-[#2A2A2A]/10 w-full mb-4'/>
<div className='flex items-center justify-between'>
<div className='flex items-center gap-2'>
    <Image src={face} alt="arrow rightt" height={60} width={60}/>
    <div >
        <p className='text-[16px] font-semibold text-[#2A2A2A]'>{name}</p>
        <div className='flex items-center gap-2'>
            <p className='text-[#1A1A1A] text-[15px]'>Top Contributor</p>
            <Image src="/rewards.png" alt="reward" height={14} width={12}/>
        </div>
    </div>
</div>
<p className='text-[#2A2A2A]/50 text-[13px]'>15 mins ago</p>
</div>
    </div>
  )
}

export default TechCard

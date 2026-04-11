import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaArrowRight } from "react-icons/fa";
function BlogCard({blogImage,blogHead}) {
  return (
    <div className='flex bg-[#EFF3F7] p-2.5 gap-3 items-center rounded-xl'>
        <Image src={blogImage} alt="" height={500} width={500} className='w-[35%] h-33'/>
        <div>
             <p className='text-[18px] font-semibold mb-2'>{blogHead}</p>
                 <p className='text-[16px] mb-3'>The prevalence of influencers in our </p>
                 <div className='flex items-center gap-2'>
                    <Link href="/review" className='text-[16px] font-semibold text-[#17253F]'>Read Article</Link>
                    <span><FaArrowRight className='w-2.75 h-3.25 text-[#17253F]'/></span>
                    </div>
        </div>
    </div>
  )
}

export default BlogCard
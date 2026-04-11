import Look from '@/src/category-section/Look'
import Recent from '@/src/sections/Recent'
import React from 'react'

function page() {
  return (
    <div>
        <Look />
         <Recent recentBg='py-20 mx-6 bg-[#05442E] rounded-tl-2xl rounded-tr-2xl flex items-center flex-col relative' twistStyle='hidden' white='text-[#FFFFFF]'/>
    </div>
  )
}

export default page
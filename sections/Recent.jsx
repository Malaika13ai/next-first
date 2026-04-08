import SearchBar from '@/components/SearchBar'
import Image from 'next/image'
import React from 'react'

function Recent() {
  return (
    <div className='py-20 flex items-center flex-col relative'>
       <p className="font-semibold text-[32px] text-center text-[#17253F] mb-4 w-125 leading-tight ">
           Brought Something Recently
        </p>
        <Image src="/twist.png" height={79} width={73} alt="twist" className='absolute right-88 top-25'/>
        <p className="font-normal text-[16px] text-center text-[#17253F] mb-7 leading-[1.3] w-130">
      Recently made a purchase? Share your experience to help others & provide feedback to businesses!
        </p>
        <SearchBar searchText="Categories" />
    </div>
  )
}

export default Recent

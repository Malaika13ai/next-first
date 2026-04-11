import SearchBar from '@/src/components/SearchBar'
import Image from 'next/image'
import React from 'react'

function Recent({recentBg,twistStyle,white}) {
  return (
    <div className={recentBg}>
       <p className={`${white} font-semibold text-[32px] text-center  mb-4 w-125 leading-tight `}>
           Brought Something Recently
        </p>
        <Image src="/twist.png" height={79} width={73} alt="twist" className={twistStyle}/>
        <p className={`${white} font-normal text-[16px] text-center  mb-7 leading-[1.3] w-130`}>
      Recently made a purchase? Share your experience to help others & provide feedback to businesses!
        </p>
        <SearchBar searchText="Categories" />
    </div>
  )
}

export default Recent

import Consumer from '@/src/about-section/Consumer'
import Feedback from '@/src/about-section/Feedback'
import Main from '@/src/about-section/Main'
import People from '@/src/about-section/People'
import Questions from '@/src/about-section/Questions'
import Testimonials from '@/src/about-section/Testimonial'
import Recent from '@/src/sections/Recent'
import React from 'react'

function page() {
  return (
    <div>
      <Main />
      <Feedback />
      <People />
      <Consumer />
      <Testimonials />
      <Questions />
      <Recent recentBg='py-20 mx-6 bg-[#05442E] rounded-tl-2xl rounded-tr-2xl flex items-center flex-col relative' twistStyle='hidden' white='text-[#FFFFFF]'/>
    </div>
  )
}

export default page

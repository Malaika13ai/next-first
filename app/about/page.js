import Consumer from '@/about-section/Consumer'
import Feedback from '@/about-section/Feedback'
import Main from '@/about-section/Main'
import People from '@/about-section/People'
import Questions from '@/about-section/Questions'
import Testimonials from '@/about-section/Testimonial'
import Recent from '@/sections/Recent'
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

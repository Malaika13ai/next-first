import Consumer from '@/about-section/Consumer'
import Feedback from '@/about-section/Feedback'
import Main from '@/about-section/Main'
import People from '@/about-section/People'
import Questions from '@/about-section/Questions'
import React from 'react'

function page() {
  return (
    <div>
      <Main />
      <Feedback />
      <People />
      <Consumer />
      <Questions />
    </div>
  )
}

export default page

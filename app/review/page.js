import Missions from '@/review-section/Missions'
import Other from '@/review-section/Other'
import Scam from '@/review-section/Scam'
import React from 'react'

function page() {
  return (
    <div>
        <Scam />
        <Missions />
        <Other />
    </div>
  )
}

export default page
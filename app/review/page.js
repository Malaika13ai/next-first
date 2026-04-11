import Missions from '@/src/review-section/Missions'
import Other from '@/src/review-section/Other'
import Scam from '@/src/review-section/Scam'
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
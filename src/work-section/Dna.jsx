import React from 'react'
import FeatureCard from '@/src/components/FeatureCard';

function Dna() {
       const featureData = [
        { title: "Being open is in our DNA", desc: "Trustpilot was created in 2007 as an independent, open platform that sits between businesses and consumers, and empowers both by enabling collaboration. We allow anyone to post a review, which prevents businesses from pre-screening or moderating what consumers actually read. This is one of the key ways we’re different from ‘closed’ or pay-to-access platforms where companies collect reviews as marketing collateral and can publish the reviews they like and ‘unpublish’ those they don’t (either after the fact or by pre-screening). This is never the case on Trustpilot. We welcome all reviews from consumers who've had a genuine experience." },
        { title: "Consumers own their reviews", desc: "Trustpilot was created in 2007 as an independent, open platform that sits between businesses and consumers, and empowers both by enabling collaboration. We allow anyone to post a review, which prevents businesses from pre-screening or moderating what consumers actually read. This is one of the key ways we’re different from ‘closed’ or pay-to-access platforms where companies collect reviews as marketing collateral and can publish the reviews they like and ‘unpublish’ those they don’t (either after the fact or by pre-screening). This is never the case on Trustpilot. We welcome all reviews from consumers who've had a genuine experience." },
        { title: "Fighting fake reviews", desc: "Trustpilot was created in 2007 as an independent, open platform that sits between businesses and consumers, and empowers both by enabling collaboration. We allow anyone to post a review, which prevents businesses from pre-screening or moderating what consumers actually read. This is one of the key ways we’re different from ‘closed’ or pay-to-access platforms where companies collect reviews as marketing collateral and can publish the reviews they like and ‘unpublish’ those they don’t (either after the fact or by pre-screening). This is never the case on Trustpilot. We welcome all reviews from consumers who've had a genuine experience." },
        { title: "Flagging reviews", desc: "Trustpilot was created in 2007 as an independent, open platform that sits between businesses and consumers, and empowers both by enabling collaboration. We allow anyone to post a review, which prevents businesses from pre-screening or moderating what consumers actually read. This is one of the key ways we’re different from ‘closed’ or pay-to-access platforms where companies collect reviews as marketing collateral and can publish the reviews they like and ‘unpublish’ those they don’t (either after the fact or by pre-screening). This is never the case on Trustpilot. We welcome all reviews from consumers who've had a genuine experience." },
    ];

  return (
    <div className='bg-[#E7F4EF] rounded-tl-xl rounded-tr-xl pl-44 pr-44 py-20 '>
        <div className='flex gap-2 flex-wrap w-full'>
        {featureData.map((item,index)=>(
            <div key={index} className='w-[50%]'>
            <FeatureCard 
            title={item.title}
            description={item.desc}
            />
            </div>
        ))}
        </div>
    </div>
  )
}

export default Dna
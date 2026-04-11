"use client"
import React from 'react'
import InfoCard from '@/src/components/InfoCard';
import FeatureCard from '@/src/components/FeatureCard';
import Image from 'next/image';

function TrustyInfo() {
    const infoData = [
        {
            cardIcon:"/click.png", 
            type: "Consumers",
            desc: "Consumers who've had an experience with a business can create a Trustpilot account and write an unsolicited review. We call these organic reviews."}
,
        {
            cardIcon:"/cirrcle.png", 
             type: "Businesses",
             desc: "Businesses can ask their customers to leave a review using invitation methods, for free. Ensure there is no bias invite their  to review them."},
        {
            cardIcon:"/click.png", 
             type: "Consumers", 
             desc: "Consumers who've had an experience with a business can create a Trustpilot account and write an unsolicited review. We call these organic reviews."},
    ];

 
    return (
     
        <div className=' bg-[url("/default.png")] flex flex-col justify-center items-center pt-32 md:pt-50 px-6 lg:px-60 md:px-22 bg-white'>
            <p className='font-semibold xl:text-[45px] lg:text-[41px] md:text-[35px] text-[28px] text-center leading-[1.3] max-w-225 text-[#17253F] mb-5'>
        We're open to all.

             </p>
           <p className='text-[24px] text-[#17253F text-center '>A platform where customers rate businesses, sharing reviews to guide others and help companies improve.</p>
         
               <Image src="/work.png" alt="work" height={418} width={800} className='w-full rounded-2xl mt-10'/>

               <div>
              <h3 className='font-bold text-[24px] text-[#17253F] mb-6 mt-8 text-left'>How do reviews get on Trusty Feedback?
</h3>
               <p className='text-[16px] leading-[1.4]'>Reviews on Trusty Feedback are written by consumers from across the globe. Anyone who has had a recent buying or service experience can write a review, for free, as long as they have a Trusty Feedback user account, follow our Guidelines for Reviewers, and don’t have a conflict of interest with the business they’re reviewing. A user account must be connected to an email address so we can get in touch for account- and service- related issues.
</p>
               
                     <p className='text-[16px] leading-[1.4] mb-8 mt-3'>All reviews about a business are shown on their profile page. This is where consumers can read and write reviews, and find other relevant information about the business, such as the overall TrustScore and star rating.
A Trusty Feedback review can start in two ways:</p>
<div className='flex '>
{infoData.map((item , index)=>(
 <div key={index} className="px-2 pb-10"> 
                        <InfoCard
                            cardIcon={item.cardIcon}
                           type ={item.type}
                        description={item.desc}
                            index={index}

                        />
                    </div>
))}
</div>
</div>


                    </div>
    )
}

export default TrustyInfo;
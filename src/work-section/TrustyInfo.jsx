"use client"
import React from 'react'
import InfoCard from '@/src/components/InfoCard';
import Image from 'next/image';

function TrustyInfo() {
    const infoData = [
        {
            cardIcon: "/click.png",
            type: "Consumers",
            desc: "Consumers who've had an experience with a business can create a Trusty account and write an unsolicited review. We call these organic reviews."
        },
        {
            cardIcon: "/cirrcle.png",
            type: "Businesses",
            desc: "Businesses can ask their customers to leave a review using invitation methods, for free. Ensure there is no bias when inviting reviews."
        },
        {
            cardIcon: "/click.png",
            type: "Consumers",
            desc: "Consumers who've had an experience with a business can create a Trusty account and write an unsolicited review. We call these organic reviews."
        },
    ];

    return (

        <div className='bg-[url("/default.png")] flex flex-col justify-center items-center pt-20 md:pt-32 lg:pt-50 px-6 md:px-22 lg:px-60 bg-white'>
            
        
            <div className="text-center w-full">
                <h1 className='font-semibold text-[28px] md:text-[35px] lg:text-[41px] xl:text-[45px] leading-[1.2] max-w-[900px] mx-auto text-[#17253F] mb-5'>
                    We're open to all.
                </h1>
                <p className='text-[18px] md:text-[22px] lg:text-[24px] text-[#17253F] max-w-[800px] mx-auto'>
                    A platform where customers rate businesses, sharing reviews to guide others and help companies improve.
                </p>
            </div>

      
            <div className="w-full  mt-10">
                <Image 
                    src="/work.png" 
                    alt="work" 
                    height={418} 
                    width={800} 
                    className='w-full h-auto rounded-2xl shadow-sm'
                />
            </div>

            <div className="w-full ">
                <h3 className='font-bold text-[22px] md:text-[24px] text-[#17253F] mb-6 mt-12 text-left'>
                    How do reviews get on Trusty Feedback?
                </h3>
                
                <div className='text-[15px] md:text-[16px] leading-[1.6] text-[#5E6D82] space-y-4'>
                    <p>
                        Reviews on Trusty Feedback are written by consumers from across the globe. Anyone who has had a recent buying or service experience can write a review, for free, as long as they have a Trusty Feedback user account.
                    </p>
                    <p className='mb-8'>
                        All reviews about a business are shown on their profile page. This is where consumers can read and write reviews, and find other relevant information about the business.
                    </p>
                </div>

              
                <div className='flex flex-wrap md:flex-row gap-4 lg:gap-6 mt-10 pb-20'>
                    {infoData.map((item, index) => (
                        <div key={index} className="flex-1 w-full md:w-[33%] sm:w-[50%]"> 
                            <InfoCard
                                cardIcon={item.cardIcon}
                                type={item.type}
                                description={item.desc}
                              
                                cardStyle="bg-[#F8FAFC] p-6 rounded-xl border border-slate-100 shadow-sm h-full"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TrustyInfo;
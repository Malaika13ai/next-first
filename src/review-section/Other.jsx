"use client"
import React from 'react'
import ReviewCard from '@/src/components/ReviewCard';

function Other() {
    const reviewData = [
        { reviewImage: "/glasses.png", reviewText: "The FTC’s fake reviews ruling and what it means for you" },
        { reviewImage: "/mug.png", reviewText: "Voice search optimization: Speak your way to success on search" },
        { reviewImage: "/mic.png", reviewText: "The FTC’s fake reviews ruling and what it means for you" },
    ];

    return (
        <div className='mx-4 md:mx-7 rounded-2xl bg-[#E7F4EF] pb-20 pt-10 md:pt-20'>
            <div className='px-6 md:px-15 lg:px-34'>
                
                <h2 className='font-semibold text-[28px] md:text-[38px] text-center text-[#17253F] mb-12'>
                    Other Related Articles
                </h2>

            
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
                    {reviewData.map((item, index) => (
                        <div key={index} className='flex justify-center w-full'>
                            <ReviewCard
                                reviewImg={item.reviewImage} 
                                reviewText={item.reviewText}
                            
                                cardStyle='bg-white px-4 pt-4 pb-10 rounded-xl w-full h-full shadow-sm'
                            />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Other;
"use client"
import React, { useRef } from 'react'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import ReviewCard from '@/components/ReviewCard';

function Buy() {
    const swiperRef = useRef(null);

    const reviewData = [
        { reviewImage: "/fake.png", reviewText: "The FTC’s fake reviews ruling and what it means for you" },
        { reviewImage: "/voice.png", reviewText: "Voice search optimization: Speak your way to success on search" },
        { reviewImage: "/mask.png", reviewText: "The FTC’s fake reviews ruling and what it means for you" },
        { reviewImage: "/fake.png", reviewText: "Voice search optimization: Speak your way to success on search" },
        { reviewImage: "/voice.png", reviewText: "Digital marketing strategies for 2026" },
        { reviewImage: "/mask.png", reviewText: "The future of AI in consumer reviews" },
    ];

    return (
        /* Removed overflow-hidden to prevent clipping card shadows */
        <div className='mx-4 md:mx-7 rounded-2xl bg-[#E7F4EF] pb-20 pt-10 md:pt-20 flex flex-col'>
            
            {/* Wrapper for consistent alignment */}
            <div className='px-6 md:px-15 lg:px-34'>
                
                {/* Header Section */}
                <div className='flex flex-col md:flex-row justify-between items-center mb-10 gap-6 relative z-30'>
                    <p className='font-semibold text-[28px] md:text-[38px] text-center md:text-left text-[#17253F]'>
                        Buy With Confidence
                    </p>
                    
                    <div className='flex gap-3'>
                        <button 
                            onClick={() => swiperRef.current?.slidePrev()}
                            className='w-12 h-12 bg-gray-500 rounded-full flex justify-center items-center active:scale-95 transition-all cursor-pointer shadow-sm hover:bg-gray-800'
                        >
                            <MdKeyboardArrowLeft className='h-8 w-8 text-[#FFFFFF]'/>
                        </button>
                        <button 
                            onClick={() => swiperRef.current?.slideNext()}
                            className='w-12 h-12 bg-[#17253F] rounded-full flex justify-center items-center active:scale-95 transition-all cursor-pointer shadow-sm hover:bg-[#253a61]'
                        >
                            <MdKeyboardArrowRight className='h-8 w-8 text-[#FFFFFF]'/>
                        </button>
                    </div>
                </div>

                {/* Slider Section - No more slidesOffsetBefore or internal padding needed */}
                <div className='relative z-20'>
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        slidesPerView={1} 
                        loop={false}
                     
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 }
                        }}
                        className="mySwiper"
                    >
                        {reviewData.map((item, index) => (
                            <SwiperSlide key={index} className="h-auto">
                                <ReviewCard
                                   reviewImg={item.reviewImage} 
                                   reviewText={item.reviewText}
                                   cardStyle='bg-[#EFF3F7] px-4 pt-4 pb-10 rounded-xl '
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            
            </div>

         
        </div>
    )
}

export default Buy;
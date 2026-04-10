"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import ReviewCard from '@/components/ReviewCard';

function Reviews() {
  const reviewData = [
    { reviewImage: "/mask.png", reviewText: "The FTC’s fake reviews ruling and what it means for you" },
    { reviewImage: "/debate.png", reviewText: "Voice search optimization: Speak your way to success on search" },
    { reviewImage: "/drink.png", reviewText: "The FTC’s fake reviews ruling and what it means for you" },
    { reviewImage: "/mask.png", reviewText: "Voice search optimization: Speak your way to success on search" },
    { reviewImage: "/debate.png", reviewText: "Digital marketing strategies for 2026" },
    { reviewImage: "/mask.png", reviewText: "The future of AI in consumer reviews" },
  ];

  return (
    <div className='py-20 bg-white review-slider-container overflow-hidden'>
 
      <p className='font-semibold text-[38px] mb-12 ml-10 text-center'>Reviews Matter</p>
      
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        loop={false}
        pagination={{
          clickable: true,
          el: '.custom-pagination', 
        }}
   
        slidesOffsetBefore={100} 
        breakpoints={{
          320: { slidesPerView: 1.2 },
          640: { slidesPerView: 2.2 },
          768: { slidesPerView: 3.2 },
          1024: { slidesPerView: 4.2 },
        }}
        className="overflow-visible!" // Important: allows cards to bleed right
      >
        {reviewData.map((item, index) => (
          <SwiperSlide key={index}>
            <ReviewCard reviewImg={item.reviewImage} reviewText={item.reviewText} cardStyle='bg-white px-4 pt-4 pb-10 rounded-xl ' />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Dedicated Pagination Container - Guaranteed no overlap */}
      <div className="custom-pagination mt-12 text-center"></div>

      <style jsx global>{`
        /* Sleek Dot Animations */
        .custom-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: #e5e7eb;
          opacity: 1;
          margin-right: 12px !important;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
          display: inline-block;
        }

        .custom-pagination .swiper-pagination-bullet-active {
          width: 35px;
          border-radius: 20px;
          background-color: #000;
        }

        /* Ensure the swiper doesn't clip the cards as they move */
        .review-slider-container .swiper-wrapper {
          display: flex;
        }
      `}</style>
    </div>
  );
}

export default Reviews;
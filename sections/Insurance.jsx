"use client"
import React, { useRef } from 'react'
import Card from '@/components/Card';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import Marquee from 'react-fast-marquee';
import Trusty from './Trusty';

function Insurance() {
    const swiperRef = useRef(null);

    const cardData = [
        { icon: "/diamonds.png", text: "Techlify", head: "Trip Insure" },
        { icon: "/spatula.png", text: "Restaurant", head: "The Business Kit" },
        { icon: "/diamonds.png", text: "Techlify", head: "Cafe Nostra Cosa" },
        { icon: "/spatula.png", text: "Restaurant", head: "SadaPay Banking" },
        { icon: "/diamonds.png", text: "Techlify", head: "Extra Card 1" },
        { icon: "/spatula.png", text: "Restaurant", head: "Extra Card 2" },
    ];

    const banksData = [
        { icon: "/code.png", text: "Codelify", head: "Trip Insure" },
        { icon: "/diamonds.png", text: "Techlify", head: "The Business Kit" },
        { icon: "/code.png", text: "Codelify", head: "Cafe Nostra Cosa" },
        { icon: "/diamonds.png", text: "Techlify", head: "SadaPay Banking" },
        { icon: "/code.png", text: "Codelify", head: "Extra Card 1" },
        { icon: "/code.png", text: "Codelify", head: "Extra Card 2" },
    ];

    return (
     
        <div className='mx-4 md:mx-7 rounded-2xl bg-[#E7F4EF] pb-30 md:pb-20 pt-10 md:pt-20 flex flex-col relative isolate'>
            
            {/* Header with Custom Navigation */}
            <div className='flex flex-col md:flex-row justify-between items-center px-6 lg:px-34 md:px-15 mb-10 gap-6 relative z-30'>
                <p className='font-semibold text-[28px] md:text-[38px] text-center md:text-left'>
                    Best in Travel Insurance Company
                </p>
                
                <div className='flex gap-2.25'>
                    <button 
                        onClick={() => swiperRef.current?.slidePrev()}
                        className='w-10 h-10 bg-[#04DA8D] rounded-full flex justify-center items-center active:scale-95 transition-all cursor-pointer shadow-sm'
                    >
                        <MdKeyboardArrowLeft className='h-8 w-8 text-[#FFFFFF]'/>
                    </button>
                    <button 
                        onClick={() => swiperRef.current?.slideNext()}
                        className='w-10 h-10 bg-[#17253F] rounded-full flex justify-center items-center active:scale-95 transition-all cursor-pointer shadow-sm'
                    >
                        <MdKeyboardArrowRight className='h-8 w-8 text-[#FFFFFF]'/>
                    </button>
                </div>
            </div>

            {/* Responsive Swiper Section */}
            <div className='px-6 md:px-15 lg:px-34 mb-20 relative z-20'>
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={false}
                    allowTouchMove={true}
                    modules={[Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 }
                    }}
                >
                    {cardData.map((item, index) => (
                        <SwiperSlide key={index} className="h-auto">
                            <Card
                                cardIcon={item.icon}
                                cardText={item.text}
                                cardHead={item.head}
                                index={index}
                                cardStyle='bg-[#FFFFFF] rounded-2xl px-4 pt-4 pb-7 text-left h-full shadow-sm'
                                topStyle='bg-[#EFF3F7] border border-[#17253F33] rounded-xl flex justify-center items-center h-22.5 mb-4 px-4 gap-3'
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            
            <p className='font-semibold text-[28px] md:text-[38px] text-center mb-12 px-6 relative z-10'>
                Top Verified Banks
            </p>
            
            {/* Marquee Section */}
            <div className='lg:pl-34 md:pl-15 pl-6 mb-20 relative z-10'>
                <Marquee pauseOnHover={true} speed={40}>
                    {banksData.map((item, index) => (
                        <Card
                            key={index}
                            cardIcon={item.icon}
                            cardText={item.text}
                            cardHead={item.head}
                            index={index}
                            cardStyle='bg-[#FFFFFF] rounded-2xl px-4 pt-4 pb-7 text-left h-full ml-6 w-[260px] md:w-[280px]'
                            topStyle='bg-[#EFF3F7] border border-[#17253F33] rounded-xl flex justify-center items-center h-22.5 mb-4 px-4 gap-3'
                        />
                    ))}
                </Marquee>
            </div>

          
            <div className="absolute left-0 -bottom-60 right-0 flex justify-center">
                <Trusty />
            </div>
        </div>
    )
}

export default Insurance;
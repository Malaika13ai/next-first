"use client"
import React, { useRef } from 'react'
import Card from '@/components/Card';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
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
    
    ];

    return (
        <div className='mx-7 rounded-2xl bg-[#E7F4EF] pb-60 pt-20 flex flex-col relative -z-3'>
 
            <div className='flex justify-between items-center px-34 mb-10'>
                <p className='font-semibold text-[38px]'>Best in Travel Insurance Company</p>
                <div className='flex gap-2.25'>
               
                    <button 
                        onClick={() => swiperRef.current?.slidePrev()}
                        className='w-10 h-10 bg-[#04DA8D] rounded-full flex justify-center items-center active:scale-95 transition-transform'
                    >
                        <MdKeyboardArrowLeft className='h-8 w-8 text-[#FFFFFF]'/>
                    </button>
                    <button 
                        onClick={() => swiperRef.current?.slideNext()}
                        className='w-10 h-10 bg-[#17253F] rounded-full flex justify-center items-center active:scale-95 transition-transform'
                    >
                        <MdKeyboardArrowRight className='h-8 w-8 text-[#FFFFFF]'/>
                    </button>
                </div>
            </div>

       
            <div className='px-34 mb-20' >
                <Swiper
                    modules={[Navigation]}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    spaceBetween={20}
                    slidesPerView={4} 
                    loop={false}
                    className="mySwiper"
                >
                    {cardData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Card
                                cardIcon={item.icon}
                                cardText={item.text}
                                cardHead={item.head}
                                index={index}
                                cardStyle='bg-[#FFFFFF] rounded-2xl px-4 pt-4 pb-7 text-left h-full'
                                topStyle='bg-[#EFF3F7] border border-[#17253F33] rounded-xl flex justify-center items-center h-22.5 mb-4 px-4 gap-3'
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

  <p className='font-semibold text-[38px] text-center mb-12'>Top Verified Banks</p>
<div className='pl-34'>
  <Marquee
  pauseOnHover={true}
  >
         {banksData.map((item, index) => (
                        
                            <Card
                                cardIcon={item.icon}
                                cardText={item.text}
                                cardHead={item.head}
                                index={index}
                                cardStyle='bg-[#FFFFFF] rounded-2xl px-4 pt-4 pb-7 text-left h-full ml-6'
                                topStyle='bg-[#EFF3F7] border border-[#17253F33] rounded-xl flex justify-center items-center h-22.5 mb-4 px-4 gap-3'
                            />
                        
                    ))}
  </Marquee>
  </div>
  <Trusty />

        </div>
    )
}

export default Insurance
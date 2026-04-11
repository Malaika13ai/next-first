"use client"
import TechCard from '@/src/components/TechCard'
import React from 'react'
import Marquee from 'react-fast-marquee'

function Discover() {
    const techData = [
        { face: "/11.png", name: "Courtney Henry" },
        { face: "/12.png", name: "Arlene McCoy" },
        { face: "/13.png", name: "Ralph Edwards" },
        { face: "/14.png", name: "Robert Fox" },
    ];

    return (
        <div className='pb-20 md:pt-70 pt-180'>
            <p className='font-semibold text-[38px] mb-15 text-center'>Discover What People Like and Dislike</p>
            
            <div className='pl-34 mb-8'>
                <Marquee 
                    speed={40} 
                    pauseOnHover={true} 
                    gradient={false}
                >
                    {techData.map((item, index) => (
                        <TechCard face={item.face} name={item.name} key={index} />
                    ))}
                </Marquee>
            </div>

       
            <div className='pr-34'>
                <Marquee 
                    direction="right" 
                    speed={40} 
                    pauseOnHover={true} 
                    gradient={false}
                >
                    {techData.map((item, index) => (
                        <TechCard face={item.face} name={item.name} key={index} />
                    ))}
                </Marquee>
            </div>
        </div>
    )
}

export default Discover
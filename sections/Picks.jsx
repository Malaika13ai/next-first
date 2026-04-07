"use client"
import Card from '@/components/Card'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Picks() {
    const cardData = [
        { icon: "/click.png", text: "Cloudly", head: "Trip Insure" },
        { icon: "/cirrcle.png", text: "Camera", head: "The Business Kit" },
        { icon: "/click.png", text: "Cloudly", head: "Cafe Nostra Cosa" },
        { icon: "/cirrcle.png", text: "Camera", head: "SadaPay Banking" },
           
    ];

    return (
        <div className='px-10 py-20 bg-white'>
            <style dangerouslySetInnerHTML={{ __html: `
          
                .control-dots {
                    bottom: -30px !important; 
                }

                .carousel-root {
                    margin-bottom: 40px;
                }
            `}} />

            <p className='font-semibold text-[38px] mb-15 text-center'>Top picks for you</p>
            
            <Carousel 
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                infiniteLoop={true}
                centerMode={true}
             
                centerSlidePercentage={25} 
                renderIndicator={(onClickHandler, isSelected, index, label) => {
                    const style = { 
                        marginLeft: 8, 
                        color: isSelected ? "#17253F" : "#D1D5DB", 
                        cursor: "pointer", 
                        display: "inline-block", 
                        fontSize: "32px",
                        transition: "all 0.3s ease" // Animation for clicking
                    };
                    return (
                        <span
                            style={style}
                            onClick={onClickHandler}
                            key={index}
                            role="button"
                            tabIndex={0}
                        >
                            •
                        </span>
                    );
                }}
            >
                {cardData.map((item, index) => (
                    /* Added px-2 here to create the gap seen in your screenshot */
                    <div key={index} className="px-2 pb-4"> 
                        <Card 
                            cardIcon={item.icon}
                            cardText={item.text}
                            cardHead={item.head}
                            index={index}
                            cardStyle='w-full bg-[#EFF3F7] rounded-2xl px-4 pt-4 pb-7 text-left'
                            topStyle='bg-[#FFFFFF] border border-[#17253F33] rounded-xl flex justify-center items-center h-22.5 mb-4 px-4 gap-3'
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default Picks
"use client";
import React from 'react';
import Marquee from 'react-fast-marquee';

const People = () => {
  const teamMembers = [
    { id: 1, name: "Team Member 1", image: "robert.png" },
    { id: 2, name: "Team Member 2", image: "selma.png" },
    { id: 3, name: "Team Member 3", image: "lena.png" },
    { id: 4, name: "Team Member 4", image: "neil.png" },
    { id: 5, name: "Team Member 5", image: "mirte.png" },
  ];

  return (
  
    <section className="pt-15 pb-16  bg-white rounded-t-[50px] relative z-10 "> 
      
      <div className="max-w-7xl mx-auto text-center px-6 md:px-20">
        <h2 className="text-3xl md:text-[36px] font-bold text-black mb-12">
          Trusty Feedback’s Team
        </h2>
      </div>

    <div className="lg:pl-34 md:pl-22 pl-6">
      <Marquee 
        speed={50} 
        gradient={false} 
        pauseOnHover={true}
      >
        {teamMembers.map((member) => (
          <div 
            key={member.id} 
            className="group relative overflow-hidden rounded-[20px] h-87.5 w-70 shrink-0 mx-3 cursor-pointer"
          >
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
               <p className="text-white font-semibold">{member.name}</p>
            </div>
          </div>
        ))}
      </Marquee>
</div>
    </section>
  );
};

export default People;
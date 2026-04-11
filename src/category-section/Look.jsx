import CategoryCard from '@/src/components/CategoryCard';
import SearchBar from '@/src/components/SearchBar'
import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function Look() {

const categoryData = [
    {
      title: "Beauty & Well-Being",
      headerBg: "bg-[#9FE3C8]",
      items: ["African & Pacific Cuisine", "Bars & Cafes", "Chinese & Korean Cuisine", "European Cuisine", "General Restaurants", "Japanese Cuisine"]
    },
    {
      title: "Home Services",
      headerBg: "bg-[#1E293B]",
      titleColor: "text-white",
      items: ["Cleaning Service Providers", "Craftsman", "House Services", "House Sitting & Security", "Moving & Storage", "Plumbing & Sanitation"]
    },
    {
      title: "Shopping & Fashion",
      headerBg: "bg-[#064E3B]",
      titleColor: "text-white",
      items: ["Accessories", "Cultural Goods", "Clothing Rental & Repair", "Costume & Wedding", "Jewelry & Watches", "Malls & Marketplaces"]
    },
        {
      title: "Beauty & Well-Being",
      headerBg: "bg-[#9FE3C8]",
      items: ["African & Pacific Cuisine", "Bars & Cafes", "Chinese & Korean Cuisine", "European Cuisine", "General Restaurants", "Japanese Cuisine"]
    },
    {
      title: "Home Services",
      headerBg: "bg-[#1E293B]",
      titleColor: "text-white",
      items: ["Cleaning Service Providers", "Craftsman", "House Services", "House Sitting & Security", "Moving & Storage", "Plumbing & Sanitation"]
    },
    {
      title: "Shopping & Fashion",
      headerBg: "bg-[#064E3B]",
      titleColor: "text-white",
      items: ["Accessories", "Cultural Goods", "Clothing Rental & Repair", "Costume & Wedding", "Jewelry & Watches", "Malls & Marketplaces"]
    },
        {
      title: "Beauty & Well-Being",
      headerBg: "bg-[#9FE3C8]",
      items: ["African & Pacific Cuisine", "Bars & Cafes", "Chinese & Korean Cuisine", "European Cuisine", "General Restaurants", "Japanese Cuisine"]
    },
    {
      title: "Home Services",
      headerBg: "bg-[#1E293B]",
      titleColor: "text-white",
      items: ["Cleaning Service Providers", "Craftsman", "House Services", "House Sitting & Security", "Moving & Storage", "Plumbing & Sanitation"]
    },
    {
      title: "Shopping & Fashion",
      headerBg: "bg-[#064E3B]",
      titleColor: "text-white",
      items: ["Accessories", "Cultural Goods", "Clothing Rental & Repair", "Costume & Wedding", "Jewelry & Watches", "Malls & Marketplaces"]
    },
        
 
  ];

  return (
    <div className='pb-8 flex items-center px-6 md:px-20 lg:px-10 xl:px-45 flex-col pt-50'>
       <p className="font-semibold text-[32px] text-center text-[#17253F] mb-8 leading-tight ">
        What are you looking for?
        </p>
 
        <SearchBar searchText="Filter" />

            <div className='mt-12 mb-12 flex justify-between items-center w-full flex-col sm:flex-row'>
                      <p className='font-semibold md:text-[38px] sm:text-[30px] text-[26px]'>Explore companies by category</p>
                  <button className='flex items-center py-3.75 px-6.25 gap-1 text-[18px] font-medium border border-[#04DA8D] rounded-4xl h-10.75'>See More <FaArrowRight className='w-2.75 h-3.25 text-[#17253F]'/></button>
                    </div>

                    <div className="bg-white ">
      <div className="max-w-7xl ">
     
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryData.map((cat, index) => (
            <CategoryCard
              key={index}
              title={cat.title}
              items={cat.items}
              headerBg={cat.headerBg}
              titleColor={cat.titleColor}
            />
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Look

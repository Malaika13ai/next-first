"use client"
import Ratings from '@/src/components/Ratings'
import SearchBar from '@/src/components/SearchBar'
import Image from 'next/image'
import React, { useState, useRef } from 'react'
import { FaCamera, FaArrowRight } from 'react-icons/fa';

function ReviewPage() {
    const [rating, setRating] = useState(0);
    const [title, setTitle] = useState('');
    const [comment, setComment] = useState('');
    const [errors, setErrors] = useState({});
    

    const [images, setImages] = useState([null, null, null, null]);
    const fileInputRefs = useRef([]);

    const stars = Array(5).fill(0);


    const handleImageChange = (index, e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const newImages = [...images];
                newImages[index] = reader.result;
                setImages(newImages);
            };
            reader.readAsDataURL(file);
        }
    };

    const validateForm = () => {
        let newErrors = {};
        if (!title.trim()) newErrors.title = "Review title is required";
        if (!comment.trim()) newErrors.comment = "Please enter your comments";
        if (rating === 0) newErrors.rating = "Please select a rating";
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert("Review Submitted Successfully!");
      
        }
    };

    return (
        <div className='pb-20 flex items-center px-4 md:px-10 xl:px-45 flex-col pt-32'>
            <h1 className="font-semibold text-[28px] md:text-[38px] text-center text-[#17253F] mb-8 leading-tight">
                Write a Review on Products & Services
            </h1>

            <SearchBar searchText="Categories" />

     
            <div className='flex flex-col md:flex-row w-full mt-12 shadow-2xl rounded-3xl overflow-hidden'>
                
              
                <div className='w-full md:w-1/2 bg-[#05442E] pt-16 md:pt-20 px-6 md:px-9 flex flex-col items-center justify-between min-h-[400px] '>
                    <div className='z-10 text-center'>
                        <p className='text-[14px] md:text-[16px] text-[#FFFFFF] opacity-80'>Can't Wait to Read Your Thoughts!</p>
                        <p className='font-bold text-[22px] md:text-[28px] text-[#FFFFFF] mt-2 max-w-[350px]'>Select a Company & Contribute Your Feedback Today!</p>
                    </div>

          
                <div className='relative'>
                  <Image src="/man.png" alt="man" height={500} width={500} className='xl:h-88 xl:w-70 h-75 w-61 relative z-10'/>
                  <div className='rounded-full bg-[#0D5D41] xl:w-70 xl:h-67 lg:w-60 lg:h-60 absolute z-0 top-15'/>
                  <Image src="/Vector.png" alt="arrow-twist" height={79} width={73} className='absolute xl:top-35 xl:right-70 md:top-30 md:right-55 md:w-15 md:h-16 lg:w-18 lg:h-20 z-20'/>
                  
                  <div className='bg-white rounded-xl p-3.5 absolute lg:-top-20 lg:right-30 md:-top-25 md:right-50 xl:w-44.5 -top-50  lg:w-35 md:w-30 z-20'>
                    <div className='flex gap-2 mb-0.5 items-center md:w-25 w-30 xl:w-40'>
                      <Image src="/elipse.png" height={36} width={36} alt="elipse" />
                      <p className='font-medium text-[14px] md:text-[12px] lg:text-[14px] text-[#000000] w-25'>How was your order?</p>
                    </div>
                    <p className='text-[#17253F]/50 lg:text-[14px] text-[14px] md:text-[12px] mb-0.5'>Give us a review</p>
                    <Ratings starStyle='text-[#FFFFFF] bg-[#00B57A]/50 p-0.5'/>
                  </div>
          
                  <div className='rounded-4xl bg-[#04DA8D] px-5 py-2.5 absolute top-15 -right-5 z-20'>
                    <p className='text-[10px] text-[#17253F] font-medium mb-1'>It was Delicious!</p>
                    <Ratings starStyle='text-[#FFFFFF] bg-[#17253F] p-0.5'/>
                  </div>
                </div>
                </div>

           
                <form onSubmit={handleSubmit} className='w-full md:w-1/2 bg-[#EFF3F7] pt-12 md:pt-20 px-6 md:px-12 pb-12'>
      
                    <div className="mb-6">
                        <label className="block text-[#1E293B] font-semibold mb-2">
                            Title of your review<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Summarize your review in few words"
                            className={`w-full p-4 rounded-2xl border outline-none bg-white transition-all ${errors.title ? 'border-red-500' : 'border-gray-200'}`}
                        />
                        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
                    </div>

                    <div className="mb-6">
                        <label className="block text-[#1E293B] font-semibold mb-2">
                            Write Review<span className="text-red-500">*</span>
                        </label>
                        <textarea
                            rows="4"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Enter comments"
                            className={`w-full p-4 rounded-2xl border outline-none bg-white resize-none transition-all ${errors.comment ? 'border-red-500' : 'border-gray-200'}`}
                        ></textarea>
                        {errors.comment && <p className="text-red-500 text-xs mt-1">{errors.comment}</p>}
                    </div>

                
                    <div className="mb-8">
                        <label className="block text-[#1E293B] font-semibold mb-4">How do you rate?</label>
                        <div className='flex gap-1'>
                            {stars.map((_, index) => {
                                const starValue = index + 1;
                                const isActive = starValue <= rating;
                                return (
                                    <div
                                        key={index}
                                        onClick={() => setRating(starValue)}
                                        className={`cursor-pointer bg-[#00B57A] w-8 h-8 flex items-center justify-center transition-all ${isActive ? 'opacity-100' : 'opacity-30'}`}
                                    >
                                        <Image src="/Subtract.png" height={15} width={15} alt="star" />
                                    </div>
                                );
                            })}
                        </div>
                        {errors.rating && <p className="text-red-500 text-xs mt-2">{errors.rating}</p>}
                    </div>

                    <hr className="border-gray-200 mb-8" />

           
                    <div className="mb-10">
                        <label className="block text-[#1E293B] font-semibold mb-4">
                            Add Photos <span className="text-gray-400 font-normal">(Optional)</span>
                        </label>
                        <div className="flex flex-wrap gap-3">
                            {images.map((img, i) => (
                                <div key={i} className="relative">
                                    <input 
                                        type="file" 
                                        accept="image/*"
                                        className="hidden"
                                        ref={el => fileInputRefs.current[i] = el}
                                        onChange={(e) => handleImageChange(i, e)}
                                    />
                                    <div
                                        onClick={() => fileInputRefs.current[i].click()}
                                        className="w-16 h-16 md:w-20 md:h-20 border-2 border-dashed border-gray-300 rounded-2xl flex items-center justify-center text-gray-400 bg-white cursor-pointer hover:bg-gray-50 overflow-hidden"
                                    >
                                        {img ? (
                                            <img src={img} alt="preview" className="w-full h-full object-cover" />
                                        ) : (
                                            <FaCamera size={20} />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button 
                        type="submit"
                        className="w-full bg-[#17253F] text-white py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#0F1A2D] transition-transform active:scale-95 shadow-lg"
                    >
                        Submit Review <FaArrowRight size={16} />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ReviewPage;
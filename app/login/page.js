"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'

function LoginPage() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (error) setError(''); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        if (!email) {
            setError('Email is required');
        } else if (!emailRegex.test(email)) {
            setError('Please enter a valid email address');
        } else {
            setError('');
            alert('Form submitted successfully!');
        }
    };

    return (
     
        <div className='pb-20 flex items-center px-6 md:px-12 xl:px-45 flex-col pt-16 md:pt-28'>
            <p className='text-[16px] text-center mb-2'>Log In Now</p>
            <h1 className="font-semibold text-[30px] md:text-[38px] text-center text-[#17253F] mb-8 leading-tight">
                Read. Write. Discover.
            </h1>

            <div className='flex flex-col md:flex-row w-full mt-12 shadow-2xl rounded-3xl overflow-hidden max-w-[1100px]'>
                
       
                <div className='w-full md:w-1/2 relative bg-[#05442E] py-10 md:py-10 px-9 flex flex-col items-center text-center overflow-hidden min-h-[300px] md:min-h-[550px]'>
                    <h2 className='font-bold text-[24px] lg:text-[32px] text-white max-w-[300px] leading-tight z-10'>
                        Be Part of the Millions Giving Feedback Daily!
                    </h2>
                    
              
                    <div className="absolute md:top-40 md:left-12 pointer-events-none">
                         <Image 
                            src="/Vector.png" 
                            alt="arrow-twist" 
                            height={79} 
                            width={73} 
                            className='w-12 h-12 md:w-16 md:h-18 lg:w-20 lg:h-22 opacity-40'
                        />
                    </div>
                </div>

              
                <div className='w-full md:w-1/2 bg-[#EFF3F7] pt-12 pb-12 px-6 md:px-8 lg:px-16 flex flex-col justify-center'>
                    <p className="font-semibold text-[24px] lg:text-[30px] text-center mb-8 leading-tight text-[#17253F]">
                        Log in or sign up below
                    </p>

               
                    <div className='flex justify-center gap-2 lg:gap-3 mb-8'>
                        <button className='bg-white rounded-2xl border border-gray-200 p-3 lg:p-4 hover:shadow-md transition-all flex-1 flex justify-center'>
                            <Image src="/gl.png" alt="google" height={24} width={24} />
                        </button>
                        <button className='bg-[#1877F2] rounded-2xl border border-gray-200 p-3 lg:p-4 hover:shadow-md transition-all flex-1 flex justify-center'>
                            <Image src="/fb-logo.png" alt="facebook" height={24} width={24} />
                        </button>
                        <button className='bg-black rounded-2xl border border-gray-200 p-3 lg:p-4 hover:shadow-md transition-all flex-1 flex justify-center'>
                            <Image src="/apple-logo.png" alt="apple" height={24} width={24} />
                        </button>
                    </div>

                    <div className='flex items-center mb-6 gap-3'>
                        <div className='border-t border-gray-300 flex-grow'></div>
                        <span className='text-gray-400 text-xs font-bold'>OR</span>
                        <div className='border-t border-gray-300 flex-grow'></div>
                    </div>

                    <form onSubmit={handleSubmit} className="w-full">
                        <div className="mb-6">
                            <label className="block text-[#1E293B] font-semibold text-sm mb-2 ml-1">
                                Enter Email Address<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder="name@gmail.com"
                                className={`w-full p-4 rounded-full border outline-none transition-all bg-white text-sm
                                    ${error ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200 focus:border-[#17253F]'}`}
                            />
                            {error && <p className='text-red-500 text-xs mt-2 ml-4'>{error}</p>}
                        </div>

                        <button 
                            type="submit"
                            className="w-full bg-[#17253F] text-white p-4 rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#0F1A2D] transition-transform active:scale-95 shadow-lg shadow-gray-300"
                        >
                            Continue with email <FaArrowRight size={14} />
                        </button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default LoginPage;
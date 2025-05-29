import React from 'react'
import heroimg from '../images/background/car background.jpg'
export const HeroSection = () => {
  return (
    <div>
        <div className=' pt-[5.7vw] bg-black relative' >
            <img src={heroimg} className=' w-full opacity-35 h-[calc(100vh-5.7vw)] object-cover' alt="hero-image" />
            <div className="absolute inset-0 flex flex-col justify-center  bg-opacity-50 text-white px-4   ">
                <h1 className=' text-[clamp(3.5rem,2.5vw,2rem)] font-bold '>Ultimate Protection for Your  <br /> Vehicle's Perfection
                </h1>
                <p className='text-[clamp(0.9rem,2.5vw,1.2rem)] bg-opacity-50 text-neutral-600 '>Premiun Paint Protection Film Solutions for Discerning car <br />
                    Enthusiasts 
                </p>
            </div>
            
            
            
            
        </div>

    </div>
  )
}

import React from 'react';
import Image from 'next/image';
import Pic1 from "@/public/pic1.jpg"
// components/Hero.js
export default function Hero() {
  return (
    <div className="flex items-center justify-between w-[1280px] h-[584px] mx-auto bg-[#2A254B]">
      {/* Left Side (Heading and Button) */}
      <div className="flex flex-col justify-center w-1/2 space-y-6 px-8">
        <h1 className="text-4xl  text-white">
        The furniture brand for the future, with timeless designs
        </h1>
        <button className="bg-[#46406e] text-white w-[170px] h-[56px] px-6 py-3 rounded-lg hover:bg-blue-700 transition">
        View collection
        </button>
        <br/>
        <br/>
        <br/>
        <br/>
        <p className="text-lg text-white">
        A new era in eco friendly furniture with Avelon, the French luxury retail brand
with nice fonts, tasteful colors and a beautiful way to display things digitally 
using modern web technologies.
        </p>
        
      
      </div>

      {/* Right Side (Image) */}
      <div className="w-[520px] h-[584px]">
        <Image
          src={Pic1} // Replace with your image path
          alt="pic1.jpg"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    
  );
}


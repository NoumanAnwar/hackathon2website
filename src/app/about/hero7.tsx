import React from 'react'
import Image from 'next/image'
import Pic9 from "@/public/pic9.jpg"

const Hero7 = () => {
  return (
    <div className="w-[1440px] h-[598px] p-[60px_80px] bg-white gap-4 flex">
    
    <div className="w-[634px] h-[478px] bg-[#2A254B]">
    <h1 className='w-[495] h-[99px] text-4xl text-white flex justify-center py-20'>It started with a small idea</h1>
    <p className='text-white w-[495px] h-[99px] ml-28'>A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>
    <button className="px-6 py-2 ml-56 bg-[#8c84ca] text-[#2A254B] hover:bg-blue-600">
    View collection
  </button>
    </div>
    <div>
      <Image src={Pic9} alt="pic9.jpg" className="w-[630px] h-[478px] object-cover"/>
      </div>
  </div>
  )
}

export default Hero7




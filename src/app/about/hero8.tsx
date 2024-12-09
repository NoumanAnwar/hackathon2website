import React from 'react'
import Image from 'next/image'
import Pic10 from "@/public/pic10.jpg"

const Hero8 = () => {
  return (
    <div className="w-[1440px] h-[598px] p-[60px_80px] bg-white gap-4 flex">
     <div>
      <Image src={Pic10} alt="pic10.jpg" className="w-[630px] h-[478px] object-cover"/>
      </div>

    <div className="w-[634px] h-[478px] bg-white">
    <h1 className='w-[495] h-[99px] text-4xl text-[#2A254B] flex justify-center py-20 ml-24'>Our service isn’t just personal, it’s actually
    hyper personally exquisite</h1>
    <p className='text-[#2A254B] w-[495px] h-[99px] ml-24 py-20'>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
    <p className='text-[#2A254B] ml-24'> Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
    <button className="px-6 py-2 mt-10 ml-40 bg-[#8c84ca] text-[#2A254B] hover:bg-blue-600">
    View collection
  </button>
    </div>
   

  </div>


  )
}

export default Hero8
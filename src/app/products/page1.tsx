import React from 'react'
import Image from 'next/image'
import Pic11 from "@/public/pic11.jpg"

const Page1 = () => {
  return (
    <div className='w-[1440px] h-[209px]'>
    <Image src={Pic11} alt='pic11.jpg'/>
    </div>
  )
}

export default Page1

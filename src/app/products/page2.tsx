import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";

const Page2 = () => {
  return (
    <div className='w-[1440px] h-[64px] flex justify-between items-center'>
      <div className='flex gap-8 ml-10'>
        <h1 className='flex'>Category
        <MdKeyboardArrowDown />   
        </h1>
        <h1 className='flex'>Product type
        <MdKeyboardArrowDown />   
        </h1>
        <h1 className='flex'>Brand
        <MdKeyboardArrowDown />   
        </h1>
        <h1 className='flex'>Price
        <MdKeyboardArrowDown />   
        </h1>
      </div>
      <div className='flex gap-4 mr-10'>
      <h1>Sorting by:</h1>
      <h1 className='flex'>Date added
      <MdKeyboardArrowDown />
      </h1>
      

      </div>
    </div>
  )
}

export default Page2

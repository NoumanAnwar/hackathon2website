import React from 'react'
import { IoIosHeartEmpty } from "react-icons/io"; // React Icons (heart and shopping cart)
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

const Topheader = () => {
  return (

    <header className='flex justify-between'>
        
        <div className="text-4xl gap-5  bg-white text-[#2A254B]">
            <p className='ml-[96px] mr-60'>Avion</p>
        </div>
        <nav className="flex justify-center items-center space-x-6 ">
        <a href="/" className="hover:underline">Home</a>
        <a href="about" className="hover:underline">About Us</a>
        <a href="contact" className="hover:underline">Contact Us</a>
        <a href="products" className="hover:underline">Blog</a>
      </nav>




        <div className="relative"
      >
        
        <input
          type="text"

          placeholder="What are you looking for?" 
          
          className="pl-10 pr-4 py-2 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        /> 

        <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
        <CiSearch size={20}/>
        </span> 
      </div>

        <div className="flex justify-end items-end space-x-4">
        
        <a href="#love" className="text-black hover:text-orange-500">
          <IoIosHeartEmpty size={30} />
        </a>
        <a href="cart" className="text-black hover:text-orange-500">
        <AiOutlineShoppingCart size={30}/>
        </a>
      </div>

       
    </header>

    
  )
}

export default Topheader

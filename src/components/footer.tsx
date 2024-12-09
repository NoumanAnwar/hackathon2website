import React from 'react'

import { RiFacebookLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
    <footer className='bg-[#2A254B] text-white flex justify-last'>
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-5 gap-6'>
    <div>
    <h3 className='text-2xl'>Menu</h3>
    <ul>
    <br/>
        <li className='hover:underline'>New Arrivals</li>
        <br/>
        <li className='hover:underline'>Best sellers</li>
        <br/>
        <li className='hover:underline'>Recently viewed</li>
        <br/>
        <li className='hover:underline'>Popular this week</li>
        <br/>
        <li className='hover:underline'>All products</li>
        <br/>
       
    </ul>
    </div>


    <div>
    <h3 className='text-2xl'>Categories</h3>
    <ul>
    <br/>
        <li className='hover:underline'>Crockery</li>
        <br/>
        <li className='hover:underline'>Furniture</li>
        <br/>
        <li className='hover:underline'>Homeware</li>
        <br/>
        <li className='hover:underline'>Plant pots</li>
        <br/>
        <li className='hover:underline'>Chairs</li>
        <br/>
        <li className='hover:underline'>Crockery</li>
        <br/>


        </ul>
    </div>
<div>
<h3 className='text-2xl'>Our company</h3>
    <ul>
    <br/>
        <li className='hover:underline'>About us</li>
        <br/>
        <li className='hover:underline'>Vacancies</li>
        <br/>
        <li className='hover:underline'>Contact us</li>
        <br/>
        <li className='hover:underline'>Privacy</li>
        <br/>
        <li className='hover:underline'>Returns policy</li>
        <br/>
    </ul>
</div>


<div>
<h3 className='text-2xl'>Join our mailing list</h3>
<div className='flex'>
<input
    
    type="text"
    placeholder="Enter your email"           
    className="pr-4 py-2 bg-[#3e3766] text-gray-5 focus:outline-none focus:ring-2 focus:ring-white relative"
    /> 
   <button className='bg-white text-[#2A254B] pr-10 pl-10 font-bold'>Signup</button>
  </div>


</div>

<div>


    


</div>

    </div>  
    
    </footer>

    <div className='flex justify-between bg-[#2A254B] text-white border-t-2 border-white'>Copyright 2022 Avion LTD
    <div className='flex gap-10' >
     
     <RiFacebookLine size={30} />
     <FiTwitter size={30}/>
     <FaInstagram size={30}/>
     <FaLinkedinIn size={30}/>
     
     </div>


    </div>
    </div>
  )
}

export default Footer

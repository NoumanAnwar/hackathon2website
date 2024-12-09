import React from 'react'
import Image from 'next/image'
import Pic16 from "@/public/pic16.jpg"
import Pic17 from "@/public/pic17.jpg"

const Page = () => {
  return (
    <div className='w-[1440px] h-[949px] bg-gray-100'>
    <div className='w-[400px] h-[50px] p-[64px_188px] px-10 ml-20'>
    <h1 className='text-4xl text-[#2A254B]'>Your shopping cart</h1>
    </div>

    <div className='flex gap-96 ml-44'>
    <h1>Product</h1>
    <h1 className='ml-32'>Quantity</h1>
    <h1 className='ml-2'>Total</h1>
    </div>
    <br/>
    <br/>
<div className='flex'>
<Image src={Pic16} alt='pic16.jpg' width={200} height={100} className='ml-44'/>

<ul className='mt-5 ml-5'>
<li className='text-2xl'>Graystone vase</li>
<li className=''>A timeless ceramic vase with </li>
<h1 className=''>a tri color grey glaze.</h1>
<h1>£85</h1>
</ul>

<div className='flex justify-end gap-96 ml-40 mt-6'>

<h1 className='ml-2'>1</h1>
<h1 className='ml-10'>£85</h1>
</div>
</div>
<br/>
<div className='flex'>
<Image src={Pic17} alt='pic17.jpg' width={200} height={100} className='ml-44'/>

<ul className='mt-5 ml-5'>
<li className='text-2xl'>Graystone vase</li>
<li className=''>A timeless ceramic vase with </li>
<h1 className=''>a tri color grey glaze.</h1>
<h1>£125</h1>
</ul>

<div className='flex justify-end gap-96 ml-40 mt-6'>

<h1 className='ml-2'>1</h1>
<h1 className='ml-8'>£125</h1>
</div>
</div>

<div className='flex justify-end mr-48'>
<h1 className='w-[150px] h-[34px] text-[#4E4D93] text-2xl'>Subtotal</h1>
<h1 className='w-[54px] h-[34px] text-[#2A245B] text-2xl mr-2'>£210</h1>
</div>
<br/>
<p className='text-[#4E4D93] flex justify-end mr-52'>Taxes and shipping are calculated at checkout</p>
<br/>
<div className="w-[170px] h-[56px] flex justify-center items-center ml-[1072px]">
          <button className=" bg-[#2A254B] text-white px-6 py-3 hover:bg-blue-700 transition">Go to checkout</button>
        </div>
</div>


)
}

export default Page
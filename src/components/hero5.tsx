


import Image from "next/image";
import Pic8 from "@/public/pic8.jpg"

export default function Hero5 () {
    return (
        <div className="w-[720px] h-[603px] bg-white">
<div className="w-[536px] h-[0px] text-[#24254B]">

<h1 className="text-2xl ml-24 py-16">
From a studio in London to a global brand with
over 400 outlets
</h1>
<br/>
<br/>
<p className="ml-24 py-10">When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
<button className='bg-[#e9e7f7] text-[#2A254B] pr-10 py-5 pl-10 ml-24 hover:bg-blue-700'>Get in touch</button>

</div>
     
     <div className="w-[720px] h-[603px] ml-[720px]">
        <Image src={Pic8} alt="pic8.jpg"/>
        </div>   
        
</div>   
  
);
  }
  
// components/Hero.js
import Image from "next/image";
import Pic6 from "@/public/pic6.jpg"
import Pic7 from "@/public/pic7.jpg"
import Pic1 from "@/public/pic1.jpg"
export default function Hero3 () {
    return (
      <div className="  relative w-[1440px] h-[844px] mx-auto bg-white">
        <h1 className="w-[217px h-[39px] py-[80px] ml-[80px] text-4xl">Our popular products</h1>
        <div className="flex justify-center space-x-5">
        {/* Image 1 */}
        <Image
          src={Pic6} // Replace with your image path
          alt="pic6.jpg"
          className="w-[630px] h-[375px] "
        />
  
        {/* Image 2 */}
        <Image
          src={Pic1} // Replace with your image path
          alt="pic3.jpg"
          className="w-[305px] h-[375px]"
        />
  
        {/* Image 3 */}
        <Image
          src={Pic7} // Replace with your image path
          alt="pic7.jpg"
          className="w-[305px] h-[375px]"
        />
  
        </div>
        <br/>
<div className="flex gap-32"> 
<h1 className="ml-72">The Poplar suede sofa</h1>

<h1 className="ml-60">The Dandy chair</h1>

<h1 className="ml-24">The Dandy chair</h1>



</div>
<div className="flex gap-32"> 
<p  className="ml-80">£980</p>
<p className="ml-96">£250</p>
<p className="ml-44">£250</p>

</div>
<br/>
<br/>
        <div className="w-[170px] h-[56px] flex justify-center items-center ml-[632px]">
          <button className=" bg-white text-[#2A254B] px-6 py-3 rounded-lg hover:bg-blue-700 transition">View Collection</button>
        </div>
      </div>
  
);
  }
  
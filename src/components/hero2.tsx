// components/Hero.js
import Image from "next/image";
import Pic2 from "@/public/pic2.jpg"
import Pic3 from "@/public/pic3.jpg"
import Pic4 from "@/public/pic4.jpg"
import Pic5 from "@/public/pic5.jpg"
export default function Hero2 () {
    return (
      <div className="  relative w-[1440px] h-[861px] mx-auto bg-gray-100">
        <h1 className="w-[217px h-[39px] py-[80px] ml-[80px] text-4xl">New ceramics</h1>
        <div className="flex justify-center space-x-5">
        {/* Image 1 */}
        <Image
          src={Pic2} // Replace with your image path
          alt="pic2.jpg"
          className="w-[305px] h-[375px] "
        />
  
        {/* Image 2 */}
        <Image
          src={Pic3} // Replace with your image path
          alt="pic3.jpg"
          className="w-[305px] h-[375px]"
        />
  
        {/* Image 3 */}
        <Image
          src={Pic4} // Replace with your image path
          alt="pic4.jpg"
          className="w-[305px] h-[375px]"
        />
  
        {/* Image 4 */}
        <Image
          src={Pic5} // Replace with your image path
          alt="pic5.jpg"
          className="w-[305px] h-[375px]"
        />
        </div>
        <br/>
<div className="flex gap-32"> 
<h1 className="ml-40">The Dandy chair</h1>

<h1 className="ml-24">Rustic Vase Set</h1>

<h1 className="ml-24">The Silky Vase</h1>

<h1 className="ml-24">The Lucy Lamp</h1>

</div>
<div className="flex gap-32"> 
<p  className="ml-52">£250</p>
<p className="ml-40">£155</p>
<p className="ml-44">£125</p>
<p className="ml-44">£399</p>
</div>
<br/>
<br/>
        <div className="w-[170px] h-[56px] flex justify-center items-center ml-[632px]">
          <button className=" bg-white text-[#2A254B] px-6 py-3 rounded-lg hover:bg-blue-700 transition">View Collection</button>
        </div>
      </div>
  
);
  }
  
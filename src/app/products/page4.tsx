// components/Hero.js
import Image from "next/image";
import Pic12 from "@/public/pic12.jpg"
import Pic13 from "@/public/pic13.jpg"
import Pic14 from "@/public/pic14.jpg"
import Pic15 from "@/public/pic15.jpg"

export default function Page4 () {
    return (
      <div className="  relative w-[1440px] h-[510px] mx-auto bg-gray-100">
       
        <div className="flex justify-center space-x-5">
        {/* Image 1 */}
        <Image
          src={Pic12} // Replace with your image path
          alt="pic12.jpg"
          className="w-[305px] h-[375px] "
        />
  
        {/* Image 2 */}
        <Image
          src={Pic13} // Replace with your image path
          alt="pic13.jpg"
          className="w-[305px] h-[375px]"
        />
  
        {/* Image 3 */}
        <Image
          src={Pic14} // Replace with your image path
          alt="pic14.jpg"
          className="w-[305px] h-[375px]"
        />
  
        {/* Image 4 */}
        <Image
          src={Pic15} // Replace with your image path
          alt="pic15.jpg"
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
      </div>
  
);
  }
  
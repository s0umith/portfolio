"use client"
import Image from "next/image";
import { useState } from "react";
import gifBackground from "@/public/4K_11.gif"
import pic from "@/public/pic1.jpg"
import Footer from "@/components/small-components/footer";


export default function Home() {
  const [bgLoaded, setBgLoaded] = useState(false);
  return (
    <div className="w-screen bg-black" style={{height:'100vh '}}>
        <div className="h-full w-full bg-cover bg-no-repeat flex flex-col justify-center items-center -z-50 "
          style={{ backgroundImage: `url(${gifBackground.src})` }}>
            <h1 className="name-gradient text-7xl font-bold ">Naveen Teja Beerakuppam</h1>
            <div className="w-full h-20 "></div>
        </div>
        <div className="w-full h-full  px-20 flex flex-col justify-start items-center gap-10">
            <div className="w-4/5 h-16per flex gap-20">
              <div className="w-[8px] h-full">
                <div className="w-2/5 h-3/5 bg-lightBlue"></div>
                <div className="w-full h-2/5 bg-lightBlue"></div>
              </div>
              <div className="h-full flex flex-col justify-around py-2">
                <h4 className="text-2xl text-lightBlue font-semibold">About Me</h4>
                <span className="text-white text-xl">A mix of determination&lsquo; panic&lsquo; and a playlist for every mood swing &hellip;</span>
              </div>
            </div>
            <div className="w-4/5 h-45/100 flex justify-between items-center flex-wrap">
              <div className="w-2/5 h-full ml-8 overflow-hidden rounded-lg">
                <Image className="w-full h-full object-cover" src={pic} alt="image"/>
              </div>
              <div className="w-1/2 h-full text-white text-lg flex flex-col gap-4">
                <span>I am a final  year student in Dual Degree from IIT Kanpur in the Aerospace Engineering Department. My academic journey has been driven by a strong passion for technology&lsquo;  where I&rsquo;ve consistently sought innovative applications of Artificial Intelligence.</span>
                <span>My research focus centers on Large Language Models to enhance natural language inference for clinical trials on breast cancer. I am dedicated to perform impactful research to advance technology for the betterment of society.</span>
              </div>
            </div>
        </div>
        <Footer/>
    </div>
  );
}

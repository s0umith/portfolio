"use client"

import Image from "next/image";
import { useState } from "react";
import gifBackground from "@/public/pwm1.gif";
import pic from "@/public/pic11.jpg";
import Footer from "@/components/small-components/footer";
import { homePageData ,aboutMe} from "@/lib/constants";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <div className="relative h-screen w-full flex flex-col justify-center items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-65" 
          style={{ backgroundImage: `url(${gifBackground.src})` }}
        />
        <div className="relative z-10 text-center">
          <h1 className="name-gradient text-6xl md:text-7xl font-semibold">
            Naveen Teja Beerakuppam
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 space-y-10 ">
        <div className="w-4/5 mx-auto flex  gap-10 ">
          <div className=" w-[10px] h-[120px]">
            <div className="w-2/5 h-3/5 bg-lightBlue"></div>
            <div className="w-full h-2/5 bg-lightBlue"></div>
          </div>
          <div className="flex flex-col justify-center py-1 gap-4 ">
            <h4 className="text-xl text-lightBlue font-medium">About Me</h4>
            <span className="text-white text-2xl">{aboutMe}</span>
          </div>
        </div>

        <div className="w-90/100 mx-auto flex flex-col md:flex-row justify-center items-start gap-8">
          <div className="w-full md:w-45/100  rounded-lg overflow-hidden opacity-85">
            <Image 
              src={pic} 
              alt="Profile" 
              className="w-full h-full object-cover rounded-xl" 
              priority 
            />
          </div>
          <div className="w-full md:w-1/2 text-white  text-base space-y-6 mt-5 ">
            {homePageData.map((value,i) => (
              <p key={i} className="indent-10">{value}</p>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
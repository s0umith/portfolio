"use client"
import Image from "next/image";
import { useState } from "react";
import gifBackground from "@/public/4K_11.gif"
import pic from "@/public/pic11.jpg"
import Footer from "@/components/small-components/footer";
import { homePageData } from "@/lib/constants";


export default function Home() {
  const [bgLoaded, setBgLoaded] = useState(false);
  return (
    <div className="w-screen bg-black" style={{height:'100vh '}}>
        <div className="h-full  w-full bg-cover bg-no-repeat flex flex-col justify-center items-center -z-50 "
          style={{ backgroundImage: `url(${gifBackground.src})` }}>
            <h1 className="name-gradient text-4xl md:text-7xl font-bold text-center">Naveen Teja Beerakuppam</h1>
            <div className="w-full h-20 "></div>
        </div>
        <div className="w-full h-full px-8 md:px-20 md:my-10 flex flex-col justify-start items-center gap-10">
            <div className="  md:w-4/5 h-16per flex md:gap-20 gap-4">
              <div className="w-[10px] h-full">
                <div className="w-2/5 h-3/5 bg-lightBlue"></div>
                <div className="w-full h-2/5 bg-lightBlue"></div>
              </div>
              <div className="h-full flex flex-col justify-around py-2">
                <h4 className="text-xl md:text-2xl text-lightBlue font-semibold">About Me</h4>
                <span className="text-white text-base md:text-xl">{homePageData.AboutMe}</span>
              </div>
            </div>
            <div className=" w-full md:w-4/5 h-45/100 flex justify-between items-center flex-wrap gap-4">
              <div className="w-full md:w-2/5 h-full md:ml-8 overflow-hidden rounded-lg">
                <Image className="w-full h-full object-cover rounded-xl" src={pic} alt="image"/>
              </div>
              <div className="w-full md:w-1/2 h-full text-white text-base md:text-lg flex flex-col gap-4">
                <span className="indent-10">{homePageData.Intro1}</span>
                <span className="indent-10">{homePageData.Intro2}</span>
                <span className="indent-10">{homePageData.Intro3}</span>
              </div>
            </div>
        </div>
        <div className="w-full h-10 mt-10">
            <Footer/>
        </div>
    </div>
  );
}

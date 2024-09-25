"use client"
import ExperienceCard from "@/components/reusable-ui/experience-card"
import Footer from "@/components/small-components/footer"
import { experienceData } from "@/lib/constants"

export default function Page(){
    return(
        <div className="w-screen h-screen">
                <div className="w-full h-1/3 flex justify-center items-center ">
                    <h2 className="gradient-text text-6xl font-semibold ">EXPERIENCE</h2>
                </div>
                <div className="w-full h-auto flex flex-col justify-start items-center gap-20">
                    {experienceData.map((data,i)=>(
                        <ExperienceCard data={data} index={i} key={i}/>
                    ))}
                </div>
                <div className="w-full h-10 mt-10">
                    <Footer/>
                </div>
        </div>
    )
}
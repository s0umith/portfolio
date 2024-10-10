"use client"
import DecorTrapLine from "@/components/reusable-ui/trrap-line"
import qa from "@/public/qa.png"
import Image from "next/image"
import { Intern1Skills } from "@/lib/constants"
import { ExperienceCardProps } from "@/lib/interface"


export default function ExperienceCard({data,index}: ExperienceCardProps){
    return(
        <div className={`w-90/100 flex justify-between flex-wrap items-center gap-6 ${index%2 != 0 ? 'flex-row-reverse':'flex-row'}`}>
            <div className="w-full md:w-1/2 flex flex-col gap-2">
                    <div className="flex flex-col gap-2">
                        <DecorTrapLine/>
                        <div className="flex flex-col">
                            <h3 className="text-xl md:text-2xl font-bold text-white">{data.internRole}</h3>
                            <h3 className="text-lg md:text-2xl  font-semibold text-white">{data.companyName}</h3>
                            <h5 className="text-sm md:text-base text-slate-300 my-1">{data.period}</h5>
                        </div>
                    </div>
                    <span className="text-white text-xs md:text-base indent-10 font-medium">{data.info}</span>
                    <div className="w-full mt-2 flex gap-2 flex-wrap">
                        {data.skills.map((val,i)=>(
                            <span key={i} className=" md:text-sm text-xs cursor-pointer px-3 pt-1.5 pb-1 border border-gray-700 bg-grayBlueBg text-white after:transition after:duration-500 after:ease-in-out hover:text-black hover:bg-lightBlue  font-medium rounded-3xl">{val}</span>
                        ))}
                        
                    </div>
            </div>
            <div className="w-full md:w-45/100 h-full">
                <Image className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-110 hover:-translate-x-4" src={qa} alt="img"/>
            </div>
        </div>
    )
}
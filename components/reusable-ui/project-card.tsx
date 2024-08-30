"use client"
import DecorTrapLine from "@/components/reusable-ui/trrap-line"
import qa from "@/public/qa.png"
import Image from "next/image"
import { Intern1Skills } from "@/lib/constants"


export default function ProjectCard(){
    
    return(
        <div className="w-90/100 h-3/5 flex justify-between gap-6 ">
            <div className="w-55/100 h-full  flex flex-col gap-6 py-2">
                <DecorTrapLine/>
                <div className="w-full h-full flex flex-col ">
                    <h3 className="text-3xl font-bold text-white">Ai Tech Intern</h3>
                    <h3 className="text-3xl font-bold text-white">SS Wealthserv Technologies</h3>
                    <h5 className="text-base text-slate-300 my-3">October 2023 &ndash; December 2023</h5>
                    <span className="text-white text-base indent-6 ">I architected and implemented a schema in MongoDB&lsquo; enhancing the data retrieval performance by 30%. I designed and implemented RESTful API endpoints&lsquo; enabling merchants to do CRUD operations for apparel inventory&lsquo; incorporating advanced search functionality with customizable filters in the Express.js framework. I optimized the integration between the backend API and the React.js frontend&lsquo; and resolved some major bugs in the frontend&lsquo; resulting in a 10% performance enhancement and improved user experience. Also contributed in implementing cloth segmentation&lsquo; human parsing for the ML model.</span>
                    <div className="w-full mt-2 flex gap-2 flex-wrap">
                        {Intern1Skills.map((val,i)=>(
                            <span key={i} className="px-4 py-1.5 bg-lightBlue text-black text-base rounded-3xl">{val}</span>
                        ))}
                        
                    </div>
                </div>
            </div>
            <div className="w-1/2 h-4/5">
                <Image className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-110 hover:-translate-x-4" src={qa} alt="img"/>
            </div>
        </div>
    )
}
"use client"
import ProjectCard from "@/components/reusable-ui/project-card"
export default function Page(){
    return(
        <div className="w-screen h-screen">
            <div className="w-full h-2/5 flex justify-center items-center ">
                <h2 className="gradient-text text-6xl font-semibold ">PROJECTS</h2>
            </div>
            <div className="w-full h-full flex flex-col justify-start items-center gap-20">
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
        </div>
    )
}
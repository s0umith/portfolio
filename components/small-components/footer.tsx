import { socialMedia } from "@/lib/constants"
import Image from "next/image"
import Link from "next/link"

export default function Footer(){
    return(
        <footer className="pt-20 w-full flex flex-col text-white items-center gap-2 py-4">
            <div className="flex gap-2 md:gap-4">
                { socialMedia.map((data,i)=>(
                    <Link href={data.url} key={i}  rel="noopener noreferrer" target="_blank">
                        <div className="p-1 rounded-full cursor-pointer">
                            <Image className=" w-5 h-5  md:w-6 md:h-6  flex" src={data.svgPath} alt="img" width={8} height={8}/>
                        </div>
                    </Link>
                ))}
            </div>
            <span className="text-xs md:text-sm font-normal">@2025 by Soumith Batta. All rights reserved.</span> 
        </footer>
    )
}
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import img from "@/public/vercel.svg"
import { NavbarItems } from "@/lib/constants"



  

const Navbar = () => {
    const pathname = usePathname();
    console.log(pathname);

    return(
        <div className="w-full h-[50px] px-12 bg-transparent flex justify-between items-center">
            <div className=" h-full w-[60px]">
                <Image className="w-full h-full object-cover" src={img} alt="img"/>
            </div>
            <div className="w-[600px] h-full text-white flex justify-between items-center text-lg">
                {NavbarItems.map((item,index)=>(
                    <span key={index} className={`hover:text-lightBlue cursor-pointer hover:font-medium ${(pathname === item.head)?'text-lightBlue':''}`}><Link href={item.reff}>{item.head}</Link></span>
                ))}
            </div>
        </div>
    )
}

export default Navbar
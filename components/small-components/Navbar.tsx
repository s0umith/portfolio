"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import img from "@/public/logo.svg"
import { NavbarItems } from "@/lib/constants"
import { useEffect, useState } from "react"
import logo from "@/public/l1.svg"


  

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    console.log(pathname);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return(
        <div className="w-full h-[80px] pr-12 bg-black flex justify-between items-center">
            <div className=" h-full w-[160px] overflow-hidden cursor-pointer">
                <Image className="w-full h-full object-cover" src={logo} alt="img" width={6} height={6}/>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex w-[600px] h-full text-white justify-between items-center text-lg ">
                {NavbarItems.map((item,index)=>(
                    <span key={index} className={`hover:text-lightBlue cursor-pointer  relative w-fit block after:block after:rounded-e-lg after:content-[''] after:absolute after:h-[2px] after:bg-lightBlue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:ease-in-out after:origin-left ${(pathname === item.head)?'text-lightBlue':''}`}>
                        <Link href={item.reff}>{item.head}</Link>
                    </span>
                ))}
            </div>
            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-white focus:outline-none"
                onClick={toggleMenu}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
             {/* Mobile Menu Overlay */}
             {isMobile && isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
                    <div className="fixed inset-y-0 right-0 max-w-full w-full h-full  shadow-xl z-50 flex flex-col justify-start items-center pt-20 px-4">
                        {/* <button
                            className="absolute top-4 right-0 text-gray-600"
                            onClick={toggleMenu}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button> */}
                        {NavbarItems.map((item, index) => (
                            <span key={index} className={ `text-lg hover:text-lightBlue  text-white cursor-pointer  relative w-fit h-5% block after:block after:rounded-e-lg after:content-[''] after:absolute after:h-[2px] after:bg-lightBlue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:ease-in-out after:origin-left ${(pathname === item.head)?'text-lightBlue':''}`}>
                                <Link key={index}
                                    href={item.reff}
                                    className={` py-2 `}
                                    onClick={toggleMenu}>
                                        {item.head}
                                </Link>
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar
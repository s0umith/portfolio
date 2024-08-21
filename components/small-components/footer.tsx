import Image from "next/image"
import fb from "@/public/social-media/fb.svg"
import call from "@/public/social-media/mobile.svg"
import linkedin from "@/public/social-media/linkedin.svg"
import mail from "@/public/social-media/mail.svg"
import Insta from "@/public/social-media/insta.svg"
import twitter from "@/public/social-media/twitter.svg"
import { saeSocialMedia } from "@/lib/constants"
import Link from "next/link"

export default function FooterCustom(){
    return(
        <div className="w-98/10 h-full flex flex-col justify-end items-center gap-2 py-4">
            <div className="w-full h-auto flex gap-4 items-center justify-center mt-1">
                    <Link href={saeSocialMedia.insta}  rel="noopener noreferrer" target="_blank">
                        <div className="p-3 rounded-full bg-[#161616] cursor-pointer">
                            <Image className="w-6 h-6" src={Insta} alt="fb" />
                        </div>
                    </Link>
                    <Link href={saeSocialMedia.mail}  rel="noopener noreferrer" target="_blank">
                        <div className="p-3 rounded-full bg-[#161616] cursor-pointer">
                            <Image className="w-6 h-6" src={mail} alt="fb" />
                        </div>
                    </Link>
                    <Link href={saeSocialMedia.linkedin}  rel="noopener noreferrer" target="_blank">
                        <div className="p-3 rounded-full bg-[#161616] cursor-pointer">
                            <Image className="w-6 h-6" src={linkedin} alt="fb" />
                        </div>
                    </Link>
                    <Link href={saeSocialMedia.twitter}  rel="noopener noreferrer" target="_blank">
                        <div className="p-3 rounded-full bg-[#161616] cursor-pointer">
                            <Image className="w-6 h-6" src={twitter} alt="fb" />
                        </div>
                    </Link>
                </div>
            <div className="w-full h-[1px] rounded-lg bg-[#E9F5FE]"></div>
            <span className="text-lightBlue text-base font-normal">Copyright © 2024-25 SAE, IIT Kanpur | Designed by Web Head</span>
        </div>
    )
}
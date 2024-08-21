import Image from "next/image"
import loadingSvg from "@/public/loader.svg"

export default function Loading(){
    return(
        <div className="flex items-center justify-center bg-black w-screen h-screen">
            <div className="relative w-48 h-48">
                <Image src={loadingSvg} alt="loader" layout="fill" objectFit="cover" />
            </div>
        </div>
    )
}
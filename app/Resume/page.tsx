"use client"
import Footer from "@/components/small-components/footer"
export default function Page(){
    return(
        <div className="w-screen h-screen">
            <div className="w-full h-1/4 md:h-1/3 flex justify-center items-center ">
                <h2 className="gradient-text text-4xl md:text-6xl font-semibold ">RESUME</h2>
            </div>
            <div className="w-full h-[720px] flex justify-center">
                <div className="w-95/100 h-full bg-gray-100 flex justify-center items-center border border-gray-400">
                    <iframe
                        src='Resume.pdf'
                        className="w-full h-full"
                        title="PDF Viewer"
                    />
                </div>
            </div>
            <Footer/>
        </div>
    )
}
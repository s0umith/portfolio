"use client"
import type { Metadata } from "next";
import { Oxanium as FontOxanium,Poppins } from "next/font/google";
import Navbar from "@/components/small-components/Navbar";
import { cn } from "@/lib/utils"
import { lazy, Suspense, useEffect, useState } from "react";
import "./globals.css";
import Loading from "./loading";
import { Toaster } from "@/components/ui/toaster"




const fontSans = FontOxanium({
  subsets: ["latin"],
  variable: "--font-sans",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [bgLoaded, setBgLoaded] = useState(true);

  
  return (
    
    <html lang="en" suppressHydrationWarning={true}>
      
      <body className={cn(
          "h-screen w-full font-sans antialiased bg-black",
          poppins.variable
          )} suppressHydrationWarning={true}
      >
      {!bgLoaded ? (
          <Loading />
        ) : (
          <>
            <header><Navbar/></header>
            <main className="bg-black">{children}</main>
          </>
          
        )} 
      <Toaster/>
      </body>
    </html>
  );
}

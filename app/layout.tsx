"use client"
import type { Metadata } from "next";
import { Oxanium as FontOxanium } from "next/font/google";
import Navbar from "@/components/small-components/Navbar";
import { cn } from "@/lib/utils"
import { lazy, Suspense, useEffect, useState } from "react";
import "./globals.css";
import Loading from "./loading";
import { Toaster } from "@/components/ui/toaster"
import Head from "next/head";




const fontSans = FontOxanium({
  subsets: ["latin"],
  variable: "--font-sans",
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
          fontSans.variable
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

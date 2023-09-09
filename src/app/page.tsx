"use client"
import { useEffect, useState } from "react";

import NavMenu from "@/components/NavMenu/NavMenu";
import Header from "@/components/Header/Header";
import About from "@/components/Sections/About";
import Carreer from "@/components/Sections/Carreer";
import Skills from "@/components/Sections/Skills";
import Work from "@/components/Sections/Work";
import Contact from "@/components/Sections/Contact";

export default function Home() {
  const [isMenuActive, setIsMenuActive] = useState(false)

  // Smooth Scroll using locomotive scroll
  useEffect(() => {
    (
        async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default;
            const locomotiveScroll = new LocomotiveScroll();
        }
    )()
  }, [])
  
  
  return (
    <main>
        <NavMenu isActive={isMenuActive} />
        <Header isActive={isMenuActive} setIsActive={setIsMenuActive}/>
        <About />
        <Carreer />
        <Skills />
        <Work />
        <Contact />
    </main>
  )
}
"use client"
import { useEffect, useState } from "react";

import NavMenu from "@/components/NavMenu/NavMenu";
import Header from "@/components/Header/Header";
import Hero from "@/components/Sections/Hero";
import About from "@/components/Sections/About";
import Profession from "@/components/Sections/Profession";
import Work from "@/components/Sections/Work";
import Contact from "@/components/Sections/Contact";
import Cursor from "@/components/Cursor/Cursor";

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
      <Cursor />
      <NavMenu isActive={isMenuActive} />
      <Header isActive={isMenuActive} setIsActive={setIsMenuActive} />
      <Hero />
      <About />
      <Profession />
      <Work />
      <Contact />
    </main>
  );
}
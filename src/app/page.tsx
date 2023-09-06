"use client"
import { useState } from "react";

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import AboutSection from "./(index)/AboutSection";
import CarreerSection from "./(index)/CarreerSection";

export default function Home() {
  const [isMenuActive, setIsMenuActive] = useState(false)
  
  return (
    <main className="h-[300vh]">
        {/* <NavBar /> */}
        <Header isActive={isMenuActive} setIsActive={setIsMenuActive}/>
        <AboutSection />
        <CarreerSection />
    </main>
  )
}

// className='container text-[82px] tracking-[-4px]'
// <span className="font-semibold">Mariano</span>Pedrini
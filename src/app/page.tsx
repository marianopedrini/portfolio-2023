'use client';
import { useEffect, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';

import NavMenu from '@/components/NavMenu/NavMenu';
import Header from '@/components/Header/Header';
import Hero from '@/components/Sections/Hero/Hero';
import About from '@/components/Sections/About/About';
import Profession from '@/components/Sections/Profession';
import Work from '@/components/Sections/Work';
import Contact from '@/components/Sections/Contact';
import Cursor from '@/components/Cursor/Cursor';
import Loader from '@/components/Loader/Loader';

import { useGsapContext } from '@/hooks/useGsapContext';

export default function Home() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [timeline, setTimeline] = useState<any>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        delay: 0.5,
        onComplete: () => setIsLoading(false),
      });

      setTimeline(tl);
    });

    return () => context.revert();
  }, []);

  // Smooth Scroll using locomotive scroll
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main>
      {/* <Cursor /> */}
      {/* {isLoading ? (
        <Loader timeline={timeline} />
      ) : (
        <>
          <NavMenu isActive={isMenuActive} />
          <Header isActive={isMenuActive} setIsActive={setIsMenuActive} />
          <Hero />
          <About />
          <Profession />
          <Work />
          <Contact />
        </>
      )} */}
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

'use client';
import { useEffect, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';

import Loader from '@/components/Loader/Loader';
import Header from '@/components/Header/Header';
import Hero from '@/components/Sections/Hero/Hero';
import About from '@/components/Sections/About/About';
import Profession from '@/components/Sections/Profession/Profession';
import Work from '@/components/Sections/Work/Work';
import Contact from '@/components/Sections/Contact/Contact';
import Cursor from '@/components/Cursor/Cursor';

import { useGsapContext } from '@/hooks/useGsapContext';

export default function Home() {
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
      {isLoading ? (
        <Loader timeline={timeline} />
      ) : (
        <>
          <Header />
          <Hero />
          <About />
          <Profession />
          <Work />
          <Contact />
        </>
      )}

      {/* <Header />
      <Hero />
      <About />
      <Profession />
      <Work />
      <Contact /> */}
    </main>
  );
}

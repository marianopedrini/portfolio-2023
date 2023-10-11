'use client';
import { useEffect, useLayoutEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';

import SplashScreen from '@/components/SplashScreen/SplashScreen';
import Header from '@/components/Header/Header';
import Hero from '@/components/Sections/Hero/Hero';
import About from '@/components/Sections/About/About';
import Profession from '@/components/Sections/Profession/Profession';
import Work from '@/components/Sections/Work/Work';
import Contact from '@/components/Sections/Contact/Contact';
import Cursor from '@/components/Cursor/Cursor';


export default function Home() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);
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
      {isLoading && isHome ? (
        <SplashScreen timeline={timeline} />
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
    </main>
  );
}

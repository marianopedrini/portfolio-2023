import { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import SplitType from 'split-type';

import Section from '@/components/Section/Section';
import Grid from '../../Grid/Grid';

import { mainPhrase } from '@/data';

import { animatePhrase, animateArrow } from './animations';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const phraseRef = useRef<HTMLParagraphElement>(null);
  const arrowRef = useRef<HTMLImageElement>(null);
  const timeline = useRef(gsap.timeline());

  useLayoutEffect(() => {
    const splittedPhrase = new SplitType('#mainPhrase', {
      types: 'lines',
    });

    const ctx = gsap.context(() => {
      gsap.set(phraseRef.current, {
        opacity: 1,
      });
      const tl = timeline.current;

      tl.add(animatePhrase(containerRef, splittedPhrase)).add(
        animateArrow(arrowRef)
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <Section extraClasses="flex items-end pt-[20vh] pb-[10vh]" id="hero">
      <div className="container h-full" ref={containerRef}>
        <Grid>
          <p
            id="mainPhrase"
            ref={phraseRef}
            className="opacity-0 text-[44px] leading-none lg:text-6xl lg:col-start-2 lg:col-end-12 group"
          >
            {mainPhrase}
          </p>
          <div className="col-span-full col-start-2 flex items-center">
            <Image
              className="opacity-0 col-start-2 col-end-3 ml-2 mt-10"
              src="/about-arrow.svg"
              alt="Arrow pointing down"
              priority 
              width={14}
              height={73}
              ref={arrowRef}
            />
          </div>
        </Grid>
      </div>
    </Section>
  );
};
export default Hero;

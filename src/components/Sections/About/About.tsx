import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

import Section from '@/components/Section/Section';
import Grid from '../../Grid/Grid';

import { aboutTexts } from '@/data';
import { animateText } from './animations';

const About = () => {
  const containerRef = useRef(null);
  const timeline = useRef(gsap.timeline());

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = timeline.current;

      tl.add(animateText(containerRef));
    });

    return () => ctx.revert();
  }, []);

  return (
    <Section heightFit={true} id="about">
      <Grid extraClasses="container h-full">
        <div
          className="flex flex-col gap-14 lg:col-start-2 lg:col-end-12"
          ref={containerRef}
        >
          {aboutTexts.map((text, index) => (
            <p className="opacity-0 text-2xl md:text-3xl" key={index} data-about-text>
              {text}
            </p>
          ))}
        </div>
      </Grid>
    </Section>
  );
};

export default About;

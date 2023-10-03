import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

import Title from '@/components/Title/Title';
import Section from '@/components/Section/Section';
import WorkWrapper from './WorkWrapper';

import { animateTitle, animateTabs } from './animations';

const Work = () => {
  const workContainerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const timeline = useRef(gsap.timeline());

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = timeline.current;
      
      tl.add(animateTitle(titleRef)).add(animateTabs());
    });

    return () => ctx.revert();
  }, [workContainerRef]);

  return (
    <Section extraClasses="!pb-0" id="work">
      <div className="container grid grid-cols-12 mb-14" ref={workContainerRef}>
        <Title
          title={'Work'}
          color={'white'}
          extraClasses="opacity-0 md:col-start-2"
          forwardedRef={titleRef}
        />
      </div>

      <WorkWrapper />
    </Section>
  );
};

export default Work;

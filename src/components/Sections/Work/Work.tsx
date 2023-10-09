import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

import Title from '@/components/Title/Title';
import Section from '@/components/Section/Section';
import WorksContainer from '@/components/Sections/Work/WorksContainer';

import { animateTitle } from './animations';

const Work = () => {
  const workContainerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      animateTitle(titleRef);
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

      <WorksContainer />
    </Section>
  );
};

export default Work;

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Title from '@/components/Title/Title';
import WorkItem from '@/components/Items/WorkItem';
import Section from '@/components/Section/Section';

import { works } from '@/data';

import { animateTitle, animateCards } from './animations';

const Work = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const timeline = useRef(gsap.timeline());

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      animateTitle(titleRef);
      animateCards(cardContainerRef);
    });

    return () => ctx.revert();
  }, []);

  return (
    <Section id="work">
      <div className="container grid grid-cols-12 mb-14">
        <Title
          title={'Work'}
          color={'white'}
          extraClasses="opacity-0 md:col-start-2"
          forwardedRef={titleRef}
        />
      </div>
      <div
        className="container px-0 grid grid-cols-1 gap-0 sm:grid-cols-2 md:grid-cols-3"
        // style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
        style={{ clipPath: 'circle(0% at 50% 0)' }}
        ref={cardContainerRef}
      >
        {works.map((work) => (
          <WorkItem work={work} key={work.name} />
        ))}
      </div>
    </Section>
  );
};

export default Work;

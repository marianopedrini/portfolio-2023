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
    const context = gsap.context(() => {
      const tl = timeline.current;

      tl.add(animateTitle(titleRef)).add(animateCards(cardContainerRef));
    });

    return () => context.revert();
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

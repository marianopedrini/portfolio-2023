import { useEffect, useLayoutEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

import WorkDescription from '@/components/Sections/Work/WorkDescription';

import { works } from '@/data';
import { animateWorksOnScroll } from './animations';

gsap.registerPlugin(ScrollTrigger);

const WorksContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(()=>{
        animateWorksOnScroll()
    })
  
    return () => ctx.revert()
  }, [])
  return (
    <div className="relative" ref={containerRef}>
      <div>
        {works.map((work, index) => (
          <WorkDescription work={work} index={index} key={work.id} />
        ))}
      </div>
    </div>
  );
};

export default WorksContainer;

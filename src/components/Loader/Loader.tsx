import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import { useGsapContext } from '@/hooks/useGsapContext';

import {
  mainTextAnimation,
  nameAnimation,
  progressAnimation,
  finishAnimation,
} from './animations';

const Loader = ({ timeline }: any) => {
  const mainTextRef = useRef<HTMLDivElement>(null);
  const frontendWordRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const developerWordRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const counterRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    timeline &&
      timeline
        .add(mainTextAnimation(frontendWordRef, developerWordRef, lineRef))
        .add(nameAnimation(nameRef))
        .add(progressAnimation(counterRef), '0')
        .add(finishAnimation(mainTextRef, nameRef, counterRef), '-=1');
  }, [timeline]);

  return (
    <section className="h-screen flex items-center justify-center relative">
      <div className="flex flex-col items-center gap-4">
        <div
          className="flex text-7xl"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
          ref={mainTextRef}
        >
          <div className="overflow-hidden">
            <span
              className="opacity-0 font-semibold block"
              ref={frontendWordRef}
            >
              Frontend
            </span>
          </div>

          <div className="overflow-hidden">
            <span
              className="opacity-0 inline-block w-[4px] h-full bg-white"
              ref={lineRef}
            ></span>
          </div>

          <div className="overflow-hidden">
            <span className="opacity-0 block" ref={developerWordRef}>
              Developer
            </span>
          </div>
        </div>

        {/* Name */}
        <h1 className="opacity-0 text-center text-4xl text-grey" ref={nameRef}>
          Mariano Pedrini
        </h1>

        <p className='p-12 opacity-0 absolute bottom-0 text-2xl' ref={counterRef}>0%</p>
      </div>
    </section>
  );
};
export default Loader;

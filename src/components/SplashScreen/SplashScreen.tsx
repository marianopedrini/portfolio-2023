import { useLayoutEffect, useRef } from 'react';

import {
  mainTextAnimation,
  nameAnimation,
  progressAnimation,
  finishAnimation,
} from './animations';

const SplashScreen = ({ timeline }: any) => {
  const mainTextRef = useRef<HTMLDivElement>(null);
  const frontendWordRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const developerWordRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const counterRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    timeline &&
      timeline
        .add(mainTextAnimation(frontendWordRef, developerWordRef, lineRef))
        .add(nameAnimation(nameRef))
        .add(progressAnimation(counterRef), '0')
        .add(finishAnimation(mainTextRef, nameRef, counterRef), '-=1.5');
  }, [timeline]);

  return (
    <section className="h-[100dvh] flex items-center justify-center relative">
      <div className="flex flex-col items-center gap-2 md:gap-4">
        <div
          className="flex text-3xl md:text-7xl"
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
        <h1 className="opacity-0 text-center text-xl text-grey md:text-4xl" ref={nameRef}>
          Mariano Pedrini
        </h1>

        {/* Counter */}
        <p className='p-12 opacity-0 absolute bottom-0 text-grey md:text-xl' ref={counterRef}>0%</p>
      </div>
    </section>
  );
};
export default SplashScreen;

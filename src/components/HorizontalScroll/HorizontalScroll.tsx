import { useRef } from 'react';
import { useGsapContext } from '@/hooks/useGsapContext';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

type HorizontalScrollProps = {
  children: React.ReactNode;
};

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = ({ children }: HorizontalScrollProps) => {
  const slider = useRef<HTMLDivElement>(null);

  useGsapContext(() => {
    let hScreens = gsap.utils.toArray<HTMLElement>('.h-screen');

    let pauseRatio = 0.1;
    let tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: slider.current,
        pin: true,
        scrub: 1,
        snap: 1 / (hScreens.length - 1),
        end: () => '+=' + slider.current?.offsetWidth,
        // markers: true
      },
    });
    hScreens.forEach((hScreen, i) => {
      if (i) {
        tl.to(
          hScreens,
          {
            xPercent: -100 * i,
          },
          (i - 1) * 0.5 + pauseRatio * i
        );
      }
    });
    tl.to({}, { duration: pauseRatio });

    // background transition
    tl.to(slider.current, {
      backgroundColor: 'red',
      scrollTrigger: {
        trigger: slider.current,
        markers: true,
        start: 'top top',
        end: 'bottom 0%',

        onEnter: () => {
          gsap.to(slider.current, { duration: 1.0, backgroundColor: '#212121' });
        },

        onLeaveBack: () => {
          gsap.to(slider.current, { duration: 1.0, backgroundColor: '#101010' });
        },
      },
    });
  }, [slider]);

  return (
    <div className="h-screen flex" ref={slider}>
      {children}
    </div>
  );
};
export default HorizontalScroll;

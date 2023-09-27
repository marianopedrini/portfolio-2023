import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export const animateText = (containerRef: any) => {
  const texts = gsap.utils.toArray('[data-about-text]');
  const tl = gsap.timeline({});

  texts.forEach((text: any) => {
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: text,
        start: 'top 90%',
        end: 'center 10%',
        toggleActions: 'play reverse play reverse',
        markers: true,
      },
    });
    tl2.fromTo(
      text,
      {
        opacity: 0,
        x: 10,
      },
      {
        opacity: 1,
        x: 0,
      }
    );
  });

  return tl;
};

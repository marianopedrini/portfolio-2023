import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateTitle = (titleRef: any) => {
  gsap.set(titleRef.current, { x: -20 });
  gsap.to(titleRef.current, {
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: titleRef.current,
      start: 'top 80%',
    },
    duration: 2,
  });
};

export const animateCards = (cardContainerRef: any) => {
  gsap.to(cardContainerRef.current, {
    // 'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    'clip-path': 'circle(200% at 50% 0)',
    opacity: 1,
    scrollTrigger: {
      trigger: cardContainerRef.current,
      start: 'top 70%',
    },
    ease: 'power3.in',
    duration: 1,
  });
};

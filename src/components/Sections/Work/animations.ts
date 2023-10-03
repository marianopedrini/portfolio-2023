import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateTitle = (titleRef: any) => {
  const tl = gsap.timeline({});
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

  return tl;
};

export const animateTabs = () => {
  const tl = gsap.timeline();

  gsap.fromTo(
    '#workTabs',
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '#workTabs',
        start: 'top 80%',
      },
    }
  );

  return tl;
};

export const animateDetail = (titleRef: any, imgRef: any) => {
  const tl = gsap.timeline();
  const mm = gsap.matchMedia();

  gsap.set(imgRef.current, { scale: 0.98 });
  gsap.set(titleRef.current, { y: 60 });

  tl.to(imgRef.current, {
    opacity: 1,
    scale: 1,
    duration: 1,
  }).to(
    titleRef.current,
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'back.out(1)',
    },
    '<'
  ).to(
    '#workDetail',
    {
      opacity: 1,
      duration: 1,
      ease: 'back.out(1)',
    },
    '<'
  );

  mm.add('(min-width: 800px)', () => {
    tl.to(
      '#workDetail',
      {
        opacity: 1,
        y: -150,
        duration: 1,
        ease: 'back.out(1)',
      },
      '<'
    );
  });

  return tl;
};

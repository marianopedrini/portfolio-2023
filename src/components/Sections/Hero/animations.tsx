import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

export const animatePhrase = (containerRef: any, splittedPhrase: any) => {
  const phraseLines = splittedPhrase.lines;
  const tl = gsap.timeline({});

  gsap.fromTo(
    phraseLines,
    {
      opacity: 0,
      x: 50,
    },
    {
      opacity: 1,
      x: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 60%',
        end: 'bottom 20%',
        toggleActions: "play reverse play reverse",
      }
    }
  );

  return tl;
};

export const animateArrow = (arrowRef: any) => {
  const tl = gsap.timeline({});
  tl.to(arrowRef.current, {
    opacity: 1,
  }).to(arrowRef.current, {
      y: -10,
      repeat : -1,
      yoyo: true,
      duration: 1
  })
  return tl;
};

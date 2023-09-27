import { gsap } from 'gsap';

export const animatePhrase = (containerRef: any, splittedPhrase: any) => {
  const phraseLines = splittedPhrase.lines;
  const tl = gsap.timeline({});

  tl.fromTo(
    phraseLines,
    {
      opacity: 0,
      x: 50,
    },
    {
      opacity: 1,
      x: 0,
      stagger: 0.2,
    }
  );

  return tl;
};

export const animateArrow = (arrowRef: any) => {
  const tl = gsap.timeline({});
  tl.to(arrowRef.current, {
    opacity: 1,
  });
  return tl;
};

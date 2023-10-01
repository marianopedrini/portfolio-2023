import { gsap } from 'gsap';

export const animateHeader = (iconRef: any, nameLetters: any) => {
  const tl = gsap.timeline();

  tl.fromTo(iconRef.current, {
    y: -50
  }, {
    y: 0,
    opacity: 1
  }).fromTo(nameLetters,{
    y: 25,
  },{
    opacity: 1,
    y: 0,
    stagger: {
        each: 0.01,
        from: "center",
    },
    duration: 0.5
  })
  
  return tl;
};
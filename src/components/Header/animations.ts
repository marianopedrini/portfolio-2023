import { gsap } from 'gsap';

export const animateMenu = (iconRef: any, nameLetters: any) => {
  const tl = gsap.timeline();

  tl.fromTo(iconRef.current, {
    y: -50
  }, {
    y: 0,
    opacity: 1
  }).fromTo(nameLetters,{
    opacity: 0,
    y: 20,
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

import { gsap } from 'gsap';
import { CustomEase } from "gsap/dist/CustomEase";

gsap.registerPlugin(CustomEase);

export const mainTextAnimation = (
  frontendWordRef: any,
  developerWordRef: any,
  lineRef: any
) => {
  const tl = gsap.timeline();

  gsap.to(frontendWordRef.current, {
    opacity: 1,
    duration: 0.1,
  });
  gsap.to(developerWordRef.current, {
    opacity: 1,
    duration: 0.1,
  });

  tl.to(lineRef.current, {
    opacity: 1,
  })
    .fromTo(
      frontendWordRef.current,
      {
        xPercent: 100,
      },
      {
        xPercent: 0,
        duration: 2,
        ease: 'power2.out',
      }
    )
    .fromTo(
      developerWordRef.current,
      {
        xPercent: -100,
      },
      {
        xPercent: 0,
        duration: 2,
        ease: 'power2.out',
      },
      '<.3'
    )
    .to(
      lineRef.current,
      {
        scaleX: 0,
        duration: 0.7,
      },
      '-=0.4'
    );

  return tl;
};

export const nameAnimation = (nameRef: any) => {
  const tl = gsap.timeline();

  tl.to(nameRef.current, {
    opacity: 1,
    duration: 1,
  });

  return tl;
};
// export const progressAnimation = (counterRef: any) => {
//     CustomEase.create("custom", "M0,0 C0,0 0.039,0.024 0.054,0.024 0.055,0.04 0.078,0.066 0.078,0.083 0.093,0.083 0.114,0.144 0.13,0.144 0.13,0.16 0.154,0.149 0.155,0.166 0.17,0.166 0.2,0.218 0.216,0.218 0.216,0.234 0.231,0.221 0.231,0.238 0.246,0.238 0.291,0.308 0.306,0.308 0.307,0.324 0.308,0.316 0.308,0.333 0.323,0.333 0.342,0.388 0.358,0.388 0.358,0.404 0.384,0.399 0.385,0.416 0.4,0.416 0.428,0.466 0.444,0.466 0.444,0.482 0.461,0.483 0.461,0.5 0.477,0.5 0.66,0.686 0.676,0.686 0.676,0.702 0.693,0.733 0.693,0.75 0.708,0.75 0.726,0.774 0.742,0.774 0.742,0.79 0.753,0.816 0.754,0.833 0.769,0.833 0.942,0.88 0.958,0.88 0.958,0.896 1,1 1,1 ");
//     const tl = gsap.timeline({});

//     tl.to(counterRef.current, {
//         opacity: 1
//     }).to(counterRef.current, {
//         textContent: '100%',
//         duration: 3.5,
//         roundProps: 'textContent',
//         ease: 'custom'
//     });

//   return tl;
// }

export const finishAnimation = (mainTextRef: any, nameRef: any, counterRef:any) => {
  const tl = gsap.timeline({
    duration: 2,
    ease: 'power2.out',
  });

  tl.to(mainTextRef.current, {
    'clip-path': 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
    duration: 2,
    ease: 'expo.inOut',
  }).to(nameRef.current, {
    opacity: 0,
    duration: 2,
    ease: 'power2.out'
  }, '-=1').to(counterRef.current, {
    y: -20,
    opacity: 0,
    duration: 1.5
  }, '<')

  return tl;
};


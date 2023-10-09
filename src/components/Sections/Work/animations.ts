import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { works } from '@/data';

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

export const animateWorksOnScroll = () => {
    let mm = gsap.matchMedia()
  const containers = gsap.utils.toArray<HTMLElement>('[data-work-container]');

  mm.add("(min-width: 768px)", () => {
      containers.forEach((container, index) => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            pin: true,
            pinSpacing: false,
            scrub: true,
            // markers: true,
          },
        });
        if (index === 0) {
            gsap.set(container, {
                autoAlpha: 1,
            })
        }
        tl.to(container, {
          autoAlpha: 1,
        }).to(
          container,
          {
            autoAlpha: 0,
          },
          2
        );
      });
  })
};

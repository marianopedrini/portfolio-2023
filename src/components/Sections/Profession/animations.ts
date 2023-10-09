import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateCarreer = (
  sectionRef: any,
  carreerTitleRef: any,
  splittedCarreer: any
) => {
  const tl = gsap.timeline({});
  const carreerItems = gsap.utils.toArray<HTMLElement>('[data-carreer-item]');
  gsap.set(carreerTitleRef.current, { opacity: 1 });

  gsap.fromTo(
    splittedCarreer.chars,
    {
      x: 20,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      stagger: 0.05,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
      },
      duration: 0.6,
    }
  );

  carreerItems.forEach((item) => {
    gsap.fromTo(
      item,
      {
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: item,
          start: 'top 60%',
        },
      }
    );
  });

  return tl;
};

export const animateSkills = (
  sectionRef: any,
  skillsTitleRef: any,
  splittedSkills: any
) => {
  const tl = gsap.timeline({});
  const skillItems = gsap.utils.toArray<HTMLElement>('[data-skill-item]');
  gsap.set(skillsTitleRef.current, { opacity: 1 });

  // main title
  gsap.fromTo(
    splittedSkills.chars,
    {
      y: 10,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
      },
      duration: 0.6,
    }
  );
  // subtitles
  gsap.to('[data-skill-title]', {
    opacity: 1,
    y: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: sectionRef.current,

      start: 'top 60%',
    },
    delay: 1,
  });
  // items
  skillItems.forEach((skill) => {
    gsap.to(skill, {
      autoAlpha: 1,
      y: 0,
      scrollTrigger: {
        trigger: skill,
        start: 'top 60%',
      },
    });
  });


  return tl;
};

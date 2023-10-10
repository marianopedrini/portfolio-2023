import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateContact = (contactSectionRef: any, titleRef: any) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: contactSectionRef.current,
      start: 'top center',
    },
  });
  const subtitles = gsap.utils.toArray('[data-contact-subtitle]');
  const links = gsap.utils.toArray('[data-contact-link]');

  tl.to(titleRef.current, {
    y: 0,
    opacity: 1,
  });
  tl.to(subtitles, {
    y: 0,
    opacity: 1,
    stagger: 0.2,
  });
  tl.to(links, {
    y: 0,
    opacity: 1,
    stagger: 0.1,
  });

  return tl;
};

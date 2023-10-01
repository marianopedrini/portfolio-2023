import { gsap } from 'gsap'

export const animateMenu = (
  bgRef: any,
  menuRef: any,
  contactTitleRef: any
) => {
  const tl = gsap.timeline();

  tl.to(bgRef.current, {
    xPercent: 100,
    ease: "slow(0.7, 0.7, false)",
    duration: 1,
  }).to(menuRef.current, {
    left: 0,
    ease: "power2.out",
    duration: 1,
  }, '-=0.6').fromTo('[data-menu-main-link]', {
    x: 20,
  },{
    x: 0,
    opacity: 1,
    stagger: 0.1,
  }, '-=0.3').to(contactTitleRef.current, {
    opacity: 1,
    y: -10,
  }, '-=0.5')
  .to('[data-menu-contact-link]', {
    opacity: 1,
    stagger: 0.1,
  }, '-=0.2')

  return tl;
};
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateCarreer = (sectionRef: any, carreerTitleRef: any, splittedCarreer: any) => {
    const tl = gsap.timeline({
       
    })
    gsap.set(carreerTitleRef.current, {opacity: 1})


    gsap.fromTo(splittedCarreer.chars, {
        y: 10,
        opacity: 0,
    },{
        y: 0,
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
            trigger: sectionRef.current,
            markers: true,
            start: 'top 60%',
        },
        duration: 0.6
    })

    gsap.fromTo(
      '[data-carreer-item]',
      {
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        scrollTrigger: {
            trigger: sectionRef.current,
            markers: true,
            start: 'top 60%',
        },
        delay: 1
      }
    );

    return tl
}

export const animateSkills = (sectionRef: any, skillsTitleRef: any, splittedSkills: any) => {
    const tl = gsap.timeline({
       
    })
    gsap.set(skillsTitleRef.current, {opacity: 1})


    gsap.fromTo(splittedSkills.chars, {
        y: 10,
        opacity: 0,
    },{
        y: 0,
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
            trigger: sectionRef.current,
            markers: true,
            start: 'top 60%',
        },
        duration: 0.6
    })

    gsap.to(
        '[data-skill-title]',
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          scrollTrigger: {
              trigger: sectionRef.current,
              markers: true,
              start: 'top 60%',
          },
          delay: 1
        }
      );

    gsap.to(
      '[data-skill-item]',
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        scrollTrigger: {
            trigger: sectionRef.current,
            markers: true,
            start: 'top 60%',
        },
        delay: 1.5
      }
    );

    return tl
}
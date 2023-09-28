import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

export const animateTitle = (titleRef: any) => {
    const tl = gsap.timeline({});

    gsap.fromTo(titleRef.current, {
        x: -20,
    },{
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
        },
        duration: 2
    })
    return tl
}

export const animateCards = (cardContainerRef: any) => {
    const tl = gsap.timeline({});

    return tl
}
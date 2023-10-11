import { gsap } from 'gsap';


export const animate404 = () => {
    const tl = gsap.timeline({});
    gsap.set('[data-404-title]', {opacity: 1})
    gsap.set('[data-404-subtitle]', {opacity: 1})

    tl.fromTo('[data-404-title] .word', {
        opacity: 0,
        yPercent: 100
    },{
        opacity: 1,
        yPercent: 0,
        stagger: 0.05,
    })


    tl.fromTo('[data-404-subtitle] span', {
        opacity: 0,
        yPercent: 100
    },{
        opacity: 1,
        yPercent: 0,
        stagger: 1,
    })

    tl.fromTo('[data-404-subtitle-chars] .word', {
        opacity: 0,
        yPercent: 100
    },{
        opacity: 1,
        yPercent: 0,
        stagger: 0.3,
    })

    tl.to('[data-404-btn]', {
        opacity: 1
    })
}
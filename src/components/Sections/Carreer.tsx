import { useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import Section from "@/components/Section/Section"
import Title from "@/components/Title/Title"
import CarreerItem from "@/components/Items/CarreerItem";

import { useGsapContext } from '@/hooks/useGsapContext';

import { carreerItems } from "@/data"

gsap.registerPlugin(ScrollTrigger);

const Carreer = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)

    useGsapContext(() => {
      let carreerItems = gsap.utils.toArray<HTMLElement>(
        'li',
        containerRef.current
      );

      gsap.to(titleRef.current, {
        opacity: 1,
        scrollTrigger: {
            trigger: containerRef.current, // make .panel2 the trigger
            start: "top 50%", // 10% of .panel2 enters the bottom of the viewport
            // markers: true
            // Whatever other ScrollTrigger vars you need here
        }
      })

      let tl = gsap.timeline({
        defaults: { duration: 0.5 },
        scrollTrigger: {
          trigger: containerRef.current,
        //   markers: true,
          start: 'top 50',
        },
      });

      tl.to(carreerItems, {
          stagger: 0.2,
          opacity: 1,
          x: -50
      }, '<')
    }, [containerRef]);

  return (
    <Section id="carreer" extraClasses="h-screen min-w-[100vw]" forwardedRef={containerRef}>
      <div className="container grid grid-cols-12 lg:gap-x-8">
        <Title title={'Carreer'} color={'white'} extraClasses='opacity-0' forwardedRef={titleRef}/>

        {/* Works container */}
        <ul className="mt-10 col-span-full flex flex-col gap-10 md:mt-20">
          {carreerItems.map((item) => (
            <li
              key={item.period}
              className="opacity-0 grid grid-cols-4 gap-x-2 md:grid-cols-12 md:gap-y-12 md:gap-x-8"
            >
              <h6 className="col-end-1 w-min text-base text-end my-auto ml-auto md:col-end-6 md:col-span-2 md:text-xl">
                {item.period}
              </h6>
              <div className="col-start-1 col-span-full text-base  md:col-start-6 pl-4 border-l border-darkgrey md:text-xl flex flex-col my-auto gap-5">
                {item.companies.map((company) => (
                  <CarreerItem company={company} key={company.id}/>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default Carreer

"use client"
import { useState, useRef } from "react";
import gsap from 'gsap';
import Image from 'next/image';

import NavMenu from "@/components/NavMenu/NavMenu";
import Header from "@/components/Header/Header";
import Title from '@/components/Title/Title';
import WorkDescriptionWrapper from '@/components/WorkDescription/WorkDescriptionWrapper';

import { useGsapContext } from '@/hooks/useGsapContext';

import { works } from "@/data";

const WorkDetail = ({ params }: { params: { slug: string } }) => {
    const [isMenuActive, setIsMenuActive] = useState(false)
    const data = works.find(work => work.slug == params.slug)

    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const dataContainer = useRef<HTMLDivElement>(null);
        
    useGsapContext(() => {
        let tl = gsap.timeline({
        defaults: { duration: 0.5, delay: 0.5 },
        });
        tl.to(titleRef.current, {
            opacity: 1,
        })
        .to(titleRef.current, {
            y: -20,
            duration: 0.75
        })
        .to(dataContainer.current, {
            // yPercent: -50,
            opacity: 1,
        }, '<')

        // todo: add itemsWork animation stagger
        // const itemsWork = dataContainer.current?.querySelectorAll('.work-desc-col')
    }, []);

    return (
      <main>
        <NavMenu isActive={isMenuActive} />
        <Header isActive={isMenuActive} setIsActive={setIsMenuActive} />

        {data && (
          <div
            className="container min-h-[100dvh] grid grid-cols-12 relative md:pt-32"
            ref={containerRef}
          >
            <div className="col-span-full absolute top-40 right-0 md:col-start-3">
              <Image
                src={data.image.urlBig}
                alt={data.image.alt}
                width={1028}
                height={580}
                className="rounded-2xl"
                priority={true}
                ref={imageRef}
              />

              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/30"></div>
            </div>

            <section className="col-span-full grid grid-cols-12 lg:gap-x-8">
              <Title
                title={data.name}
                color="white"
                extraClasses="opacity-0 font-semibold h-fit text-6xl relative z-50 top-full md:text-7xl"
                forwardedRef={titleRef}
              />
              <WorkDescriptionWrapper
                info={data.info}
                role={data.role}
                stack={data.stack}
                links={data.links}
                forwardedRef={dataContainer}
              />
            </section>
          </div>
        )}
      </main>
    );
}

export default WorkDetail;
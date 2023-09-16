"use client"
import { useState } from "react";

import NavMenu from "@/components/NavMenu/NavMenu";
import Header from "@/components/Header/Header";
import Section from "@/components/Section/Section";

import { works } from "@/data";
import Image from "next/image";
import Title from "@/components/Title/Title";

const WorkDetail = ({ params }: { params: { slug: string } }) => {
    const [isMenuActive, setIsMenuActive] = useState(false)
    const data = works.find(work => work.slug == params.slug)

    console.log(data)
    return (
      <main>
        <NavMenu isActive={isMenuActive} />
        <Header isActive={isMenuActive} setIsActive={setIsMenuActive} />

        {data && (
          <Section>
            <div className="container grid grid-cols-12 lg:gap-x-8 relative">
              <div className="col-span-full md:col-start-3 relative">
                <Image
                    src={data.image.urlBig}
                    alt={data.image.alt}
                    width={1028}
                    height={580}
                    className="rounded-2xl "
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/30">
                </div>
              </div>
              <Title title={data.name} color="white" extraClasses="font-semibold absolute top-1/2"/>
            </div>
          </Section>
        )}
      </main>
    );
}

export default WorkDetail;
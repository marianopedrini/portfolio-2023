"use client"
import { useState } from "react";

import NavMenu from "@/components/NavMenu/NavMenu";
import Header from "@/components/Header/Header";
import Section from "@/components/Section/Section";
import Parallax from "@/components/Parallax/Parallax";

import { works } from "@/data";

const WorkDetail = ({ params }: { params: { slug: string } }) => {
    const [isMenuActive, setIsMenuActive] = useState(false)
    const data = works.find(work => work.slug == params.slug)

    return (
      <main>
        <NavMenu isActive={isMenuActive} />
        <Header isActive={isMenuActive} setIsActive={setIsMenuActive} />

        {data && (
          <Section>
            <Parallax data={data}/>
          </Section>
        )}
      </main>
    );
}

export default WorkDetail;
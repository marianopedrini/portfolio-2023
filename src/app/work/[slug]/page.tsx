"use client"
import { useState } from "react";

import NavMenu from "@/components/NavMenu/NavMenu";
import Header from "@/components/Header/Header";

import { works } from "@/data";

const WorkDetail = ({ params }: { params: { slug: string } }) => {
    const [isMenuActive, setIsMenuActive] = useState(false)
    const data = works.find(work => work.slug == params.slug)

    return (
     <main>
        <NavMenu isActive={isMenuActive}/>
        <Header isActive={isMenuActive} setIsActive={setIsMenuActive}/>
        <div>Work: {params.slug}</div>
     </main>
    )
}

export default WorkDetail;
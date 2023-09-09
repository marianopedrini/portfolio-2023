import Title from "@/components/Title/Title"
import WorkItem from "@/components/Items/WorkItem"
import Section from "@/components/Section/Section"

import { works } from '@/data'

const Work = () => {
  return (
    <Section >
      <div className="container grid grid-cols-12 mb-14">
        <Title title={'Work'} color={'white'} />
      </div>
      <div className="container px-0 grid grid-cols-3 gap-0">
        {works.map((work) => (
          <WorkItem work={work} key={work.name} />
        ))}
      </div>
    </Section>
  );
}

export default Work
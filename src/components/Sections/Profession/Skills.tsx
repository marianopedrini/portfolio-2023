import Section from '@/components/Section/Section';
import Title from '@/components/Title/Title';
import SkillItem from '@/components/Items/SkillItem';

import { skills } from '@/data';

const { main: mainSkills, other: otherSkills } = skills;

const Skills = () => {
  return (
    <Section extraClasses="h-screen min-w-[100vw]">
      <div className="container grid grid-cols-12 lg:gap-x-8">
        <Title title={'Skills'} color={'white'} extraClasses=''/>

        <div className="col-span-full grid grid-cols-12 grid-x-8 mt-20">
          {mainSkills && (
            <div className="col-span-full md:col-start-2 md:col-end-8">
              <h6 className="text-xl md:text-2xl">{mainSkills.title}</h6>
              {mainSkills.items && (
                <ul className="grid grid-cols-2 grid-rows-5 mt-4 gap-x-8 md:mt-10">
                  {mainSkills.items.map((skill) => (
                    <SkillItem skill={skill} key={skill} />
                  ))}
                </ul>
              )}
            </div>
          )}

          {otherSkills && (
            <div className="col-span-full mt-12 md:mt-0 md:col-start-9 col-end-12">
              <h6 className="text-xl md:text-2xl">{otherSkills.title}</h6>
              {otherSkills.items && (
                <ul className="grid grid-rows-5 w-2/4 md:w-full mt-4 md:mt-10">
                  {otherSkills.items.map((skill) => (
                    <SkillItem skill={skill} key={skill} />
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Skills;

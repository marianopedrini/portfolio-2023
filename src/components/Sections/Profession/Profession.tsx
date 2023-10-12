import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';

import Section from '@/components/Section/Section';
import Title from '@/components/Title/Title';
import CareerItem from '@/components/Items/CareerItem';
import SkillsList from '@/components/Items/SkillItem';

import { careerItems, skills } from '@/data';

import { animateCareer, animateSkills } from './animations';

const { main: mainSkills, other: otherSkills } = skills;

const Profession = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const careerTitleRef = useRef<HTMLHeadingElement>(null);
  const skillsTitleRef = useRef<HTMLHeadingElement>(null);
  const timeline = useRef(gsap.timeline());

  useLayoutEffect(() => {
    const splittedCareer = new SplitType('#careerTitle', {
      types: 'chars',
    });
    const splittedSkills = new SplitType('#skillsTitle', {
      types: 'chars',
    });

    const ctx = gsap.context(() => {
        animateCareer(sectionRef, careerTitleRef, splittedCareer)
        animateSkills(sectionRef, skillsTitleRef, splittedSkills)
    });

    return () => ctx.revert();
  }, []);

  return (
    <Section id="career" extraClasses="min-w-full" forwardedRef={sectionRef}>
      <div className="container flex flex-col md:flex-row md:gap-x-12 lg:gap-x-20">
        
        {/* Career container */}
        <div className="md:w-7/12">
          <Title
            title={'Career'}
            color={'white'}
            extraClasses="opacity-0"
            forwardedRef={careerTitleRef}
            id="careerTitle"
          />

          <ul className="mt-16 flex flex-col gap-16">
            {careerItems.map((item, index) => (
              <CareerItem item={item} key={index} />
            ))}
          </ul>
        </div>

        {/* Skills container */}
        <div className="flex-1">
          <Title
            title={'Skills'}
            color={'white'}
            extraClasses="opacity-0 mt-24 md:mt-0 col-span-3"
            forwardedRef={skillsTitleRef}
            id="skillsTitle"
          />
          <div className="mt-16 flex gap-8">
            <div className="flex-1">
              {mainSkills && (
                <SkillsList
                  title={mainSkills.title}
                  skills={mainSkills.items}
                />
              )}
            </div>

            <ul className="flex-1">
              {otherSkills && (
                <SkillsList
                  title={otherSkills.title}
                  skills={otherSkills.items}
                />
              )}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Profession;

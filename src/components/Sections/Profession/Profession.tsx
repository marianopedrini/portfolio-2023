import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';

import Section from '@/components/Section/Section';
import Title from '@/components/Title/Title';
import CarreerItem from '@/components/Items/CarreerItem';
import SkillsList from '@/components/Items/SkillItem';

import { carreerItems, skills } from '@/data';

import { animateCarreer, animateSkills } from './animations';

const { main: mainSkills, other: otherSkills } = skills;

const Profession = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const carreerTitleRef = useRef<HTMLHeadingElement>(null);
  const skillsTitleRef = useRef<HTMLHeadingElement>(null);
  const timeline = useRef(gsap.timeline());

  useEffect(() => {
    const splittedCarreer = new SplitType('#carreerTitle', {
      types: 'chars',
    });
    const splittedSkills = new SplitType('#skillsTitle', {
      types: 'chars',
    });

    const context = gsap.context(() => {
      const tl = timeline.current;

      tl.add(animateCarreer(sectionRef, carreerTitleRef, splittedCarreer)).add(
        animateSkills(sectionRef, skillsTitleRef, splittedSkills)
      );
    });

    return () => context.revert();
  }, []);

  return (
    <Section id="carreer" extraClasses="min-w-full" forwardedRef={sectionRef}>
      <div className="container flex flex-col md:flex-row md:gap-x-12 lg:gap-x-20">
        
        {/* Carreer container */}
        <div className="md:w-7/12">
          <Title
            title={'Carreer'}
            color={'white'}
            extraClasses="opacity-0"
            forwardedRef={carreerTitleRef}
            id="carreerTitle"
          />

          <ul className="mt-16 flex flex-col gap-10">
            {carreerItems.map((item, index) => (
              <CarreerItem item={item} key={index} />
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

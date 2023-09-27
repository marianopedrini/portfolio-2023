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
      <div className="container grid grid-cols-12 lg:gap-x-8">
        <Title
          title={'Carreer'}
          color={'white'}
          extraClasses="opacity-0 col-span-8 md:col-span-7"
          forwardedRef={carreerTitleRef}
          id="carreerTitle"
        />
        <Title
          title={'Skills'}
          color={'white'}
          extraClasses="opacity-0 col-span-3 hidden md:block"
          forwardedRef={skillsTitleRef}
          id="skillsTitle"
        />

        {/* Carreer container */}
        <ul className="col-span-full mt-16 flex flex-col gap-10 md:col-span-6">
          {carreerItems.map((item, index) => (
            <CarreerItem item={item} key={index} />
          ))}
        </ul>

        {/* Skills container */}
        <Title
          title={'Skills'}
          color={'white'}
          extraClasses="col-span-3 mt-24 block md:hidden"
        />

        <div className="mt-16 flex gap-8 col-start-1 col-end-12 md:col-start-8">
          <div className="flex-1">
            {mainSkills && (
              <SkillsList title={mainSkills.title} skills={mainSkills.items} />
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
    </Section>
  );
};
export default Profession;

import Image from 'next/image';

import Section from "@/components/Section/Section"

const About = () => {
  return (
    <Section extraClasses='flex items-center pt-[20vh]' id="about">
      <div className="container h-full lg:grid grid-cols-12 lg:gap-x-8 mb-12">
        <p className="text-2xl pr-1 font-normal md:text-3xl lg:text-[38px] lg:col-start-2 lg:col-end-12 lg:leading-[42px] group">
          I am a frontend developer from Argentina, with 3 years of experience
          in web development. I&apos;m a JavaScript enthusiast and currently, I&apos;m
          learning about advanced and high-performance animations.
          <br />
          <br />I love creating and developing amazing things with beautiful and
          interactive interfaces.
        </p>
        <div className="col-span-full col-start-2 flex items-center">
            <Image
                className="col-start-2 col-end-3 ml-2 mt-10 animate-bounce"
                src="/about-arrow.svg"
                alt="Arrow pointing down"
                width={8}
                height={73}
            />
            <p className='font-extralight ml-4 mt-8'>
            Scroll to see more
            </p>
        </div>
      </div>
    </Section>
  );
};

export default About;

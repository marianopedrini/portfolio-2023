import Image from 'next/image';
import Link from 'next/link';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Work } from '@/types';

gsap.registerPlugin(ScrollTrigger);

type WorkDescriptionProps = {
  index: number;
  work: Work;
};

const WorkDescription = ({ index, work }: WorkDescriptionProps) => {
  const { image, name, company, info, role, stack, links } = work;

  return (
    <section className="min-h-screen md:opacity-0" data-work-container>
      <div className="container flex flex-col justify-end md:flex-row">
        <div className="h-full flex flex-col justify-end py-8 md:container md:absolute md:left-1/2 md:translate-x-[-50%] md:py-20">
          {/* Image */}
          <div className="w-full mt-12 max-w-[710px] max-h-[400px] overflow-hidden rounded-lg mb-6 md:mb-20 md:mt-0">
            <Image
              className="object-cover"
              src={image.url}
              alt={image.alt}
              width={710}
              height={400}
              priority
              data-work-image
            />
          </div>
          <div className="bottom-1/4 flex flex-col gap-4">
            {/* Name */}
            <h4 className="text-4xl md:text-6xl">{name}</h4>
            <div className="w-full">
              <div className="bg-darkgrey h-px origin-left"></div>
              <div
                className="bg-white h-px origin-left"
                data-progress-bar
              ></div>
            </div>
          </div>
        </div>

        {/* Board */}
        <div className="bg-ultrablack/80 rounded-lg p-8 h-fit flex flex-col gap-x-12 gap-y-6 z-20 md:left-[20vw] md:flex-row md:absolute md:mr-6 md:top-[30vh] lg:left-[40vw]">
          {/* Info */}
          <div className="md:max-w-[250px] flex flex-col gap-4">
            <h5 className="text-2xl font-medium">Info</h5>
            <h6>Company: {company}</h6>
            <p>{info}</p>
          </div>

          {/* Role */}
          <div className="md:max-w-[210px] flex flex-col gap-4">
            <h5 className="text-2xl font-medium">Role</h5>
            <p>{role}</p>
          </div>

          {/* Stack */}
          <div className="md:max-w-[210px] flex flex-col w-fit gap-4">
            <h5 className="text-2xl font-medium">Stack</h5>
            <ul className="list-disc pl-3">
              {stack.map((tec) => (
                <li key={tec}>{tec}</li>
              ))}
            </ul>
          </div>

          {/* Links */}
          {links && (
            <div className="flex flex-col gap-4">
              <h5 className="text-2xl font-medium">
                {links.length > 1 ? 'Links' : 'Link'}
              </h5>
              {links.map((link) => (
                <Link href={link} key={link} target="_blank" data-hover>
                  <Image
                    src={'/link.svg'}
                    alt="Link Icon"
                    priority
                    width={24}
                    height={25}
                  />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WorkDescription;

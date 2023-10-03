import { useLayoutEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';

import Grid from '@/components/Grid/Grid';

import { Work } from '@/types';
import { works } from '@/data';
import { animateDetail } from './animations';

const defaultSelectedWork = works[0];

const WorkDescription = ({ selected }: { selected: string }) => {
  const [selectedWork, setSelectedWork] = useState(defaultSelectedWork);
  const timeline = useRef(gsap.timeline());
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const filteredWork = works.find((work) => work.name === selected);
    if (filteredWork ) {
        setSelectedWork(filteredWork);
    }

    const ctx = gsap.context(() => {
      animateDetail(titleRef, imgRef);
    }, [containerRef]);

    return () => ctx.revert();
  }, [selected]);

  return (
    <>
      {selectedWork && (
        <Grid extraClasses="relative col-span-full" forwardedRef={containerRef}>
          <div className="relative col-span-full pt-20 right-0 md:pt-0 md:col-start-3 lg:mt-20">
            {/* Title */}
            <h4
              className="opacity-0 col-start-2 col-span-full z-20 text-6xl md:-mt-20 md:-ml-20 md:top-2/4 md:absolute lg:text-7xl"
              ref={titleRef}
            >
              {selectedWork.name}
            </h4>
            {/* Background */}
            <div className='relative opacity-0' ref={imgRef}>
              <Image
                src={selectedWork.image.urlBig}
                alt={selectedWork.image.alt}
                width={1028}
                height={580}
                className="rounded-2xl"
                priority={true}
              />

              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/30"></div>
            </div>
          </div>

          <WorkDetail selectedWork={selectedWork} />
        </Grid>
      )}
    </>
  );
};

const WorkDetail = ({ selectedWork }: { selectedWork: Work }) => {
  const { info, role, stack, links } = selectedWork;

  return (
    <div
      className={`opacity-0 bg-white/5 rounded-2xl h-fit col-span-full z-40 py-8 p-6 gap-12 grid grid-cols-1 relative md:rounded-none md:-top-20 md:mt-0 md:bg-black/80 md:gap-6 md:p-8 ${
        links
          ? 'sm:grid-cols-3 xl:grid-cols-4'
          : 'sm:grid-cols-3 xl:grid-cols-3'
      }`}
      id="workDetail"
    >
      <WorkDetailCol title="Info" content={info} />

      <WorkDetailCol title="Role" content={role} />

      <WorkDetailCol title="Stack" content={stack} />

      {links && <WorkDetailCol title="Links" content={links} />}
    </div>
  );
};

const WorkDetailCol = ({
  title,
  content,
}: {
  title: string;
  content: string | string[];
}) => {
  const createUl = (content: string[]) => {
    return (
      <ul className={`${title == 'Stack' && 'list-disc ml-6'}`} data-desc-ul>
        {title !== 'Links'
          ? content?.map((item) => <li key={item}>{item}</li>)
          : content?.map((item) => (
              <li key={item}>
                <Link
                  href={item}
                  target="_blank"
                  className="hover:text-darkgrey"
                  data-hover
                >
                  {item}
                </Link>
              </li>
            ))}
      </ul>
    );
    //
  };

  return (
    <div className="work-desc-col flex flex-col gap-5 text-white">
      <h5 className="text-4xl font-medium">{title}</h5>
      <div className="text-grey">
        {Array.isArray(content) ? createUl(content) : content}
      </div>
    </div>
  );
};

export default WorkDescription;

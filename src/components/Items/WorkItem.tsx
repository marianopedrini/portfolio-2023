import Link from 'next/link';
import Image from 'next/image';

import { Work } from '@/types';

type WorkItemsProps = { work: Work };

const WorkItem = ({ work }: WorkItemsProps) => {
  return (
    <Link
      href={`/work/${work.slug}`}
      className="relative aspect-square group overflow-hidden"
      data-hover
      data-work-card
    >
      <Image
        src={work.image.urlBig}
        alt={work.image.alt}
        fill={true}
        sizes="(max-width: 768px) 100vw, 768px"
        className="flex object-cover"
        //   sizes="(max-width: 768px) 100vw, 428px"'
      />

      {/* Overlay */}
      <div className="w-full h-full absolute top-0 left-0 flex justify-center text-center items-center bg-black opacity-0 group-hover:opacity-100 transition-all duration-200 text-xl md:text-2xl lg:text-5xl">
        <p className="w-2/3">{work.name}</p>
      </div>
    </Link>
  );
};

export default WorkItem;

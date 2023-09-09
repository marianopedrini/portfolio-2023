import Link from 'next/link'
import Image from 'next/image'

import { Work } from '@/types'

const WorkItem = ({work}: {work: Work}) => {
  return (
    <Link href={`/work/${work.slug}`} className='relative aspect-square group overflow-hidden'>
        <Image
              src={work.image.url}
              alt={work.image.alt}
              fill={true}
              className='flex'
        />
        
        {/* Overlay */}
        <div className='w-full h-full absolute top-0 left-0 flex justify-center text-center items-center bg-black opacity-0 group-hover:opacity-100 transition-all duration-200 text-xl md:text-2xl lg:text-5xl'>
            <p className='w-2/3'>{work.name}</p>
        </div>
    </Link>

  )
}

export default WorkItem
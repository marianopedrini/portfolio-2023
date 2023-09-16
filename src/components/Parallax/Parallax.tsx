import Image from 'next/image';
import Title from '../Title/Title';
import WorkDescriptionWrapper from '../WorkDescription/WorkDescriptionWrapper';

const Parallax = ({ data }: { data: any }) => {
  return (
    <div className="container relative grid grid-cols-12 lg:gap-x-8">
      <div className="col-span-full md:col-start-3 relative">
        <Image
          src={data.image.urlBig}
          alt={data.image.alt}
          width={1028}
          height={580}
          className="rounded-2xl"
          priority={true}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/30"></div>
        <Title
          title={data.name}
          color="white"
          extraClasses="font-semibold absolute text-6xl -bottom-8 z-50 md:text-7xl md:-left-28 md:top-1/2"
        />
      </div>

      <section className="col-span-full mb-12 md:min-h-screen grid grid-cols-12 lg:gap-x-8">
        <WorkDescriptionWrapper
          info={data.info}
          role={data.role}
          stack={data.stack}
          links={data.links}
        />
      </section>
    </div>
  );
};
export default Parallax;
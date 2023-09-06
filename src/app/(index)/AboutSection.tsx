import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="w-full min-h-[100dvh] flex items-end pt-40">
      <div className="container h-full grid grid-cols-12 mb-12">
        <h4 className="text-2xl pr-1 md:text-3xl lg:text-4xl lg:col-start-2 lg:col-end-12 lg:leading-[52px] xl:text-[42px] group">
          I am a frontend developer from Argentina, with 3 years of experience in web development. I'm a JavaScript enthusiast and currently, I'm learning about advanced and high-performance animations.
          <br />
          <br />
          I love creating and developing amazing things with beautiful and
          interactive interfaces.
        </h4>
        <Image
          className="col-start-2 ml-2 mt-10"
          src="/about-arrow.svg"
          alt="Arrow pointing down"
          width={15}
          height={50}
        />
      </div>
    </section>
  );
};

export default AboutSection;

type SectionProps = {
  children: React.ReactNode;
  extraClasses?: string;
  id?: string;
  forwardedRef?: React.RefObject<HTMLHeadingElement>;
};

const Section = ({ children, extraClasses, id, forwardedRef }: SectionProps) => {
  return (
    <section
      className={`w-full min-h-[100dvh] md:pt-32 ${
        extraClasses ? extraClasses : ''
      }`}
      id={id}
      ref={forwardedRef}
    >
      {children}
    </section>
  );
};

export default Section;

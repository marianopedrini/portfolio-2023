type SectionProps = {
  children: React.ReactNode;
  extraClasses?: string;
  id?: string;
};

const Section = ({ children, extraClasses, id }: SectionProps) => {
  return (
    <section
      className={`w-full min-h-[100dvh] pt-32 ${
        extraClasses ? extraClasses : ''
      }`}
      id={id}
    >
      {children}
    </section>
  );
};

export default Section;

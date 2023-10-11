type SectionProps = {
  children: React.ReactNode
  extraClasses?: string
  id?: string
  forwardedRef?: React.RefObject<HTMLElement>
};

const Section = ({ children, extraClasses, id, forwardedRef }: SectionProps) => {
  return (
    <section
      className={`${
        extraClasses ? extraClasses : ''
      } w-full py-20 md:py-32 min-h-[100dvh]`}
      id={id}
      ref={forwardedRef}
    >
      {children}
    </section>
  );
};

export default Section;

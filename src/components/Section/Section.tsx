type SectionProps = {
  children: React.ReactNode
  extraClasses?: string
  id?: string
  forwardedRef?: React.RefObject<HTMLElement>
  heightFit?: boolean
};

const Section = ({ children, extraClasses, id, forwardedRef, heightFit }: SectionProps) => {
  return (
    <section
      className={`w-full py-20 md:py-32 ${!heightFit? 'min-h-[100dvh]' : ''} ${
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

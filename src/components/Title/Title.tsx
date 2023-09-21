type TitleProps = {
  title: string;
  color: string;
  extraClasses?: string;
  forwardedRef?: React.RefObject<HTMLHeadingElement>;
};

const Title = ({ title, color, extraClasses, forwardedRef }: TitleProps) => {
  return (
    <h3
      className={`text-6xl col-span-full md:text-[82px] md:col-start-2 ${
        color === 'black' ? 'text-black font-medium' : ''
      }
      ${extraClasses ? extraClasses : ''}`}
      ref={forwardedRef}
    >
      {title}
    </h3>
  );
};

export default Title;

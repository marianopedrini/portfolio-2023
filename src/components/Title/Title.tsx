type TitleProps = {
  title: string;
  color: string;
  id?: string;
  extraClasses?: string;
  forwardedRef?: React.RefObject<HTMLHeadingElement>;
};

const Title = ({ title, color, id, extraClasses, forwardedRef }: TitleProps) => {
  return (
    <h3
      className={`text-6xl col-auto md:text-[82px] ${
        color === 'black' ? 'text-black font-medium' : ''
      }
      ${extraClasses ? extraClasses : ''}`}
      ref={forwardedRef}
      id={id}
    >
      {title}
    </h3>
  );
};

export default Title;

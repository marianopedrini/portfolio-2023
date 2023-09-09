const Title = ({title, color, extraClasses}: {title: string, color: string, extraClasses? : string}) => {
  return (
    <h3
      className={`text-7xl col-span-full md:text-[82px] md:col-start-2 ${
        color === 'black' ? 'text-black font-medium' : ''
      }
      ${
        extraClasses ? extraClasses : ''
      }`}
    >
      {title}
    </h3>
  );
}

export default Title
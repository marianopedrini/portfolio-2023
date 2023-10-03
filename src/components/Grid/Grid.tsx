type GridProps = {
  children: React.ReactNode;
  extraClasses?: string
  forwardedRef?: React.RefObject<HTMLDivElement>
};

const Grid = ({ children, extraClasses, forwardedRef }: GridProps) => {
  return <div className={`lg:grid grid-cols-12 lg:gap-x-8 ${extraClasses? extraClasses : ''}`} ref={forwardedRef}>
    {children}
  </div>;
};
export default Grid;

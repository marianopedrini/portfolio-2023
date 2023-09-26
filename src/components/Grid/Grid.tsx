type GridProps = {
  children: React.ReactNode;
  extraClasses?: string
};

const Grid = ({ children, extraClasses }: GridProps) => {
  return <div className={`lg:grid grid-cols-12 lg:gap-x-8 ${extraClasses? extraClasses : ''}`}>
    {children}
  </div>;
};
export default Grid;

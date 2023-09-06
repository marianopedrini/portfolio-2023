const Header = ({ isActive,setIsActive }: { isActive: boolean; setIsActive: (active: boolean) => void; }) => {
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="fixed top-0 w-full">

        <div className="container h-fit mt-10">
        <div
            className="w-[45px] -mt-2 md:mt-0 md:w-[55px] absolute border border-grey rounded-full aspect-square flex items-center justify-center hover:border-grey transition duration-200 ease-in-out group cursor-pointer"
            onClick={handleClick}
        >
            <span className="absolute translate-y-1 h-[2px] w-5 md:w-7 bg-grey group-hover:bg-grey transition duration-200 ease-in-out"></span>
            <span className="absolute -translate-y-1 h-[2px] w-5 md:w-7 bg-grey group-hover:bg-grey transition duration-200 ease-in-out"></span>
        </div>

        <h2 className="text-center text-[22px] tracking-[-1.5px]"><span className="font-semibold">Mariano</span>Pedrini</h2>
        </div>
    </div>
  );
};

export default Header;

const MenuIcon = ({ onClick, isActive}: { onClick: React.MouseEventHandler; isActive: boolean; }) => {
  return (
    <div
      className="bg-black w-[54px] h-[54px] rounded-full absolute top-4 cursor-pointer group"
      onClick={onClick}
    >
      <span
        className={`block h-[1px] w-[30px] bg-grey absolute top-[23px] left-3 transition-all duration-500 ${
          isActive
            ? 'top-[27px] rotate-[225deg] transition-transform'
            : 'group-hover:w-[34px]'
        }`}
      ></span>
      <span
        className={`block h-[1px] w-[30px] bg-grey absolute bottom-[23px] left-3 transition-all duration-500 ${
          isActive
            ? 'bottom-[26px] origin-center -rotate-[225deg] transition-transform'
            : 'group-hover:w-[26px]'
        }`}
      ></span>
    </div>
  );
};

export default MenuIcon;
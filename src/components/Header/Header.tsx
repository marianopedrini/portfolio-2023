import Link from "next/link";
import MenuIcon from "./MenuIcon";

const Header = ({ isActive, setIsActive }: { isActive: boolean; setIsActive: (active: boolean) => void; }) => {
  const handleClick = () => {
    console.log(!isActive)
    setIsActive(!isActive);
  };

  return (
    <div className="fixed top-0 w-full z-50">
      <div className="container">
        
        <MenuIcon onClick={handleClick} isActive={isActive}/>

        <div className="flex items-center justify-center">
          <div>
            <Link href={'/'} className="block h-fit">
              <h2 className="mx-auto mt-8 text-center w-fit text-[22px] leading-none tracking-[-1.5px] pt-2 pb-1 px-4 rounded-md backdrop-blur-sm bg-black/75">
                <span className="font-semibold leading-none">Mariano</span>
                Pedrini
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

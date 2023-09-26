import Link from 'next/link';
import MenuIcon from './MenuIcon';

type HeaderProps = {
  isActive: boolean;
  setIsActive: (active: boolean) => void;
};

const Header = ({ isActive, setIsActive }: HeaderProps) => {
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="fixed top-0 w-full z-[100]">
      <div className="container">
        <MenuIcon onClick={handleClick} isActive={isActive} />

        <div className="hidden md:flex items-center justify-center">
          <div>
            <Link href={'/'} className="block h-fit" data-hover>
              <h2 className="mx-auto mt-8 text-center w-fit text-[22px] leading-none tracking-[-1.5px] py-1.5 px-4 rounded-md backdrop-blur-sm bg-black/80">
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

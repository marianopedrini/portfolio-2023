import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';

import Link from 'next/link';
import MenuIcon from './MenuIcon';

import { animateMenu } from './animations';

type HeaderProps = {
  isActive: boolean;
  setIsActive: (active: boolean) => void;
};

const Header = ({ isActive, setIsActive }: HeaderProps) => {
  const timeline = useRef(gsap.timeline());
  const iconRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    const nameLetters = new SplitType('#name', { types: 'chars' });
    const context = gsap.context(() => {
      gsap.set(nameRef.current, {
        opacity: 1,
      });
      const tl = timeline.current;

      tl.add(animateMenu(iconRef, nameLetters.chars));
    });

    return () => context.revert();
  }, []);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="fixed top-0 w-full z-[100]">
      <div className="container">
        <MenuIcon
          onClick={handleClick}
          isActive={isActive}
          forwardRef={iconRef}
        />

        <div className="hidden md:flex items-center justify-center">
          <div>
            <Link href={'/'} data-hover>
              <h4
                id="name"
                className="opacity-0 overflow-hidden mx-auto mt-8 text-center w-fit leading-none text-[22px]"
                ref={nameRef}
              >
                <span className="font-semibold">Mariano</span>
                Pedrini
              </h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

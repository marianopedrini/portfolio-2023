'use client'
import { useState, useLayoutEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import SplitType from 'split-type';

import NavMenu from '@/components/NavMenu/NavMenu';
import MenuIcon from '@/components/Header/MenuIcon';

import { animateHeader } from './animations';

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const iconRef = useRef(null);
  const nameRef = useRef(null);

  useLayoutEffect(() => {
    const nameLetters = new SplitType('#name', { types: 'chars' });
    const ctx = gsap.context(() => {
      gsap.set(nameRef.current, {
        opacity: 1,
      });

        animateHeader(iconRef, nameLetters.chars);
    });

    return () => ctx.revert();
  }, []);

  const handleClick = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <>
      <NavMenu isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
      <div className="fixed top-0 w-full z-[100]">
        <div className="container">
          <MenuIcon
            onClick={handleClick}
            isActive={isMenuActive}
            forwardRef={iconRef}
          />

          <div className="hidden md:flex items-center justify-center">
            <div>
              <Link href={'/'} onClick={() => setIsMenuActive(false)} data-hover>
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
    </>
  );
};

export default Header;

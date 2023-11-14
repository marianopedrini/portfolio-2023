'use client';
import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';

import NavMenu from '@/components/NavMenu/NavMenu';
import MenuIcon from '@/components/Header/MenuIcon';

import { useScrollDirection } from '@/hooks/useScrollDirection';

import { animateHeader } from './animations';

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const iconRef = useRef(null);
  const nameRef = useRef(null);
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    if (scrollDirection === 'down') {
      gsap.to(nameRef.current, {
        yPercent: -400,
        opacity: 1,
      });
    } else {
      gsap.to(nameRef.current, {
        yPercent: 0,
        opacity: 1,
      });
    }
  }, [scrollDirection]);

  // Animations
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
        <div className="container relative">
          <MenuIcon
            onClick={handleClick}
            isActive={isMenuActive}
            forwardRef={iconRef}
          />

          <div
            onClick={() => setIsMenuActive(false)}
            className="hidden md:absolute md:left-1/2 md:-translate-x-1/2 md:inline-block"
          >
            <h4
              id="name"
              className="opacity-0 overflow-hidden mx-auto mt-8 text-center w-fit leading-none text-[22px]"
              ref={nameRef}
            >
              <span className="font-semibold">Mariano</span>
              Pedrini
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

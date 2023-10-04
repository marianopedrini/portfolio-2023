import { useEffect, useLayoutEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';

import { menuLinks, contactLinks } from '@/data';
import { animateMenu } from './animations';

type NavMenuProps = { isMenuActive: boolean; setIsMenuActive: any };

const NavMenu = ({ isMenuActive, setIsMenuActive }: NavMenuProps) => {
  const bgRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const contactTitleRef = useRef<HTMLHeadingElement>(null);
  const timeline = useRef(gsap.timeline());

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = timeline.current;

      tl.add(animateMenu(bgRef, menuRef, contactTitleRef));
    });

    return () => ctx.revert();
  }, [menuRef]);

  useEffect(() => {
    timeline.current.reversed(!isMenuActive);
  }, [isMenuActive]);

  return (
    <>
      <div
        className={`fixed bg-black min-h-screen min-w-full container flex items-end pb-[40px] z-[90] -left-full`}
        ref={menuRef}
      >
        <div className="container w-full grid grid-cols-12 z-20">
          <nav className="col-span-full mb-20 sm:mb-0 sm:col-span-7">
            <menu className="text-7xl md:text-[100px] md:leading-[100px] text-grey flex flex-col gap-6">
              {menuLinks.map((navlink) => (
                <li
                  className="opacity-0 hover:text-darkgrey w-fit"
                  key={navlink.link}
                  data-menu-main-link
                >
                  <Link
                    href={navlink.link}
                    onClick={() => setIsMenuActive(false)}
                    data-hover
                  >
                    {navlink.text}
                  </Link>
                </li>
              ))}
            </menu>
          </nav>
          <div className="col-span-full sm:col-span-5">
            <h6
              className="opacity-0 text-xl md:text-2xl mb-4"
              ref={contactTitleRef}
            >
              Contact
            </h6>
            <nav className="text-grey flex flex-col gap-3 text-sm md:text-base">
              {contactLinks.map((navlink) => (
                <li
                  className="opacity-0 hover:text-white list-none"
                  key={navlink.link}
                  data-menu-contact-link
                >
                  <Link href={navlink.link} target="_blank" data-hover>
                    {navlink.text}
                  </Link>
                </li>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div
        className="fixed -left-full bg-darknessgrey w-full h-full z-10"
        ref={bgRef}
      ></div>
    </>
  );
};

export default NavMenu;

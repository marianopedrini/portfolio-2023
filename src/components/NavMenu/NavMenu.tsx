import Link from 'next/link'

import { menuLinks, contactLinks } from '@/data'

type NavMenuProps = {isActive: boolean}

const NavMenu = ({isActive} : NavMenuProps) => {
  return (
    <div className={`fixed bg-black min-h-screen min-w-full container flex items-end pb-[40px] z-[90] -left-full transition-all duration-700 ${isActive
        ? 'left-0'
        : ''}`}>
      <div className="container w-full grid grid-cols-12">
        <nav className="col-span-full mb-20 sm:mb-0 sm:col-span-7">
          <menu className="text-7xl md:text-[100px] md:leading-[100px] text-grey flex flex-col gap-6">
            {menuLinks.map((navlink) => (
              <li className="hover:text-darkgrey w-fit" key={navlink.link}>
                <Link href={navlink.link} data-hover>{navlink.text}</Link>
              </li>
            ))}
          </menu>
        </nav>
        <nav className='col-span-full sm:col-span-5'>
          <h6 className="text-xl md:text-2xl mb-4">Contact</h6>
          <nav className="text-grey flex flex-col gap-3 text-sm md:text-base">
            {contactLinks.map((navlink) => (
              <li className="hover:text-white list-none" key={navlink.link}>
                <Link href={navlink.link} target="_blank" data-hover>
                  {navlink.text}
                </Link>
              </li>
            ))}
          </nav>
        </nav>
      </div>
    </div>
  );
}

export default NavMenu
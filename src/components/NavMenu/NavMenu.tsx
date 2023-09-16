import Link from 'next/link'

import { menuLinks, contactLinks } from '@/data'

const NavMenu = ({isActive} : {isActive: boolean}) => {
  return (
    <div className={`fixed bg-black min-h-screen min-w-full container flex items-end pb-[40px] z-50 -left-full transition-all duration-700 ${isActive
        ? 'left-0'
        : ''}`}>
      <div className="container w-full grid grid-cols-12">
        <nav className="col-span-7">
          <menu className="text-[100px] leading-[100px] text-grey flex flex-col gap-6">
            {menuLinks.map((navlink) => (
              <li className="hover:text-darkgrey w-fit" key={navlink.link}>
                <Link href={navlink.link}>{navlink.text}</Link>
              </li>
            ))}
          </menu>
        </nav>
        <nav>
          <h6 className="text-2xl mb-4">Contact</h6>
          <nav className="text-grey flex flex-col gap-3">
            {contactLinks.map((navlink) => (
              <li className="hover:text-white list-none" key={navlink.link}>
                <Link href={navlink.link} target="_blank">
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
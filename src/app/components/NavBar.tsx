import Link from 'next/link'

import { menuLinks, contactLinks } from '@/data'



const NavBar = () => {
  return (
    <section className='min-h-screen container flex items-end pb-[40px]'>
        <div className='w-full grid grid-cols-12'>
            <nav className='col-span-7'>
                <ul className='text-[100px] leading-[100px] text-grey flex flex-col gap-6'>
                    {menuLinks.map(navlink => <li><Link href={navlink.link}>{navlink.text}</Link></li>)}
                </ul>
            </nav>
            <nav>
                <h6 className='text-2xl mb-4'>Contact</h6>
                <ul className='text-grey flex flex-col gap-3'>
                    {contactLinks.map(navlink => <li><Link href={navlink.link}>{navlink.text}</Link></li>)}
                </ul>
            </nav>
        </div>
    </section>
  )
}

export default NavBar
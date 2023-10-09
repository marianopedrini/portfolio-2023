import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

import Title from "@/components/Title/Title"

import { contactLinks } from "@/data";
import { animateContact } from "./animations";

const Contact = () => {
    const contactSectionRef = useRef<HTMLElement>(null)
    const contactCardRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
      const ctx = gsap.context(() => {
        animateContact(contactSectionRef, contactCardRef)
      })
    
      return () => ctx.revert()
    }, [])

  return (
    <section className="relative z-30 h-[99dvh] md:h-[90dvh] pt-20 md:pt-28" id="contact" ref={contactSectionRef}>
      <div className="container bg-white flex flex-col pt-20 rounded-t-2xl h-full" ref={contactCardRef}>
        <Title
          title={'Contact'}
          color={'black'}
          extraClasses="text-center md:col-start-1"
        />
        <h4 className="col-span-full text-center text-black text-2xl md:text-4xl font-medium">
          Have an idea? Get in touch!
        </h4>

        <div className="mt-20 md:mt-28">
          <nav>
            <ul className="flex flex-col gap-8 md:flex-row md:justify-evenly contact-links">
              {contactLinks.map((navlink) => (
                <li className="text-center text-xl" key={navlink.link}>
                  <Link
                    href={navlink.link}
                    target="_blank"
                    className="text-darkgrey"
                    data-hover
                  >
                    {navlink.appName}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <h6 className="text-black font-semibold text-center mt-auto mb-6">Made by Mariano Pedrini</h6>
      </div>
    </section>
  );
}

export default Contact
import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Cursor = () => {
  const [hoveringLink, setHoveringLink] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorContentRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const links = document.querySelectorAll('[data-hover]');

    gsap.set(cursorContentRef.current, {
      opacity: 0,
    });
    const onMouseMove = (e: any) => {
      const { clientX, clientY } = e;
      gsap.to(cursorRef.current, {
        x: clientX,
        y: clientY,
      });
    };
    window.addEventListener('mousemove', onMouseMove);

    links.forEach((link) => {
      link.addEventListener('mouseover', () => {
        // setHoveringLink(true)
        gsap.to(cursorRef.current, {
          scale: 4,
        });
        gsap.to(cursorContentRef.current, {
          opacity: 1,
        });
      });
      link.addEventListener('mouseleave', () => {
        // setHoveringLink(false)
        gsap.to(cursorRef.current, {
          scale: 1,
        });
        gsap.to(cursorContentRef.current, {
          opacity: 0,
        });
      });
    });
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[200] mix-blend-difference p-2.5 flex justify-center items-center bg-white"
      id="custom-cursor"
      ref={cursorRef}
    >
      <p
        className="text-2xl text-black border-l border-white font-semibold"
        id="cursor-text"
        ref={cursorContentRef}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 10.5C2.225 10.5 1.98958 10.4021 1.79375 10.2063C1.59792 10.0104 1.5 9.775 1.5 9.5V2.5C1.5 2.225 1.59792 1.98958 1.79375 1.79375C1.98958 1.59792 2.225 1.5 2.5 1.5H6V2.5H2.5V9.5H9.5V6H10.5V9.5C10.5 9.775 10.4021 10.0104 10.2063 10.2063C10.0104 10.4021 9.775 10.5 9.5 10.5H2.5ZM4.85 7.85L4.15 7.15L8.8 2.5H7V1.5H10.5V5H9.5V3.2L4.85 7.85Z" fill="black"/>
</svg>

      </p>
    </div>
  );
};
export default Cursor;

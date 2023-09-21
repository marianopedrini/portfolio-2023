import { useEffect, useLayoutEffect, useRef, useState } from "react"
import gsap from "gsap"
import { useGsapContext } from "@/hooks/useGsapContext"

const Cursor = () => {
    const [hoveringLink, setHoveringLink] = useState(false)
    // const [cursor, setHoveringLink] = useState(false)
    const cursorRef = useRef<HTMLDivElement>(null)
    
    useLayoutEffect(() => {
        const links = document.querySelectorAll('a')
        const onMouseMove = (e:any) => {
            const {clientX, clientY} = e
            gsap.to(cursorRef.current, {
                x: clientX,
                y: clientY,
            })
        }
        window.addEventListener('mousemove', onMouseMove)

        links.forEach(link => {
            link.addEventListener('mouseover', () => {
                setHoveringLink(true)
            })
            link.addEventListener('mouseleave', () => {
                setHoveringLink(false)
            })
        } )
    }, [])

    useGsapContext(() => {
        if (hoveringLink) {
            gsap.to(cursorRef.current, {
                scale: 4
            })
        } else {
            gsap.to(cursorRef.current, {
                scale: 1
            })
        }
    }, [cursorRef])

    
  return (
    <div className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[100] mix-blend-difference p-2.5 flex justify-center items-center bg-white" id="custom-cursor" ref={cursorRef}>
        <p className="text-2xl font-semibold hidden" id="cursor-text"> Cursor</p>
    </div>
  )
}
export default Cursor
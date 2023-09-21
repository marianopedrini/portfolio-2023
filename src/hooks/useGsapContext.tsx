import { gsap } from 'gsap'
import { useLayoutEffect } from 'react'

export const useGsapContext = (func: gsap.ContextFunc, deps: any[] = []) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(func, deps);

    return () => {
      ctx?.revert();
    };
  });
}

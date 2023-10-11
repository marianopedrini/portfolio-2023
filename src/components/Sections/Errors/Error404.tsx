'use client'
import { useLayoutEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import SplitType from 'split-type';

import Section from '@/components/Section/Section';
import { animate404 } from './animations';

const Error404 = () => {
  useLayoutEffect(() => {
    const titleLetters = new SplitType('[data-404-title]', { types: 'words' });
    const subtitleChars = new SplitType('[data-404-subtitle-chars]', { types: 'words' });
    const ctx = gsap.context(() => {
      animate404();
    });

    return () => ctx.revert();
  }, []);

  return (
    <Section extraClasses="flex flex-col items-center justify-center">
      <div className="w-fit container">
        <h1 className="opacity-0 text-5xl overflow-hidden md:text-7xl" data-404-title>404. What are you l👀king for?</h1>
        <p className="opacity-0 mt-8 mb-8 text-xl overflow-hidden md:mt-4"  data-404-subtitle>
          <span>This site is a single page because I am lazy.</span>{' '}<span data-404-subtitle-chars>I mean, because I am
          a minimalist.</span>
        </p>
        <Link
          href="/"
          className="opacity-0 p-2 pr-4 border-white border rounded-lg transition-colors hover:bg-white hover:text-black"
          data-404-btn
        >
            <span className='w-0 mr-2 inline-block overflow-hidden mb-px'>
                <svg width="28" height="8" viewBox="0 0 28 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.42889 7.8409L0.238865 4.38409C-0.0796204 4.17196 -0.0796204 3.82804 0.238865 3.61591L5.42889 0.159096C5.74738 -0.0530312 6.26375 -0.0530312 6.58223 0.159096C6.90072 0.371224 6.90072 0.71515 6.58223 0.927277L2.78441 3.45681L28 3.45682L28 4.54319L2.78441 4.54318L6.58223 7.07272C6.90072 7.28485 6.90072 7.62878 6.58223 7.8409C6.26375 8.05303 5.74738 8.05303 5.42889 7.8409Z" fill="white"/>
                </svg>
            </span>
          Return Home
        </Link>
      </div>
    </Section>
  );
};

export default Error404;

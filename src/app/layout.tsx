import localFont from 'next/font/local'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mariano Pedrini - Frontend Developer',
  description: 'Mariano Pedrini is a frontend developer from Argentina with focus on JavaScript and React.',
  keywords: ['Next.js', 'React', 'JavaScript', 'Frontend', 'Developer'],
  authors: [{ name: 'Mariano', url: 'https://github.com/marianopedrini' }],
  creator: 'Mariano Pedrini',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const avenir_next = localFont({
  src: [
    {
      path: '../fonts/AvenirNextLTPro-UltLt.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/AvenirNextLTPro-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/AvenirNextLTPro-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/AvenirNextLTPro-Demi.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/AvenirNextLTPro-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/AvenirNextLTPro-Heavy.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  display: 'swap', 
});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${avenir_next.className}`}>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}

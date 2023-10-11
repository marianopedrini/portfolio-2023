import localFont from 'next/font/local'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mariano Pedrini',
  description: 'Mariano Pedrini is a frontend developer from Argentina with focus on JavaScript.',
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

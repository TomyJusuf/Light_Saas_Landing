import type { Metadata } from 'next'
import './globals.css'
import { DM_Sans } from 'next/font/google'
import { twMerge } from 'tailwind-merge'

const dmSans = DM_Sans({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Light Saas Landing',
  description: 'Template coded by Tomas Matusek',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(`${dmSans.className}  antialiased bg-[#EAEEFE]`)}
      >
        {children}
      </body>
    </html>
  )
}

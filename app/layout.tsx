import type { Metadata } from 'next'
import { Prata } from 'next/font/google'
import './globals.css'
import FixedNavigation from '@/components/FixedNavigation'

const prata = Prata({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-prata'
})

export const metadata: Metadata = {
  title: '1 WEEK STAY BY NUDGE\' ONE.',
  description: '緑あふれる風景に溶け込む、自然体で過ごせる新しい自分だけの場所。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${prata.variable} font-prata`}>
        {children}
        <FixedNavigation />
      </body>
    </html>
  )
}


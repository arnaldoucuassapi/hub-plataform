import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'

const dm_sans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hub',
  description: 'Desenvolva seu Futuro, passo a passo: aprenda lógica de programação conosco!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}

import { Header } from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'JARI ALFENAS',
  openGraph: {
    title: 'JARI',
    description: 'Notificação',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="bg-slate-100  min-h-screen">
          <Header />

          {children}
        </div>
      </body>
    </html>
  )
}

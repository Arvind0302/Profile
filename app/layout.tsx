import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Particlesbackground from '@/components/Particlesbackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Arvind | Personal Portfolio",
  description: "Arvind is a full-stack developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} >
      <Particlesbackground></Particlesbackground>
        <Header></Header>
        {children}
        <Footer></Footer>
        </body>
    </html>
  )
}

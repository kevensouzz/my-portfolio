import './globals.css'
import { Sora } from "next/font/google"
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Particles from '@/components/Particles'
import TopLeftImg from '@/components/TopLeftImg'
import BackRightImg from "@/components/BackRightImg";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800",]
})

export const metadata = {
  title: 'Keven Souza - Portfólio',
  description: 'Fullstack Web Developer - Keven Souza | Portfólio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={`w-full h-screen overflow-hidden select-none bg-imgprimary bg-cover bg-no-repeat text-white font-sora`}>
        <Particles />
        <TopLeftImg />
        <BackRightImg />
        <Header />
        <Nav />
        {children}
      </body>
    </html>
  )
}

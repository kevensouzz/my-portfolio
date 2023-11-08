import './globals.css'
import { Sora } from "next/font/google"
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import TopLeftImg from '@/components/TopLeftImg'

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100","200","300","400","500","600","700","800",]
})

export const metadata = {
  title: 'Keven Souza - Portfólio',
  description: 'Fullstack Web Developer - Keven Souza | Portfólio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={`w-full h-screen overflow-hidden select-none bg-primary bg-cover bg-no-repeat text-white font-sora`}>
        <TopLeftImg />
        <Header />
        <Nav />
        {children}
      </body>
    </html>
  )
}

import './globals.css'

export const metadata = {
  title: 'Keven Souza - Portfólio',
  description: 'Fullstack Web Developer - Keven Souza | Portfólio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  )
}

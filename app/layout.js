import './globals.css'
import { Montserrat } from 'next/font/google'
import { Inter } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'We Think',
  description: 'Websites',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}

import './globals.css'
import { Montserrat } from 'next/font/google'
import { Inter } from 'next/font/google'
import { Roboto_Condensed } from 'next/font/google'
import { Roboto } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })
const roboto_condensed = Roboto_Condensed({ subsets: ['latin'], weight: ['700'] })
const roboto = Roboto({ subsets: ['latin'], weight: ['700']})

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

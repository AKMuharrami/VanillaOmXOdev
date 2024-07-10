import './globals.css'
import { Inter } from 'next/font/google'
import { Cairo } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
export const cairo = Cairo({
  subsets:['arabic'],
  weight: ['700'],
  variable: '--font-cairo'
})
export const metadata = {
  title: {
    default:'VanillOmXODev',
    template:'%s - VxO'
  },
  description: 'VanillaOm X ODev',
  openGraph: {
    title: 'VxO',
    description: 'VanillaOm X ODev'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    
  )
}

export  function RootLayout1({ children }) {
  return (
    <html lang="ar">
      <body className={cairo.variable}>{children}</body>
    </html>
    
  )
}
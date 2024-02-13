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
    default:'Vanilla Oman',
    template:'%s - VanillaOm'
  },
  description: 'Vanilla pods, extract, powder, paste - Oman',
  openGraph: {
    title: 'Vanilla Oman',
    description: 'We provide Vanilla products (beans, extract, paste, powder) - Oman'
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
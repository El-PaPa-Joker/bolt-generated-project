import './globals.css'
import { Inter } from 'next/font/google'
import { dir } from 'i18next'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ROI Speaks',
  description: 'Digital Marketing Agency',
}

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang} dir={dir(params.lang)}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

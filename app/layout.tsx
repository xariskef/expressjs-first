import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin', 'greek'] })

export const metadata = {
  title: 'Zlack - Η νέα πλατφόρμα επικοινωνίας',
  description: 'Ανακαλύψτε μια νέα εμπειρία επικοινωνίας με το Zlack',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="el">
      <body className={inter.className}>{children}</body>
    </html>
  )
}


import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'


export const metadata = {
  title: 'Love 2.0',
  author: 'ankit',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'} />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className={`flex flex-col w-full min-h-screen`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'


export const metadata = {
  metadataBase: new URL(process.env.host),
  title: 'Love 2.0 - It has to ring if you like someone',
  author: 'ankit628792',
  description: 'An application that lets the user know if someone who loves them is in their vicinity. It has to ring if you like someone in the world we live in now',
  openGraph: {
    title: 'Love Alarm 2.0 - It has to ring if you like someone',
    description: 'An application that lets the user know if someone who loves them is in their vicinity. It has to ring if you like someone in the world we live in now',
    url: process.env.host,
    siteName: 'Love Alarm 2.0',
    images: '/android-chrome-512x512.png',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KCSHVFK0DY"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', 'G-KCSHVFK0DY');
          `,
          }}
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-52W2BTR3');
          `,
          }}
        />
        {/* End Google Tag Manager */}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'} />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
        <meta name='keywords' content='love alarm app, love alarm, love alarm 2.0 , love alarm app 2.0, love alarm version 2, love 2.0, love, ankit, ankit62879, kim so hyun, kim so-hyun, love alarm download, love alarm apk, love alarm android, love alarm ios' />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className={`flex flex-col w-full min-h-screen`}>
        {/* Google Tag Manager (noscript) */}
        <noscript dangerouslySetInnerHTML={{
          __html: `
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-52W2BTR3"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
          `
        }} />

        {/* <End Google Tag Manager (noscript) */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

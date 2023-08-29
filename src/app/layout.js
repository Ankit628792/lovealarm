import Navbar from '@/components/Navbar'
import '@/app/globals.css'
import Footer from '@/components/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Love Alarm 2.0 - Ring yours crush alarm</title>
        <meta name='description' content='An app that lets the user know if someone who loves them is in their vicinity.' />
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
        <meta name='keywords' content='love alarm app, 사랑알람 2.0 , 사랑알람 , 사랑알람 2.0 앱, 사랑알람 앱, love alarm, love alarm 2.0 , love alarm app 2.0, love alarm version 2, love 2.0, love, ankit, ankit62879, kim so hyun, kim so-hyun, love alarm download, love alarm apk, love alarm android, love alarm ios, love alarm website , love alarm 2.0 website, love alarm 2.o website, 러브알람 2.0 홈페이지, 러브알람 홈페이지,, love alarm 2.o' />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" type="image/png" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
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

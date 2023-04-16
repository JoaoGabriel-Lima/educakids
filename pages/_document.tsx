import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="Educa Kids" />
        <meta property="og:locale" content="pt_BR"></meta>
        <meta property="og:site_name" content="Educa Kids"></meta>
        <meta property="og:url" content="https://educakids.vercel.app/" />
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:description"
          content="Potencialize a Alfabetização do seu Filho ainda em 2023"
        ></meta>
        {/* <meta property="og:image" content="/icon.png" /> */}
        <meta name="theme-color" content="#8C52FF"></meta>
        <meta charSet="UTF-8"></meta>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>
      <body className="">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

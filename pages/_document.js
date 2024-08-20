import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="zxx">
       <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,500;1,700&display=swap"
            rel="stylesheet"
          ></link>

           <link rel="icon" type="image/png" href="/images/favicon.png"></link> 
        </Head>

        <body>
          <Main />
          <NextScript />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
{
 "@context": "https://schema.org",
  "@type": "Organization",
 "name": "Bernum",
  "url": "https://www.bernum.ca",
 "logo": "http://bernum.ca/images/main-logo.png"
              }
            `,
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

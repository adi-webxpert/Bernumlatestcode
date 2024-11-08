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
          {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
      (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', 'GTM-5QFG3TFB');
    `,
            }}
          />
          {/* End Google Tag Manager  */}
        </Head>

        <body>
          <Main />
          <NextScript />

          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-5QFG3TFB"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }} // Corrected style usage
            ></iframe>
          </noscript>
          {/* End Google Tag Manager (noscript) */}

          {/* Google Tag Manager (noscript)  */}

          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-5QFG3TFB"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          {/* End Google Tag Manager (noscript)  */}
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

import Document, { Head, Html, Main, NextScript } from "next/document";

import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-VY9DX3NXC5"
    ></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-VY9DX3NXC5");
    </script> */}
          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

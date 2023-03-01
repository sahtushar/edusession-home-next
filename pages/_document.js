import Document, { Head, Html, Main, NextScript } from "next/document";

import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          
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

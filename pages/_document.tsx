import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Generated by create next app" />
          <link
            rel="stylesheet"
            href="https://unpkg.com/@sakun/system.css@0.1.0/dist/system.css"
          />
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

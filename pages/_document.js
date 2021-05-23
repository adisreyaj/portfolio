import Document, { Html, Main, NextScript } from 'next/document';
import Meta from '../components/Meta';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Meta />
        <body>
          <Main />
          <NextScript />
          <script
            async
            defer
            data-domain="sreyaj.dev"
            src="https://analytics.sreyaj.dev/js/plausible.js"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;

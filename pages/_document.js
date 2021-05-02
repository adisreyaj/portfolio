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
        </body>
      </Html>
    );
  }
}

export default MyDocument;

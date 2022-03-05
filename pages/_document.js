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
          <script async defer data-domain="adi.so" src="https://analytics.adi.so/js/plausible.js"></script>
          <script
            data-name="BMC-Widget"
            data-cfasync="false"
            src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
            data-id="adisreyaj"
            data-description="Support me on Buy me a coffee!"
            data-message=""
            data-color="#bcf48b"
            data-position="Right"
            data-x_margin="18"
            data-y_margin="18"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;

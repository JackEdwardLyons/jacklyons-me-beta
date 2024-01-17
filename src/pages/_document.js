import Document, { Html, Head, Main, NextScript } from "next/document";
import { Helmet } from "react-helmet";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    // see https://github.com/nfl/react-helmet#server-usage for more information
    // 'head' was occupied by 'renderPage().head', we cannot use it
    return { ...initialProps, helmet: Helmet.renderStatic() };
  }

  // should render on <html>
  get helmetHtmlAttrComponents() {
    return this.props.helmet.htmlAttributes.toComponent();
  }

  // should render on <body>
  get helmetBodyAttrComponents() {
    return this.props.helmet.bodyAttributes.toComponent();
  }

  // should render on <head>
  get helmetHeadComponents() {
    return Object.keys(this.props.helmet)
      .filter((el) => el !== "htmlAttributes" && el !== "bodyAttributes")
      .map((el) => this.props.helmet[el].toComponent());
  }

  render() {
    // if you don't like Helmet but you still want to set properties on body use this
    // const pageProps = _.get(this.props, '__NEXT_DATA__.props.pageProps');
    return (
      <Html {...this.helmetHtmlAttrComponents} lang="en-US">
        <Head>{this.helmetHeadComponents}</Head>
        {/* PWA meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="theme-color" content="#000000" />

        {/* make sure to provide the name of your icon in below.*/}
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <body {...this.helmetBodyAttrComponents}>
          <Main />
          <script src="/js/plugins.js" />
          <NextScript />
          <script
            defer
            data-domain="jacklyonsme-beta.netlify.app"
            src="https://plausible.io/js/plausible.js"
          ></script>
          <script
            defer
            data-domain="jacklyons.me"
            src="https://plausible.io/js/plausible.js"
          ></script>
        </body>
      </Html>
    );
  }
}

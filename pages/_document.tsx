import { Children } from "react";
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheets } from "@material-ui/styles";

async function getInitialProps(ctx: DocumentContext) {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      ...Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
}

const template = (
  // TODO: i18n 対応したい
  <Html lang="ja" dir="ltr">
    <Head>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default class extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return template;
  }
}

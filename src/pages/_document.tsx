import Document, { Html, Head, Main, NextScript } from "next/document"
import { CONFIG } from "site.config"

class MyDocument extends Document {
  render() {
    return (
      <Html lang={CONFIG.lang}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/apple-touch-icon.png"
          ></link>
          <link
            rel="alternate"
            type="application/rss+xml"
            title="RSS 2.0"
            href="/feed"
          ></link>
            {/* google analytics */}
            {CONFIG.googleAnalytics.enable === true && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${CONFIG.googleAnalytics.config.measurementId}`}
              ></script>
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments)}
                  gtag('js', new Date());
                  gtag('config', '${CONFIG.googleAnalytics.config.measurementId}', {
                    page_path: window.location.pathname,
                  });
                `,
                }}
              />
            </>
          )}
          {/* google ad sense */}
          {CONFIG.googleAdSense.enable === true && (
            <>
              <script
                data-ad-client={CONFIG.googleAdSense.config.dataAdClient}
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                ></script>
            </>
          )}
          {/* google search console */}
          {CONFIG.googleSearchConsole.enable === true && (
            <>
              <meta
                name="google-site-verification"
                content={CONFIG.googleSearchConsole.config.siteVerification}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

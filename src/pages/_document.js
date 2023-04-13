import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">

      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>Perception Test</title>
      </Head>
      <body style={{ backgroundColor: '#F5E3E3' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

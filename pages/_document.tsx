import { Html, Head, Main, NextScript } from 'next/document'
import { useRouter } from 'next/router'

export default function Document() {

	
	const currentUrl = `${process.env.APP_URL}`

  return (
    <Html lang="en">
      <Head>
				<meta itemProp='description' name='description' content='Frontend developer portfolio'/>
				<link rel='canonical' href={currentUrl} />
				<meta property='og:locale' content='ru' />
				<meta property='og:title' content='Frontend developer' />
				<meta property='og:url' content={currentUrl} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

import '@/assets/styles/index.scss'
import Layout from '@/components/Layout/Layout'
import type { AppProps } from 'next/app'
import { store } from './../app/store/store';
import { Provider } from 'react-redux';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
		<Provider store={store}>
			<Layout>
				<Head>
					<title>Alex Lei</title>
				</Head>
				<Component {...pageProps} />
			</Layout>
		</Provider>
		
	)
}


import Heading from '@/components/ui/Heading/Heading'
import Head from 'next/head'

export default function Error404() {
	return (
		<>
			<Head>
				<title>404 - Page Not Found</title>
				<meta name='robots' content='noindex, nofollow' />
			</Head>
			<Heading title={'404 - Page Not Found'}/>
		</>
		
	)
}

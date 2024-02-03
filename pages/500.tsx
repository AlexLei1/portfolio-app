
import Heading from '@/components/ui/Heading/Heading'
import Head from 'next/head'

export default function Error404() {
	return (
		<>
			<Head>
				<title>500 - Page Not Found</title>
				<meta name='robots' content='noindex, nofollow' />
			</Head>
			<Heading title={'500 - Page Not Found'}/>
		</>
		
	)
}




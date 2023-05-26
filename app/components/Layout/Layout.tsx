import {FC, useState, useEffect} from 'react'
import styles from './Layout.module.scss'
import Header from './Header/Header';
import { useRouter } from 'next/router';
import Loader from '@/ui/Loader/Loader';


const Layout: FC = ({ children }) => {
	const routers = useRouter()
	const isHome = routers.pathname === '/'
	const [isLoading, setIsLoading] = useState(isHome);

	return (
		<>
			{isLoading && isHome ? (
				<Loader finishLoading={() => setIsLoading(false)}/>
				) : (
					<div className={styles.layout}>
						<Header/>
						<div>{children}</div>
					</div>
				)
			}
		</>
	)
}

export default Layout
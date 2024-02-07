import {FC, useState, useEffect} from 'react'
import styles from './Layout.module.scss'
import Header from './Header/Header';
import { useRouter } from 'next/router';
import Loader from '@/ui/Loader/Loader';
import { useTypedSelector } from '@/hooks/useTypedSelector';

interface ILayout {
	children: React.ReactNode
}

const Layout: FC<ILayout> = ({ children }) => {
	const routers = useRouter()
	const isHome = routers.pathname === '/'
	const [isLoading, setIsLoading] = useState(isHome);
	const {isShow} = useTypedSelector(state => state.burger)

	return (
		<>
			{isLoading && isHome ? (
				<Loader finishLoading={() => setIsLoading(false)}/>
				) : (
					<div className={styles.layout}>
						{routers.asPath.slice(0,2) === '/#' || routers.asPath === '/'? (
							<Header/>
						) : null}
						<div className={isShow ? styles.filter : ''}>{children}</div>
					</div>
				)
			}
		</>
	)
}

export default Layout
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
	const [isLoading, setIsLoading] = useState(true);
	const {isShow} = useTypedSelector(state => state.burger)

	useEffect(() => {
		const timeout = setTimeout(() => setIsLoading(false), 3000);
		return () => clearTimeout(timeout);
  }, []);

	return (
		<>
			{isLoading ? (
				<Loader />
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
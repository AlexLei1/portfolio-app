import {FC, ReactNode} from 'react'
import styles from './Title.module.scss'

interface ITitle {
	children: ReactNode
}

const Title: FC<ITitle> = ({children}) => {

	return (
		<>
			<h2 className={styles.title}>{children}</h2>
		</>
	)
}

export default Title
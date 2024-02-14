import {FC} from 'react'
import styles from './Loader.module.scss'

const Loader:FC = () => {
	return (
		<span className={styles.loader}></span>
	)
}

export default Loader
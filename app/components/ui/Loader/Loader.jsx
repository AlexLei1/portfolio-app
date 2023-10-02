import {useEffect} from 'react'
import styles from './Loader.module.scss'
import { ILoader } from '@/ui/Loader/type.loader';



const Loader = ({finishLoading}) => {

	useEffect(() => {
		const timeout = setTimeout(() => finishLoading(), 3000);
		return () => clearTimeout(timeout);
  	}, []);

	return (
		<span className={styles.loader}></span>
	)
}

export default Loader
import { FC } from 'react'
import styles from './Heading.module.scss'
import { titleMerge } from '@/configs/seo.config';

const Heading: FC<{title: string}> = ({title}) => {
	return (
	 <h1 className={styles.heading}>{title}</h1>
	)
}

export default Heading
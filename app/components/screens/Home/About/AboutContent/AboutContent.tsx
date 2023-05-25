import {FC} from 'react'
import styles from './AboutContent.module.scss'
import Technologies from '@/components/ui/Technologies/Technologies';
import AboutText from './AboutText/AboutText';

const AboutContent: FC = () => {
	return (
		<div className={styles.container}>
			<AboutText/>
			<Technologies/>
		</div>
	)
}

export default AboutContent
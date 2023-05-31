import {FC} from 'react'
import styles from './AboutContent.module.scss'
import AboutText from './AboutText/AboutText';
import AboutImage from './AboutImage/AboutImage'
const AboutContent: FC = () => {
	return (
		<div className={styles.container}>
			<AboutText/>
			<AboutImage/>
		</div>
	)
}

export default AboutContent
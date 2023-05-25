import {FC} from 'react'
import styles from './About.module.scss'
import cn from 'classnames'
import Title from '@/components/ui/Title/Title'
import AboutContent from './AboutContent/AboutContent'
import { useCheckingScope } from '@/hooks/useCheckingScope';

const About:FC = () => {
	const {ref, inView, entry} = useCheckingScope()

	return (
		<section ref={ref} id="about" className={cn(styles.section)}>
			<Title>About</Title>
			<AboutContent/>
		</section>
	)
}

export default About



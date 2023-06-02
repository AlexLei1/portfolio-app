import {FC} from 'react'
import Title from '@/components/ui/Title/Title'
import AboutContent from './AboutContent/AboutContent'
import { useCheckingScope } from '@/hooks/useCheckingScope';

const About:FC = () => {


	return (
		<section id="about">
			<Title>About</Title>
			<AboutContent/>
		</section>
	)
}

export default About



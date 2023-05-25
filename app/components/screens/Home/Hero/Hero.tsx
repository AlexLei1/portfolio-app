import {FC, useState} from 'react'
import styles from './Hero.module.scss'
import cn from 'classnames'
import { useCheckingScope } from '@/hooks/useCheckingScope';
import TypingText from '@/ui/TypingText/TypingText';

const Hero:FC = () => {
	const {ref, inView, entry} = useCheckingScope()


	return (

		<section ref={ref} className={styles.section}>
			<div className={styles.title}>
				<TypingText inView={inView}>
					Hi, my name is
				</TypingText>
			</div>
			<div>
				<h2>Alex Lei.</h2>
			</div>
			<div>
				<h3>I build things for the web.</h3>
			</div>
			<div>
				<p>I am a software engineer specializing in creating exceptional digital applications. 
					I am currently looking for a job in this field</p>
			</div>
		</section>
	)
}

export default Hero
import {FC, useState} from 'react'
import styles from './Hero.module.scss'
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
				<p>Я инженер-программист, специализирующийся на создании цифровых приложений. Сейчас ищу работу в этой сфере</p>
			</div>
		</section>
	)
}

export default Hero
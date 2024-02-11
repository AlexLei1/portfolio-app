import {FC, useState} from 'react'
import styles from './Hero.module.scss'
import { useCheckingScope } from '@/hooks/useCheckingScope';
import TypingText from '@/ui/TypingText/TypingText';
import {motion} from 'framer-motion'

const Hero:FC = () => {
	const {ref, inView, entry} = useCheckingScope()
	
	const textAnimation = {
		hidden: {
			x: -100,
			opacity: 0,
		},
		visible: (custom: number) => ({
			x: 0,
			opacity: 1,
			transition: { delay: custom * 0.2}
		}) 
	}

	return (
		<motion.section 	
			initial='hidden'
			whileInView='visible'
			viewport={{amount: 0.2, once: true}}
			ref={ref} 
			className={styles.section}
		>
			<div className={styles.title}>
				<TypingText inView={inView}>
					Hi, my name is
				</TypingText>
			</div>

			<motion.div custom={1} variants={textAnimation}>
				<h2>Alex Lei.</h2>
			</motion.div>

			<motion.div custom={2} variants={textAnimation}>
				<h3>I build things for the web.</h3>
			</motion.div>

			<div>
				<p>Я инженер-программист, специализирующийся на создании цифровых приложений. Сейчас ищу работу в этой сфере</p>
			</div>
		</motion.section>
	)
}

export default Hero
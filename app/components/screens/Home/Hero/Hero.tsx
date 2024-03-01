import {FC, useState} from 'react'
import styles from './Hero.module.scss'
import { useCheckingScope } from '@/hooks/useCheckingScope';
import TypingText from '@/ui/TypingText/TypingText';
import {motion} from 'framer-motion'
import {leftAnimation} from '@/animations/motion'

const Hero:FC = () => {
	const {ref, inView, entry} = useCheckingScope()
	
	return (
		<motion.section 	
			initial='hidden'
			whileInView='visible'
			viewport={{amount: 1, once: true}}
			ref={ref} 
			className={styles.section}
		>
			<div className={styles.title}>
				<TypingText inView={inView}>
					Hi, my name is
				</TypingText>
			</div>

			<motion.div custom={1} variants={leftAnimation}>
				<h2>Alex Lei.</h2>
			</motion.div>

			<motion.div custom={2} variants={leftAnimation}>
				<h3>I build things for the web.</h3>
			</motion.div>

			<motion.div custom={3} variants={leftAnimation}>
				<p>Я программист, специализирующийся на создании цифровых приложений. Сейчас ищу работу в этой сфере.</p>
			</motion.div>
		</motion.section>
	)
}

export default Hero
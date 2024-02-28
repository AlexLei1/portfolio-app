import {FC} from 'react'
import styles from './Contact.module.scss'
import Title from '@/components/ui/Title/Title';
import LinkItem from '@/components/ui/LinkItem/LinkItem';
import {motion} from 'framer-motion'
import {topAnimation} from '@/animations/motion'

const Contact:FC = () => {
	return (
		<motion.section 
			id='contact' 
			initial='hidden'
			whileInView='visible'
			viewport={{amount: 0.5, once: true}} 
			className={styles.section}>
			<Title>Contact</Title>
			<div>
				<motion.h1 custom={2} variants={topAnimation}>Get In Touch</motion.h1>
				<motion.p custom={3} variants={topAnimation}>Мой почтовый ящик всегда открыт. Если у вас есть предожения, или вы просто хотите поздороваться, я постараюсь ответить вам!</motion.p>
			</div>
			<motion.div custom={4} variants={topAnimation}>
				<LinkItem href="mailto:sasha.volkov2015@yandex.ru" typeLink={'button'}>
					Сontact
				</LinkItem>
			</motion.div>
		</motion.section>
	)
}

export default Contact
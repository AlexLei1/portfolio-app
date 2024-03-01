import {FC} from 'react'
import styles from './AboutText.module.scss'
import {motion} from 'framer-motion'
import {leftAnimation} from '@/animations/motion'

const AboutText: FC = () => {
	return (
		<motion.div 			
			initial='hidden'
			whileInView='visible'
			viewport={{amount: 1, once: true}} 
			className={styles.container}>
			<motion.p custom={2} variants={leftAnimation}>Как младший frontend-разработчик, обладаю впечатляющим арсеналом навыков. 
			Преуспеваю в разработке и поддержке адаптивных веб-сайтов, которые обеспечивают удобство работы для пользователей.</motion.p>
			<motion.p custom={3} variants={leftAnimation}>Мой опыт заключается в создании динамичных, привлекательных интерфейсов 
			путем написания чистого и оптимизированного кода, а также использования передовых инструментов и методов разработки.</motion.p>
		</motion.div>
	)
}

export default AboutText


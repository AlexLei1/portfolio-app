import {FC} from 'react'
import styles from './AboutText.module.scss'
import {motion} from 'framer-motion'
import {leftAnimation, scaleAnimation, topAnimation} from '@/animations/motion'

const AboutText: FC = () => {
	return (
		<motion.div 			
			initial='hidden'
			whileInView='visible'
			viewport={{amount: 0.2, once: true}} 
			className={styles.container}>
			<motion.p custom={2} variants={scaleAnimation}>Как младший фронтенд-разработчик, я обладаю впечатляющим арсеналом навыков в HTML, 
				CSS, JavaScript, React, Next, Redux и TypeScript. Я преуспеваю в разработке и поддержке 
				адаптивных веб-сайтов, которые обеспечивают удобство работы с пользователем.</motion.p>
			<motion.p custom={3} variants={scaleAnimation}>Мой опыт заключается в создании динамичных, привлекательных интерфейсов посредством 
				написания чистого и оптимизированного кода и использования передовых инструментов 
				и методов разработки. </motion.p>
		</motion.div>
	)
}

export default AboutText
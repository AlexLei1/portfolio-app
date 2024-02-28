import {FC} from 'react'
import styles from './AboutImage.module.scss'
import {motion} from 'framer-motion'
import {scaleAnimation} from '@/animations/motion'


const AboutImage: FC = () => {
	return (
		<motion.div 			
			initial='hidden'
			whileInView='visible'
			viewport={{amount: 1, once: true}}>
			<motion.div custom={4} variants={scaleAnimation} className={styles.image}></motion.div>
		</motion.div>
		
	)
}

export default AboutImage
import {FC, ReactNode} from 'react'
import styles from './Title.module.scss'
import {motion} from 'framer-motion'
import {leftAnimation} from '@/animations/motion'

interface ITitle {
	children: ReactNode
}

const Title: FC<ITitle> = ({children}) => {

	return (
		<motion.div 	
			initial='hidden'
			whileInView='visible'
			viewport={{amount: 1, once: true}}>

			<motion.h2 custom={1} variants={leftAnimation} className={styles.title}>{children}</motion.h2>
		</motion.div>
	)
}

export default Title
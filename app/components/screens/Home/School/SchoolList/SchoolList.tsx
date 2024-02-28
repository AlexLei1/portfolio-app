import {FC} from 'react'
import styles from './SchoolList.module.scss'
import cn from 'classnames'
import { dataSchools } from 'types/school.interface'
import {motion} from 'framer-motion'
import {topAnimation,scaleAnimation} from '@/animations/motion'

interface ISchoolsList{
	data: dataSchools
	activePanel: number
	setActivePanel: any
}

const SchoolsList:FC<ISchoolsList> = ({activePanel, setActivePanel, data}) => {
	
	return (
		<motion.div 			
			initial='hidden'
			whileInView='visible'
			viewport={{amount: 1, once: true}} 
			className={styles.tabList}>
			{data.map((school, index) => (
				<motion.button 
					custom={school.id + 3} 
					variants={scaleAnimation}
					key={school.id} 
					className={cn({[styles.active]: (activePanel === index)})} 
					onClick={() => setActivePanel(index)}>
						<span>{school.name}</span>
				</motion.button>
			))}
		
			<div className={cn(
				{[styles.index1] : activePanel === 1}, 
				{[styles.index2] : activePanel === 2}, 
				{[styles.index3] : activePanel === 3})}>
			</div>

		</motion.div>
	)
}

export default SchoolsList


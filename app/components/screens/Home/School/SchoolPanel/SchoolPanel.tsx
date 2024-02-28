import {FC, useEffect} from 'react'
import styles from './SchoolPanel.module.scss'
import { dataSchools } from 'types/school.interface'
import {motion} from 'framer-motion'
import { scaleAnimation} from '@/animations/motion'

interface ISchoolPanel{
	activePanel: number
	data: dataSchools
}

const SchoolPanel:FC<ISchoolPanel> = ({activePanel, data}) => {

	
	return (
		<motion.div 
			initial='hidden'
			whileInView='visible'
			viewport={{amount: 0.2, once: true}} 
			className={styles.tabPanel}>
			<div>
				<motion.h3 custom={6} variants={scaleAnimation}><span><a href={data[activePanel].link}>{data[activePanel].name}</a></span></motion.h3>
				<motion.p custom={7} variants={scaleAnimation}>{data[activePanel].data}</motion.p>
				<div>
					<ul>
						<motion.li custom={8} variants={scaleAnimation}>{data[activePanel].company}</motion.li>
						<motion.li custom={9} variants={scaleAnimation}>{data[activePanel].hard}</motion.li>
						<motion.li custom={10} variants={scaleAnimation}>{data[activePanel].soft}</motion.li>
					</ul>
				</div>
			</div>
		</motion.div>
	)
}

export default SchoolPanel
import {FC} from 'react'
import styles from './SchoolList.module.scss'
import cn from 'classnames'
import { dataSchools } from 'types/school.interface'


interface ISchoolsList{
	data: dataSchools
	activePanel: number
	setActivePanel: any
}

const SchoolsList:FC<ISchoolsList> = ({activePanel, setActivePanel, data}) => {
	
	console.log(styles.index1)
	

	return (
		<div className={styles.tabList}>
			{data.map((school, index) => (
				<button 
					key={school.id} 
					className={cn({[styles.active]: (activePanel === index)})} 
					onClick={() => setActivePanel(index)}>
						<span>{school.name}</span>
				</button>
			))}
			<div className={cn(
				{[styles.index1] : activePanel === 1}, 
				{[styles.index2] : activePanel === 2}, 
				{[styles.index3] : activePanel === 3})}>
				</div>
		</div>
	)
}

export default SchoolsList
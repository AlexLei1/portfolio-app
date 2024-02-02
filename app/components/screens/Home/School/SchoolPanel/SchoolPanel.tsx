import {FC, useEffect} from 'react'
import styles from './SchoolPanel.module.scss'
import { dataSchools } from 'types/school.interface'

interface ISchoolPanel{
	activePanel: number
	data: dataSchools
}

const SchoolPanel:FC<ISchoolPanel> = ({activePanel, data}) => {

	
	return (
		<div className={styles.tabPanel}>
			<div>
				<h3><span><a href={data[activePanel].link}>{data[activePanel].name}</a></span></h3>
				<p>{data[activePanel].data}</p>
				<div>
					<ul>
						<li>{data[activePanel].company}</li>
						<li>{data[activePanel].hard}</li>
						<li>{data[activePanel].soft}</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default SchoolPanel
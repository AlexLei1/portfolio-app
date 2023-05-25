import {FC, useState} from 'react'
import  Title  from '@/components/ui/Title/Title';
import styles from './School.module.scss'
import {schoolsData} from '../../../../data/school'
import SchoolsList from './SchoolList/SchoolList';
import SchoolPanel from './SchoolPanel/SchoolPanel';


const School: FC = () => {
const [activePanel, useActivePanel] = useState(0)

	return (
		<section id='school' className={styles.section}>
			<Title>Schools</Title>
			<div className={styles.inner}>
				<SchoolsList activePanel={activePanel} useActivePanel={useActivePanel} data={schoolsData}/>
				<SchoolPanel activePanel={activePanel} data={schoolsData}/>
			</div>
		</section>
	)
}

export default School
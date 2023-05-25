import {FC, useState, useEffect} from 'react'
import styles from './SchoolList.module.scss'
import cn from 'classnames'

type JSONValue =
    | string
    | number
    | boolean
    | { [x: string]: JSONValue }
    | Array<JSONValue>;

interface ISchoolsList{
	data: JSONValue
	activePanel: number
	useActivePanel: any
}

const SchoolsList:FC<ISchoolsList> = ({activePanel, useActivePanel, data}) => {
	console.log(activePanel)
	return (
		<div className={styles.tabList}>
			{data.map((school: {id: number, name: string, info: string, hard: string, soft: string}, index: number) => (
				<button key={school.id} className={cn({[styles.active]: (activePanel === index)})} onClick={() => useActivePanel(index)}><span>{school.name}</span></button>
			))}
		</div>
	)
}

export default SchoolsList
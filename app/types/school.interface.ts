export interface ISchool {
	id: number
}

export interface ISchoolObj {
	id: number
	name: string
	link: string
	data: string
	company: string
	hard: string
	soft: string
}

export interface dataSchools extends Array<ISchoolObj>{}
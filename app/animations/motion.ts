export const leftAnimation = {
	hidden: {
		x: -100,
		opacity: 0,
	},
	visible: (custom: number) => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.2}
	}) 
}

export const rightAnimation = {
	hidden: {
		x: 100,
		opacity: 0,
	},
	visible: (custom: number) => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.2}
	}) 
}

export const topAnimation = {
	hidden: {
		y: -100,
		opacity: 0,
	},
	visible: (custom: number) => ({
		y: 0,
		opacity: 1,
		transition: { delay: custom * 0.2}
	}) 
}

export const buttonAnimation = {
	hidden: {
		y: 100,
		opacity: 0,
	},
	visible: (custom: number) => ({
		y: 0,
		opacity: 1,
		transition: { delay: custom * 0.2}
	}) 
}

export const scaleAnimation = {
	hidden: {
		scale: 0,
		opacity: 0,
	},
	visible: (custom: number) => ({
		scale: 1,
		opacity: 1,
		transition: { delay: custom * 0.2}
	}) 
}

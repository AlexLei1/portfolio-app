import {FC, useEffect, useRef, useState} from 'react'
import { IGlhfText } from './type.glhfText';



export const useGlhfText = () => {
	debugger
	const glhfTextRef = useRef<HTMLSpanElement>(null)
	const [isText, setIsText] = useState(glhfTextRef.current?.dataset.value)
	const [isHover, setIsHover] = useState(false)


	const textTransform = (isText: string) => {
		let iteration = 0;
		// console.log(glhfTextRef.current?.innerText)
		// console.log(glhfTextRef.current?.dataset.value)

		const interval = setInterval(() => {
			setIsText(isText.split().map((letter, index) => {
				if(index < iteration) {
					return isText[index]
				}
				return setIsText("ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random() * 26)])
			}).join(""))
				
			if(iteration >= isText.length){ 
				clearInterval(interval);
			}
			iteration += 1 / 3;
		}, 30)
	}
	
	useEffect(() => {

	}, [isHover])

	return {glhfTextRef, isText, setIsHover, textTransform}
}
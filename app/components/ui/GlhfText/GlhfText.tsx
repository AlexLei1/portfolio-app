import { FC, useEffect, useState, useRef } from 'react'
import { IGlhfText } from './type.glhfText'
import { useGlhfText } from './useGlhfText';

const GlhfText:FC<IGlhfText> = ({text, children, ...props}) => {

	const { glhfTextRef, isText, setIsHover, textTransform } = useGlhfText()
	

	return (
		<>
			<span 
				ref={glhfTextRef} 
				data-value={text} 
				onMouseEnter={() => textTransform(isText)}  
				{...props}>
					{isText}
			</span>
		</>
	)
}

export default GlhfText
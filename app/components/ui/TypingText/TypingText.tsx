import {FC, useRef, useEffect} from 'react'
import styles from './Typing.module.scss'
import { useTypedTitle } from '@/hooks/useTypedTitle';


interface ITypingText {
	children: string
	inView: boolean
}

const TypingText: FC<ITypingText> = ({inView, children}) => {
	const ref = useRef(null)
	useTypedTitle(ref, inView, children)

	return (
		<h1>
			<span ref={ref}></span>
		</h1>
	)
}

export default TypingText
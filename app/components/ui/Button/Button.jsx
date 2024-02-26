import { FC, ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.scss'
import Link from 'next/link'
import { useActions } from '@/hooks/useActions'

// interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
// 	children: ReactNode 
// }

const Button = ({children, href, ...rest}) => {
	const {toggleCursor} = useActions()
	const linkEnter = () => toggleCursor("active");
	const linkLeave = () => toggleCursor("inactive");
	
	return (
		<Link onMouseEnter={linkEnter} onMouseLeave={linkLeave} className={styles.button} href='/' >{children}</Link>
	)
}

export default Button
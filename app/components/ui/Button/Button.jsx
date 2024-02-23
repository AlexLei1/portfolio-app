import { FC, ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.scss'
import Link from 'next/link'
import { useActions } from '@/hooks/useActions'

// interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
// 	children: ReactNode 
// }

const Button = ({children, href, ...rest}) => {
	const {toggleCursor} = useActions()

	const linkEnter = () => toggleCursor("link");
	const linkLeave = () => toggleCursor("default");
	return (
		<Link className={styles.button} href='/' ><p onMouseEnter={linkEnter} onMouseLeave={linkLeave}>{children}</p></Link>
	)
}

export default Button
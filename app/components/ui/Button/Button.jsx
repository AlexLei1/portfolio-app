import { FC, ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.scss'
import Link from 'next/link'

// interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
// 	children: ReactNode 
// }

const Button = ({children, href, ...rest}) => {
	return (
		<Link className={styles.button} href={href} >{children}</Link>
	)
}

export default Button
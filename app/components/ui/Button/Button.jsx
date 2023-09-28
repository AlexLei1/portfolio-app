import { FC, ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.scss'

// interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
// 	children: ReactNode 
// }

const Button = ({children, ...rest}) => {
	return (
		<button className={styles.button}>
				{children}
		</button>
	)
}

export default Button
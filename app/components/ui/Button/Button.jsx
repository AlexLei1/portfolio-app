// import { FC, ButtonHTMLAttributes } from 'react'
import styles from './Button.module.scss'

// interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({children, ...rest}) => {
	return (
		<button className={styles.button}>
				{children}
		</button>
	)
}

export default Button
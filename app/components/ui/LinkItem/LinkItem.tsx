import { FC, ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './LinkItem.module.scss'
import Link from 'next/link'
import { useActions } from '@/hooks/useActions'
import {motion} from 'framer-motion'
import {leftAnimation} from '@/animations/motion'

interface ILinkItem extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode
	href: string
	typeLink: string
	styleLink?: string
}

const LinkItem:FC<ILinkItem> = ({children, href, typeLink, styleLink, ...rest}) => {
	const {toggleCursor} = useActions()
	const linkEnter = () => toggleCursor("active");
	const linkLeave = () => toggleCursor("inactive");

	return (
		typeLink === 'button' ? (
			<Link onMouseEnter={linkEnter} onMouseLeave={linkLeave} className={styles.button} href={href} type={typeLink}>{children}</Link>
		) : (
			<Link onMouseEnter={linkEnter} onMouseLeave={linkLeave} className={styleLink} href={href} type={typeLink}></Link>
		)
	)
}

export default LinkItem
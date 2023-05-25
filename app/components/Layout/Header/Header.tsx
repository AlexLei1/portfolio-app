import {FC, useState} from 'react'
import Nav from './Nav/Nav';
import styles from './Header.module.scss'
import cn from 'classnames'
import {useScrollDirection} from '@/hooks/useScrollDirection';



const Header:FC = () => {
	const scrollDir = useScrollDirection()
	return (
		<header className={cn(styles.header,  {[styles.up]: (scrollDir === 'up')},  {[styles.down]: (scrollDir === 'down')})}>
			<Nav/>
		</header>
	)
}

export default Header
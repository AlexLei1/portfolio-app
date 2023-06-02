import {FC, useEffect} from 'react'
import styles from './Nav.module.scss'
import Logo from './Logo/Logo';
import NavItems from './NavItems/NavItems';
import Burger from './Burger/Burger';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import MenuItems from './MenuItems/MenuItems';


const Nav: FC = () => {
	const {isShow} = useTypedSelector(state => state.burger)
	const {toggleBurger} = useActions()

	useEffect(() => {
		isShow ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
 	}, [isShow]);

	const {ref} = useOnClickOutside(toggleBurger, isShow)
	
	return (
		<div ref={ref} className={styles.nav}>
			<Logo/>
			<NavItems/>
			<MenuItems/>
			<Burger/>
		</div>
	)
}

export default Nav
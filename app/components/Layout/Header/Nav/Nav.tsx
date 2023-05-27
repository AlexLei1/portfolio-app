import {FC} from 'react'
import styles from './Nav.module.scss'
import Logo from './Logo/Logo';
import NavItems from './NavItems/NavItems';
import Burger from './Burger/Burger';


const Nav: FC = () => {
	return (
		<div className={styles.nav}>
			<Logo/>
			<NavItems/>
			<Burger/>
		</div>
	)
}

export default Nav
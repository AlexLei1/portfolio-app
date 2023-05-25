import {FC} from 'react'
import styles from './Nav.module.scss'
import Logo from './Logo/Logo';
import NavItems from './NavItems/NavItems';
import BurgerMenu from './BurgerMenu/BurgerMenu';


const Nav: FC = () => {
	return (
		<div className={styles.nav}>
			<Logo/>
			<NavItems/>
			<BurgerMenu/>
		</div>
	)
}

export default Nav
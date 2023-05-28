import {FC} from 'react'
import styles from './NavItems.module.scss'
import  Link  from 'next/link';
import Button from '@/components/ui/Button/Button';

const NavItems: FC = () => {
	return (
		<nav className={styles.nav}>
			<ul>
				<li><Link href='#about' scroll={false}>About</Link></li>
				<li><Link href='#school' scroll={false}>School</Link></li>
				<li><Link href='#applications' scroll={false}>Applications</Link></li>
				<li><Link href='#contact' scroll={false}>Contact</Link></li>
			</ul>
			<Button>Resume</Button>
		</nav>
	)
}

export default NavItems
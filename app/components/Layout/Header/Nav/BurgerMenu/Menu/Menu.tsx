import {FC} from 'react'
import Link  from 'next/link';
import Button  from '@/components/ui/Button/Button';
import styles from './Menu.module.scss'
import cn from 'classnames';

interface IMenu {
	isShow: boolean | undefined
}

const Menu:FC<IMenu> = ({isShow}) => {
	return (
		<aside className={cn(styles.aside, {[styles.active]: isShow})}>
			<nav>
				<ul>
					<li><Link href='#about' scroll={false}>About</Link></li>
					<li><Link href='#school' scroll={false}>School</Link></li>
					<li><Link href='#applications' scroll={false}>Applications</Link></li>
					<li><Link href='#contact' scroll={false}>Contact</Link></li>
				</ul>
				<Button>Resume</Button>
			</nav>
		</aside>
	)
}

export default Menu
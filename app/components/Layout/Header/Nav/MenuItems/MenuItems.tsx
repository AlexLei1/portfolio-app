import {FC} from 'react'
import styles from './MenuItems.module.scss'
import  Link  from 'next/link';
import LinkItem from '@/components/ui/LinkItem/LinkItem';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import cn from 'classnames';
import { useActions } from '@/hooks/useActions';


const MenuItems: FC = () => {

	const {isShow} = useTypedSelector(state => state.burger)
	const { toggleBurger } = useActions()

	return (
	<div  className={cn(styles.container, {[styles.active]: isShow})}>
		<nav className={styles.nav}>
			<ul>
				<li><Link onClick={() => toggleBurger({isShow})} href='#about' scroll={false}>About</Link></li>
				<li><Link onClick={() => toggleBurger({isShow})} href='#school' scroll={false}>School</Link></li>
				<li><Link onClick={() => toggleBurger({isShow})} href='#applications' scroll={false}>Applications</Link></li>
				<li><Link onClick={() => toggleBurger({isShow})} href='#contact' scroll={false}>Contact</Link></li>
			</ul>
			<LinkItem typeLink={'button'} href="/pdf/Resume.pdf">Resume</LinkItem>
		</nav>
	</div>
	)
}

export default MenuItems
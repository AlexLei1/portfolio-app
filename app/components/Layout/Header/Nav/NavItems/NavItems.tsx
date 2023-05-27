import {FC} from 'react'
import styles from './NavItems.module.scss'
import  Link  from 'next/link';
import Button from '@/components/ui/Button/Button';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import cn from 'classnames';


const NavItems: FC = () => {
	const {isShow} = useTypedSelector(state => state.burger)

	return (
	<div className={cn(styles.container, {[styles.active]: isShow})}>
		<nav>
			<ul>
				<li><Link href='#about' scroll={false}>About</Link></li>
				<li><Link href='#school' scroll={false}>School</Link></li>
				<li><Link href='#applications' scroll={false}>Applications</Link></li>
				<li><Link href='#contact' scroll={false}>Contact</Link></li>
			</ul>
			<Button>Resume</Button>
		</nav>
	</div>
	)
}

export default NavItems
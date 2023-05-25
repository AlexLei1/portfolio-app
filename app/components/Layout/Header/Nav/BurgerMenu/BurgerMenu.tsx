import {FC} from 'react'
import cn from 'classnames'
import styles from './BurgerMenu.module.scss'
import Burger from './Burger/Burger';
import Menu from './Menu/Menu';
import { useTypedSelector } from '@/hooks/useTypedSelector';
 


const BurgerMenu: FC = () => {
	const {isShow} = useTypedSelector(state => state.burger)
	return (
		<div className={styles.wrapper}>
			<Burger/>
			<Menu isShow={!isShow}/>
		</div>
	)
}

export default BurgerMenu
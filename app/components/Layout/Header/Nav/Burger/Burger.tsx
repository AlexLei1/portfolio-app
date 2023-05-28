import {FC} from 'react'
import styles from './Burger.module.scss'
import cn from 'classnames'
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';


const Burger: FC = () => {
	const {toggleBurger} = useActions()
	const {isShow} = useTypedSelector(state => state.burger)

	return (
		<div className={styles.container}>
			<button onClick={() => toggleBurger({isShow})} className={cn(styles.burger, {[styles.active]: isShow})}>
				<span></span>
			</button>
		</div>
	)
}

export default Burger
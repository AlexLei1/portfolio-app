import {FC} from 'react'
import styles from './Burger.module.scss'
import cn from 'classnames'
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';


const Burger: FC = () => {
	const {toggleBurger} = useActions()
	const {isShow} = useTypedSelector(state => state.burger)

	return (
		<button className={cn(styles.hamContainer)} onClick={() => toggleBurger({isShow})}>
			<svg className={cn(styles.ham, {[styles.active]: isShow})} viewBox='0 0 100 100'>
				<path className={cn(styles.line, styles.top)} d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"></path>
				<path className={cn(styles.line, styles.middle)} d="m 30,50 h 40"></path>
				<path className={cn(styles.line, styles.bottom)} d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"></path>
			</svg>
		</button>
	)
}

export default Burger
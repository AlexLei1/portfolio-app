import { FC } from 'react'
import cn  from 'classnames'
import { IHome } from './home.types';
import styles from './Home.module.scss'
import Hero from './Hero/Hero';
import About from './About/About';
import School from './School/School';
import Applications from './Applications/Applications';
import Contact from './Contact/Contact';



const Home:FC<IHome> = () => {

	return (
		<main className={cn(styles.wrapper, styles.fillHeight)}>
			<Hero/>
			<About/>
			<School/>
			<Applications/>
			<Contact/>
		</main>
	)
}

export default Home
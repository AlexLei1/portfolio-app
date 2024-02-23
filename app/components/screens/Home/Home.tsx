import {useEffect, useState, FC } from 'react'
import cn  from 'classnames'
import { IHome } from './home.types';
import styles from './Home.module.scss'
import Hero from './Hero/Hero';
import About from './About/About';
import School from './School/School';
import Applications from './Applications/Applications';
import Contact from './Contact/Contact';
import Corsor from '../../ui/Cursor/Cursor'


const Home:FC<IHome> = () => {

	const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;
  useEffect(() => {
   const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

	return (
		<main className={cn(styles.wrapper, styles.fillHeight)}>
			{width > breakpoint ? (
				<Corsor/>
			) : null} 
			<Hero/>
			<About/>
			<School/>
			<Applications/>
			<Contact/>
		</main>
	)
}

export default Home
import {FC, useState, useEffect} from 'react'
import styles from './Loader.module.scss'
import  Image  from 'next/image'
import logoImage from '@/assets/images/logo.svg'
import  anime  from 'animejs';
import { ILoader } from '@/ui/Loader/type.loader';



const Loader = ({finishLoading}) => {
	const [isMounted, setIsMounted] = useState(false);

	const animate = () => {
		const loader = anime.timeline({
			complete: () => finishLoading(),
		});

		loader
		.add({
			targets: '#logo path',
			delay: 300,
			duration: 1500,
			easing: 'easeInOutQuart',
			strokeDashoffset: [anime.setDashoffset, 0],
		})
		.add({
			targets: '#logo #B',
			duration: 700,
			easing: 'easeInOutQuart',
			opacity: 1,
		})
		.add({
			targets: '#logo',
			delay: 500,
			duration: 300,
			easing: 'easeInOutQuart',
			opacity: 0,
			scale: 0.1,
		})
		.add({
			targets: '.loader',
			duration: 200,
			easing: 'easeInOutQuart',
			opacity: 0,
			zIndex: -1,
		});
	}
	
	useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

	return (
		<div className={styles.loader}>
			<Image
					src={logoImage}
					width={300}
					height={79.65}
					alt="logo app"
					draggable={false}
				/>
		</div>
	)
}

export default Loader
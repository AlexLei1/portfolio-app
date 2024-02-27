import {FC} from 'react'
import Title from '@/components/ui/Title/Title';
import styles from './Applications.module.scss'
import Link from 'next/link';
import  Image  from 'next/image';
import { applicationsData } from '@/data/application';
import LinkItem from '@/components/ui/LinkItem/LinkItem';
import {motion} from 'framer-motion'
import {rightAnimation, leftAnimation, scaleAnimation} from '@/animations/motion'

const Applications: FC = () => {
	
	return (
		<section id='applications' className={styles.section}>
			<Title>My applications</Title>
			
			<ul>
				{applicationsData.map((data) => (
					
					(data.id % 2) ? [
						<motion.li 
							initial='hidden'
							whileInView='visible'
							viewport={{amount: 0.2, once: true}} 
							key={data.id} 
							className={styles.itemLeft}>
							<div>
								<div className={styles.title}>
									<motion.h1 custom={3} variants={leftAnimation}>{data.title}</motion.h1>
								</div>
								<div className={styles.description}>
									<motion.p custom={4} variants={leftAnimation}>{data.description}</motion.p>
								</div>
								<ul className={styles.stack}>
									{data.stacks.map((stack, itemId) => (
										<motion.li custom={itemId + 5} variants={leftAnimation} className={styles.item} key={itemId}>{stack}</motion.li>
									) )}
								</ul>
								<motion.div custom={10} variants={scaleAnimation} className={styles.links}>
									<LinkItem typeLink='link' styleLink='_icon-link' href={data.linkApp}></LinkItem>
									<LinkItem typeLink='link' styleLink='_icon-github' href={data.linkGit}></LinkItem>
								</motion.div>
							</div>
							<motion.div custom={2} variants={scaleAnimation}>
								<Image src={data.src}  alt='img' width={0} height={0} sizes='100vw' />
							</motion.div>
						</motion.li>
					] : [
						<motion.li
							initial='hidden'
							whileInView='visible'
							viewport={{amount: 0.2, once: true}} 
							key={data.id} 
							className={styles.itemRight}>
							<motion.div  custom={2} variants={scaleAnimation}>
								<Image src={data.src}  alt='img' width={0} height={0} sizes='100vw' />
							</motion.div>
							<div>
								<div className={styles.title}>
									<motion.h1 custom={3} variants={rightAnimation}>{data.title}</motion.h1>
								</div>
								<div className={styles.description}>
									<motion.p custom={4} variants={rightAnimation}>{data.description}</motion.p>
								</div>
								<ul className={styles.stack}>
									{data.stacks.map((stack, itemId) => (
										<motion.li custom={itemId + 5} variants={rightAnimation} className={styles.item} key={itemId}>{stack}</motion.li>
									) )}
								</ul>
								<motion.div custom={10} variants={scaleAnimation} className={styles.links}>
									<LinkItem typeLink='link' styleLink='_icon-link' href={data.linkApp}></LinkItem>
									<LinkItem typeLink='link' styleLink='_icon-github' href={data.linkGit}></LinkItem>
								</motion.div>
							</div>
						</motion.li>
					]
				
				))}
			</ul>
		</section>
	)
}

export default Applications

// https://vercel.com/blog/building-a-fast-animated-image-gallery-with-next-js
import {FC} from 'react'
import Title from '@/components/ui/Title/Title';
import styles from './Applications.module.scss'
import Link from 'next/link';
import  Image  from 'next/image';
import { applicationsData } from '@/data/application';
const Applications: FC = () => {
	
	return (
		<section id='applications' className={styles.section}>
			<Title>My applications</Title>
			
			<ul>
				{applicationsData.map((data) => (
					
					(data.id % 2) ? [
						<li key={data.id} className={styles.itemLeft} >
							<div>
								<div className={styles.title}>
									<h1>{data.title}</h1>
								</div>
								<div className={styles.description}>
									<p>{data.description}</p>
								</div>
								<ul className={styles.stack}>
									{data.stacks.map((stack, itemId) => (
										<li className={styles.item} key={itemId}>{stack}</li>
									) )}
								</ul>
								<div className={styles.links}>
									<Link className='_icon-link' href={data.linkApp}></Link>
									<Link className='_icon-github' href={data.linkGit}></Link>
								</div>
							</div>
							<div>
								<Image  src={data.img} style={{ maxWidth: "100%"}} alt='img' fill={true}/>
							</div>
						</li>
					] : [
						<li key={data.id} className={styles.itemRight}>
							<div>
								<Image  src={data.img} style={{ maxWidth: "100%"}} alt='img' fill={true}/>	
							</div>
							<div>
								<div className={styles.title}>
									<h1>{data.title}</h1>
								</div>
								<div className={styles.description}>
									<p>{data.description}</p>
								</div>
								<ul className={styles.stack}>
									{data.stacks.map((stack, itemId) => (
										<li className={styles.item} key={itemId}>{stack}</li>
									) )}
								</ul>
								<div className={styles.links}>
									<Link className='_icon-link' href={data.linkApp}></Link>
									<Link className='_icon-github' href={data.linkGit}></Link>
								</div>
							</div>
						</li>
					]
				
				))}
			</ul>
		</section>
	)
}

export default Applications
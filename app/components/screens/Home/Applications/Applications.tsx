import {FC} from 'react'
import Title from '@/components/ui/Title/Title';
import styles from './Applications.module.scss'
import Link from 'next/link';
import  Image  from 'next/image';
import { applicationsData } from './../../../../data/application';
const Applications: FC = () => {
	return (
		<section id='applications' className={styles.section}>
			<Title>My applications</Title>
			
			<ul className={styles.list}>
				{applicationsData.map((data) => (
					<li key={data.id}>
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
								<Link className='icon-link' href='#about'></Link>
								<Link className='icon-github' href='https://github.com/AlexLei1/online-cinema-frontend'></Link>
							</div>
						</div>
						<div>
							<div>
								<Image  src={data.img} style={{ maxWidth: "100%"}} alt='img' fill={true}/>
							</div>
						</div>
					</li>
				))}
			</ul>
		</section>
	)
}

export default Applications
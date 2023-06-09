import {FC} from 'react'
import Title from '@/components/ui/Title/Title';
import styles from './Applications.module.scss'
import Link from 'next/link';
import  Image  from 'next/image';
import 'font-awesome/css/font-awesome.min.css';

const Applications: FC = () => {
	return (
		<section className={styles.section}>
			<Title>My applications</Title>

			<ul className={styles.list}>
				<li >
					<div>
						<div className={styles.title}>
							<h1>text</h1>
						</div>
						<div className={styles.description}>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sequi quas dolorem totam nulla alias mollitia similique officiis illo magni, ea non, veniam a provident vel necessitatibus voluptas explicabo obcaecati!</p>
						</div>
						<ul className={styles.stack}>
							<li className={styles.item}>Next</li>
							<li className={styles.item}>Redux</li>
							<li className={styles.item}>SCSS</li>
							<li className={styles.item}>NodeJS</li>
							<li className={styles.item}>RTK query</li>
						</ul>
						<div className={styles.links}>
							<Link className='_icon-link' href='#about'></Link>
							<Link className='_icon-github' href='#about'></Link>
						</div>
					</div>
					<div>
						<div>
							
							<Image  src="/applications.jpg" style={{ maxWidth: "100%"}} alt='img'  fill={true}  />
						</div>
					</div>
				</li>
			</ul>

		</section>
	)
}

export default Applications
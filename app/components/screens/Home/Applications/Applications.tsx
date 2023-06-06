import {FC} from 'react'
import Title from '@/components/ui/Title/Title';
import styles from './Applications.module.scss'
import TypingText  from '@/ui/TypingText/TypingText';
import Link from 'next/link';
import  Image  from 'next/image';

const Applications: FC = () => {
	return (
		<section className={styles.section}>
			<Title>My applications</Title>

			<ul >
				<li >
					<div>
						<div className={styles.title}>
							<TypingText inView={true}>Hi, my name is</TypingText>
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
							<Link href='#about'>.1</Link>
							<Link href='#about'>.2</Link>
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
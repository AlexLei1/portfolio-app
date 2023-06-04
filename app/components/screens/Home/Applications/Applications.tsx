import {FC} from 'react'
import Title from '@/components/ui/Title/Title';
import styles from './Applications.module.scss'
import TypingText  from '@/ui/TypingText/TypingText';



const Applications: FC = () => {
	return (
		<section className={styles.section}>
			<Title>My applications</Title>

			<ul >
				<li >
					<div>
						
					</div>
					<div>
						<TypingText>Hi, my name is</TypingText>
						<h2></h2>
						<div></div>
						<ul>
							<li></li>
						</ul>
						<div>
							
						</div>
					</div>
				</li>
			</ul>

		</section>
	)
}

export default Applications
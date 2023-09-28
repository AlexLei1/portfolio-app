import {FC} from 'react'
import styles from './Contact.module.scss'
import Title from '@/components/ui/Title/Title';
import Button from '@/components/ui/Button/Button';

const Contact:FC = () => {
	return (
		<section id='contact' className={styles.section}>
			<Title>Contact</Title>
			<div>
				<div>Get In Touch</div>
				<div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit velit quia adipisci. Laudantium quia aliquid veritatis reprehenderit nam! Quos quia nobis maxime mollitia. Optio ad repellendus quod recusandae quae magni.</p></div>
			</div>
			<div>
				<Button>Сontact</Button>
			</div>
		</section>
	)
}

export default Contact
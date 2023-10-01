import {FC} from 'react'
import styles from './Contact.module.scss'
import Title from '@/components/ui/Title/Title';
import Button from '@/components/ui/Button/Button';

const Contact:FC = () => {
	return (
		<section id='contact' className={styles.section}>
			<Title>Contact</Title>
			<div>
				<h1>Get In Touch</h1>
				<div><p>Мой почтовый ящик всегда открыт. Если у вас есть предожения, или вы просто хотите поздороваться, я постараюсь ответить вам!</p></div>
			</div>
			<div>
				<Button>
					<a href="mailto:sasha.volkov2015@yandex.ru">Сontact</a>
				</Button>
			</div>
		</section>
	)
}

export default Contact
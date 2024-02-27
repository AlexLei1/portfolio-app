import {FC} from 'react'
import styles from './Contact.module.scss'
import Title from '@/components/ui/Title/Title';
import LinkItem from '@/components/ui/LinkItem/LinkItem';

const Contact:FC = () => {
	return (
		<section id='contact' className={styles.section}>
			<Title>Contact</Title>
			<div>
				<h1>Get In Touch</h1>
				<div><p>Мой почтовый ящик всегда открыт. Если у вас есть предожения, или вы просто хотите поздороваться, я постараюсь ответить вам!</p></div>
			</div>
			<div>
				<LinkItem href="mailto:sasha.volkov2015@yandex.ru" typeLink={'button'}>
					Сontact
				</LinkItem>
			</div>
		</section>
	)
}

export default Contact
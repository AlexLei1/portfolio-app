import {FC} from 'react'
import Image from 'next/image';
import styles from './Contact.module.scss'

const Contact:FC = () => {
	return (
		<section id='contact'>
			<Image      
				src="/applications.jpg"
				fill={false}
				width={500}
				height={500}
				style={{objectFit: "cover"}}
				alt="Picture of the author"/>
		</section>
	)
}

export default Contact
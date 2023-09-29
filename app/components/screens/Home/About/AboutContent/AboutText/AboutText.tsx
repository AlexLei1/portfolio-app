import {FC} from 'react'
import styles from './AboutText.module.scss'
const AboutText: FC = () => {
	return (
		<div className={styles.container}>
			<p>Как младший фронтенд-разработчик, я обладаю впечатляющим арсеналом навыков в HTML, 
				CSS, JavaScript, React, Next, Redux и TypeScript. Я преуспеваю в разработке и поддержке 
				адаптивных веб-сайтов, которые обеспечивают удобство работы с пользователем.</p>
			<p>Мой опыт заключается в создании динамичных, привлекательных интерфейсов посредством 
				написания чистого и оптимизированного кода и использования передовых инструментов 
				и методов разработки. </p>
		</div>
	)
}

export default AboutText
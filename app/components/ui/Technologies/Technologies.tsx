import {FC, useEffect} from 'react'
import TagCloud from "TagCloud"
import styles from './Technologies.module.scss'

const Technologies:FC = () => {
	useEffect(() => {
		
		return () => {
			const container = '#tagcloud';
			const texts = [
				"HTML",
				"CSS",
				"SASS",
				"JavaScript",
				"React",
				"Vue",
				"Next",
				"NodeJS",
				"Babel", "Jquery", "ES6", "GIT",
				"GITHUB",
			]

			const options = {
				radius: 200,
				maxSpeed: "normal",
				initSpeed: "normal",
				keep: false,
			}

			TagCloud(container, texts, options)
		}
	}, [])

	return (
		<>
			<div className={styles.container}>
				<span id='tagcloud'></span>
			</div>
		</>
	)
}

export default Technologies
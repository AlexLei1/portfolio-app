import {FC} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logoImage from '../../../../../../public/images/logo.svg'
import styles from './Logo.module.scss'
const Logo: FC = () => {

	return (
		<div className={styles.logo}>
			<Link href="/">
				<Image
					src={logoImage}
					width={113}
					height={30}
					alt="logo app"
					draggable={false}
				/>
			</Link>
		</div>
	)
}

export default Logo
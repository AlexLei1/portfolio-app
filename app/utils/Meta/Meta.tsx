import {FC} from 'react'
import { ISeo } from './meta.types';
import  Head  from 'next/head'; 
import { useRouter } from 'next/router';
import { MetaNoIndex } from './MetaNoIndex';

const Meta: FC<ISeo> = ({title, discription: string, image = null, children}) => {

	const { asPath } = useRouter()
	const currentUrl = `${process.env.APP_URL}${asPath}`
	return (
		<>
			{description ? (
				<Head>
					{/* itemProp помогает в индексации */}
					<title itemProp='headline'>{titleMerge(title)}</title>
					{/* стандартное описание сайта огроничение 152 символа */}
					<meta itemProp='description' name='description' content={onlyText(description, 152)}/>
					{/* указываем текущий url страницы */}
					<link rel='canonical' href={currentUrl} />
					{/* указываем язык страницы для социальных сетей */}
					<meta property='og:locale' content='en' />
					{/* указываем title для социальных сетей */}
					<meta property='og:title' content={titleMerge(title)} />
					{/* указываем url для социальных сетей */}
					<meta property='og:url' content={currentUrl} />
					{/* указываем image ИЛИ logo для социальных сетей */}
					<meta property='og:image' content={image || logoImage} />
					{/* указываем siteName - 'Movie app' для социальных сетей */}
					<meta property='og:site_name' content={siteName} />
					{/* указываем image для социальных сетей */}
					<meta property='og:description' content={onlyText(description, 197)}/>
				</Head>
			) : (
				<MetaNoIndex title={title}/>
			)}
			{children}
		</>
	)
}

export default Meta
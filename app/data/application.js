import onlineCinema from '/public/online-cinema.png'
import employee from '/public/employee-login.png'
import pairGame from '/public/pair-game.png'

export const applicationsData = [
	{
		id: 1,
		title: 'Online Cinema',
		description: 'Эта платформа предоставляет пользователям доступ к широкому спектру фильмов и мультфильмов. Это уникальное решение для тех, кто хочет наслаждаться любимыми фильмами и сериалами в любое время и из любой точки мира, используя различные устройства, такие как компьютеры, смартфоны и планшеты.',
		stacks: ['SCSS', 'Next JS', 'Typescript', 'Axios', 'Redux', 'React-Query'],
		src: onlineCinema,
		linkApp: 'https://github.com/AlexLei1/online-cinema-frontend',
		linkGit: 'https://github.com/AlexLei1/online-cinema-frontend'
	},
	{
		id: 2,
		title: 'Employee',
		description: 'Это интуитивно понятное и простое в использовании приложение для управления сотрудниками, которое позволяет добавлять сотрудников и управлять их данными где угодно.',
		stacks: ['SCSS', 'Next JS', 'Redux', 'Typescript'],
		src: employee,
		linkApp: 'https://github.com/AlexLei1/employees-app-frontend',
		linkGit: 'https://github.com/AlexLei1/employees-app-frontend'
	},
	{
		id: 3,
		title: 'Pair Game',
		description: 'Это увлекательная игра, предназначенная для игроков всех возрастов и уровней навыков. В этой игре вам предстоит продемонстрировать свою наблюдательность и умение мыслить логически, чтобы успешно угадывать различные пары.',
		stacks: ['SCSS', 'React', 'Typescript'],
		src: pairGame,
		linkApp: 'https://github.com/AlexLei1/pair-game-app',
		linkGit: 'https://github.com/AlexLei1/pair-game-app'
	},	
]
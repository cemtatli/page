import type { Work } from '$lib/types/work';

export const works: Work[] = [
	{
		id: '1',
		title: 'Frontend Developer',
		company: 'Tech Company',
		description:
			'Modern web uygulamaları geliştirme, performans optimizasyonu ve kullanıcı deneyimi iyileştirmeleri.',
		period: '2022 - Şimdi',
		technologies: ['React', 'TypeScript', 'Tailwind CSS'],
		link: 'https://example.com',
		image: '/images/work-1.png'
	},
	{
		id: '2',
		title: 'Frontend Developer',
		company: 'Epigra',
		description:
			'At Epigra, I gained experience in digital transformation by providing digital product development and software services to both large and small-scale companies. Our customer-focused approach allowed me to contribute to successful projects across various industries and significantly enhanced my skills in many areas, such as design, customer communication, and the use of different technologies and programming languages.',
		period: '2023 - 2024',
		technologies: [
			'React.js',
			'Next.js',
			'Alpine.js',
			'JavaScript',
			'Tailwind CSS',
			'Statamic',
			'Strapi'
		],
		link: 'https://epigra.com',
		image: '/images/epigra.jpg'
	}
];

import type { Bookmark } from '$lib/types/bookmark';

export const bookmarks: Bookmark[] = [
	{
		id: '1',
		title: 'Modern Web Geliştirme',
		description: 'Frontend geliştirme hakkında kapsamlı bir rehber.',
		url: 'https://example.com/web-dev',
		type: 'blog',
		icon: '📝'
	},
	{
		id: '2',
		title: 'VS Code İpuçları',
		description: 'Verimli kod yazımı için VS Code püf noktaları.',
		url: 'https://example.com/vscode-tips',
		type: 'resource',
		icon: '💡'
	},
	{
		id: '3',
		title: 'Frontend Araçları',
		description: 'Web geliştirme sürecini kolaylaştıran araçlar.',
		url: 'https://example.com/tools',
		type: 'tool',
		icon: '🛠️'
	}
];

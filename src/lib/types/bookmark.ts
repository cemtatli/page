export interface Bookmark {
	id: string;
	title: string;
	description: string;
	url: string;
	type: 'blog' | 'tool' | 'resource';
	icon?: string;
}

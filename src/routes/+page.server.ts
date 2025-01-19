import { getBookmarks } from '$lib/services/raindrop';
import { RAINDROP_TOKEN } from '$env/static/private';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		const bookmarks = await getBookmarks(RAINDROP_TOKEN);
		return {
			bookmarks: bookmarks.map((bookmark) => ({
				id: bookmark._id.toString(),
				title: bookmark.title,
				description: bookmark.excerpt,
				url: bookmark.link,
				type: bookmark.tags[0] || 'other',
				icon: '🔖'
			}))
		};
	} catch (error) {
		console.error('Failed to fetch bookmarks:', error);
		return {
			bookmarks: []
		};
	}
};

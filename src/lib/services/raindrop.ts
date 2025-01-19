interface RaindropBookmark {
	_id: number;
	title: string;
	excerpt: string;
	link: string;
	tags: string[];
	cover: string;
}

interface RaindropResponse {
	items: RaindropBookmark[];
	count: number;
}

const RAINDROP_API_URL = 'https://api.raindrop.io/rest/v1';

export async function getBookmarks(token: string): Promise<RaindropBookmark[]> {
	const response = await fetch(`${RAINDROP_API_URL}/raindrops/0`, {
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json'
		}
	});

	if (!response.ok) {
		throw new Error('failed to fetch bookmarks');
	}

	const data: RaindropResponse = await response.json();
	return data.items;
}

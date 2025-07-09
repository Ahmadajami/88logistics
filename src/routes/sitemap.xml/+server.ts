
import * as sitemap from 'super-sitemap';
import type { RequestHandler } from '@sveltejs/kit';
import { dev } from '$app/environment';

export const GET: RequestHandler = async ({ url }) => {
	const origin = dev ? url.origin : 'https://example.com';
	return await sitemap.response({
		origin: origin,
		defaultPriority: 0.7,
		sort: 'alpha',
	});
};

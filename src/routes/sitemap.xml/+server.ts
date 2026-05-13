import type { RequestHandler } from './$types';
import { guides } from '$lib/data/guides.js';

export const prerender = true;

export const GET: RequestHandler = () => {
	const base = 'https://falcon-spanish.com';

	const pages = [
		{ path: '', priority: '1.0', changefreq: 'weekly' },
		{ path: '/falcon', priority: '0.95', changefreq: 'monthly' },
		{ path: '/falcon/rooms', priority: '0.9', changefreq: 'monthly' },
		{ path: '/falcon/gallery', priority: '0.75', changefreq: 'monthly' },
		{ path: '/falcon/location', priority: '0.8', changefreq: 'monthly' },
		{ path: '/falcon/contact', priority: '0.9', changefreq: 'monthly' },
		{ path: '/spanish', priority: '0.95', changefreq: 'monthly' },
		{ path: '/spanish/rooms', priority: '0.9', changefreq: 'monthly' },
		{ path: '/spanish/gallery', priority: '0.75', changefreq: 'monthly' },
		{ path: '/spanish/location', priority: '0.8', changefreq: 'monthly' },
		{ path: '/spanish/contact', priority: '0.9', changefreq: 'monthly' },
		{ path: '/rooms', priority: '0.8', changefreq: 'monthly' },
		{ path: '/gallery', priority: '0.7', changefreq: 'monthly' },
		{ path: '/location', priority: '0.8', changefreq: 'monthly' },
		{ path: '/guides', priority: '0.8', changefreq: 'weekly' },
		{ path: '/faq', priority: '0.7', changefreq: 'monthly' },
		{ path: '/contact', priority: '0.9', changefreq: 'monthly' },
		// Guide articles — auto-populated from guides.ts
		...guides.map((g) => ({
			path: `/guides/${g.slug}`,
			priority: '0.7',
			changefreq: 'monthly'
		}))
	];

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		(p) => `  <url>
    <loc>${base}${p.path}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'max-age=0, s-maxage=86400'
		}
	});
};

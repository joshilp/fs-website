import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = () => {
	const base = 'https://falcon-spanish.com';

	const pages = [
		{ path: '', priority: '1.0', changefreq: 'weekly' },
		{ path: '/rooms', priority: '0.9', changefreq: 'monthly' },
		{ path: '/gallery', priority: '0.7', changefreq: 'monthly' },
		{ path: '/location', priority: '0.8', changefreq: 'monthly' },
		{ path: '/contact', priority: '0.9', changefreq: 'monthly' }
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

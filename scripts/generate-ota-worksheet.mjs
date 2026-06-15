import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

function countUnits(property, slug) {
	const tsv = fs.readFileSync(path.join(root, 'inventory', `${property}-rooms.tsv`), 'utf8');
	return tsv
		.trim()
		.split('\n')
		.slice(1)
		.filter((line) => line.split('\t')[1] === slug).length;
}

function loadProducts(property) {
	const dir = path.join(root, 'content', property);
	return fs
		.readdirSync(dir, { withFileTypes: true })
		.filter((d) => d.isDirectory())
		.map((d) => {
			const raw = fs.readFileSync(path.join(dir, d.name, 'product.yaml'), 'utf8');
			const data = yaml.load(raw);
			return { slug: d.name, ...data };
		})
		.sort((a, b) => a.sortOrder - b.sortOrder);
}

function section(property, title) {
	const products = loadProducts(property);
	let md = `## ${title}\n\n`;
	md += `| Room type | Units | Cover source | Gallery | OTA description |\n`;
	md += `|---|---:|---|---|---|\n`;

	for (const p of products) {
		const units = countUnits(property, p.slug);
		const cover = p.photos?.cover ?? '— assign in photo-mapping.json';
		const gallery = (p.photos?.gallery ?? []).filter(Boolean).join(', ') || '—';
		const ota = (p.description?.ota ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
		md += `| ${p.name} | ${units} | ${cover} | ${gallery} | ${ota} |\n`;
	}

	md += `\n### File paths (after photos applied)\n\n`;
	for (const p of products) {
		md += `- **${p.name}:** \`src/lib/assets/images/${property}/products/${p.slug}/cover.jpg\`\n`;
	}
	md += '\n';
	return md;
}

let out = `# OTA Listing Worksheet\n\n`;
out += `Copy \`description.ota\` from each \`content/{property}/{slug}/product.yaml\` into Booking.com / Expedia.\n`;
out += `Assign photos in [\`.dev/photo-mapping.json\`](photo-mapping.json), then run \`node scripts/apply-product-photos.mjs\`.\n\n`;
out += section('falcon', 'Falcon Resort');
out += section('spanish', 'Spanish Fiesta Resort');

fs.writeFileSync(path.join(root, '.dev', 'OTA-WORKSHEET.md'), out);
console.log('Wrote .dev/OTA-WORKSHEET.md');

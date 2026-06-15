import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const mappingPath = path.join(root, '.dev', 'photo-mapping.json');
if (!fs.existsSync(mappingPath)) {
	console.error('Missing .dev/photo-mapping.json');
	process.exit(1);
}

const mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf8'));

function findSourceFile(property, filename) {
	const folder = property === 'falcon' ? 'Falcon' : 'Spanish';
	const base = path.join(root, '.dev-photos', folder);
	const candidates = [filename, filename.replace(/\.jpg$/i, '.JPEG'), filename.replace(/\.jpeg$/i, '.JPEG')];
	for (const name of candidates) {
		const full = path.join(base, name);
		if (fs.existsSync(full)) return full;
	}
	// case-insensitive search
	const files = fs.readdirSync(base);
	const lower = filename.toLowerCase();
	const match = files.find((f) => f.toLowerCase() === lower);
	return match ? path.join(base, match) : null;
}

let copied = 0;
let skipped = 0;

for (const [property, products] of Object.entries(mapping)) {
	for (const [slug, photos] of Object.entries(products)) {
		const destDir = path.join(root, 'src/lib/assets/images', property, 'products', slug);
		fs.mkdirSync(destDir, { recursive: true });

		if (photos.cover) {
			const src = findSourceFile(property, photos.cover);
			if (src) {
				fs.copyFileSync(src, path.join(destDir, 'cover.jpg'));
				console.log(`cover: ${property}/${slug} <- ${path.basename(src)}`);
				copied++;
			} else {
				console.warn(`missing cover source: ${property}/${slug} ${photos.cover}`);
				skipped++;
			}
		}

		if (photos.gallery?.length) {
			const galleryDir = path.join(destDir, 'gallery');
			fs.mkdirSync(galleryDir, { recursive: true });
			photos.gallery.forEach((file, i) => {
				if (!file) return;
				const src = findSourceFile(property, file);
				if (src) {
					const num = String(i + 1).padStart(2, '0');
					fs.copyFileSync(src, path.join(galleryDir, `${num}.jpg`));
					console.log(`gallery: ${property}/${slug}/${num}.jpg <- ${path.basename(src)}`);
					copied++;
				} else {
					console.warn(`missing gallery source: ${property}/${slug} ${file}`);
					skipped++;
				}
			});
		}
	}
}

console.log(`Done. ${copied} copied, ${skipped} skipped.`);

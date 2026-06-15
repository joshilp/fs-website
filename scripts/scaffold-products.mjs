import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const PRODUCT_META = {
	falcon: {
		'retro-suite-2-queens-kitchen': {
			category: 'retro',
			categoryLabel: 'Retro',
			sortOrder: 1,
			beds: { queens: 2, doubles: 0, kitchen: 'full' },
			sleeps: 4,
			features: ['2 Queen Beds', 'Full Kitchen', 'Air Conditioning', 'Private Bathroom', 'TV']
		},
		'retro-family-suite-2-doubles-kitchen': {
			category: 'retro',
			categoryLabel: 'Retro',
			sortOrder: 2,
			beds: { queens: 0, doubles: 2, kitchen: 'full' },
			sleeps: 4,
			features: ['2 Double Beds', 'Full Kitchen', 'Air Conditioning', 'Private Bathroom', 'TV']
		},
		'retro-family-suite-1-queen-2-doubles-kitchen': {
			category: 'retro',
			categoryLabel: 'Retro',
			sortOrder: 3,
			beds: { queens: 1, doubles: 2, kitchen: 'full' },
			sleeps: 6,
			features: [
				'1 Queen + 2 Doubles',
				'Full Kitchen',
				'Air Conditioning',
				'Private Bathroom',
				'TV'
			]
		},
		'retro-studio-1-queen-kitchen': {
			category: 'retro',
			categoryLabel: 'Retro',
			sortOrder: 4,
			beds: { queens: 1, doubles: 0, kitchen: 'full' },
			sleeps: 2,
			features: ['1 Queen Bed', 'Full Kitchen', 'Air Conditioning', 'Private Bathroom', 'TV']
		},
		'beachside-studio-1-queen': {
			category: 'beachside',
			categoryLabel: 'Beachside',
			sortOrder: 5,
			beds: { queens: 1, doubles: 0, kitchen: false },
			sleeps: 2,
			features: ['1 Queen Bed', 'Air Conditioning', 'Private Bathroom', 'TV']
		},
		'beachside-family-suite-1-queen-1-double': {
			category: 'beachside',
			categoryLabel: 'Beachside',
			sortOrder: 6,
			beds: { queens: 1, doubles: 1, kitchen: false },
			sleeps: 4,
			features: ['1 Queen + 1 Double', 'Air Conditioning', 'Private Bathroom', 'TV']
		},
		'beachside-suite-2-doubles-kitchen': {
			category: 'beachside',
			categoryLabel: 'Beachside',
			sortOrder: 7,
			beds: { queens: 0, doubles: 2, kitchen: 'full' },
			sleeps: 4,
			features: ['2 Double Beds', 'Full Kitchen', 'Air Conditioning', 'Private Bathroom', 'TV']
		},
		'beachfront-suite-2-queens-kitchen': {
			category: 'beachfront',
			categoryLabel: 'Beachfront',
			sortOrder: 8,
			beds: { queens: 2, doubles: 0, kitchen: 'full' },
			sleeps: 4,
			features: ['2 Queen Beds', 'Full Kitchen', 'Air Conditioning', 'Private Bathroom', 'TV']
		}
	},
	spanish: {
		'beachfront-studio-1-queen-kitchen': {
			category: 'beachfront',
			categoryLabel: 'Beachfront',
			sortOrder: 1,
			beds: { queens: 1, doubles: 0, kitchen: 'full' },
			sleeps: 2,
			features: ['1 Queen Bed', 'Full Kitchen', 'Air Conditioning', 'Private Bathroom', 'TV']
		},
		'beachside-family-suite-2-queens-kitchen': {
			category: 'beachside',
			categoryLabel: 'Beachside',
			sortOrder: 2,
			beds: { queens: 2, doubles: 0, kitchen: 'full' },
			sleeps: 4,
			features: ['2 Queen Beds', 'Full Kitchen', 'Air Conditioning', 'Private Bathroom', 'TV']
		},
		'family-suite-2-queens-kitchen': {
			category: 'family',
			categoryLabel: 'Family Suite',
			sortOrder: 3,
			beds: { queens: 2, doubles: 0, kitchen: 'full' },
			sleeps: 4,
			features: ['2 Queen Beds', 'Full Kitchen', 'Air Conditioning', 'Private Bathroom', 'TV']
		},
		'studio-2-queens-kitchen': {
			category: 'studio',
			categoryLabel: 'Studio',
			sortOrder: 4,
			beds: { queens: 2, doubles: 0, kitchen: 'full' },
			sleeps: 4,
			features: ['2 Queen Beds', 'Full Kitchen', 'Air Conditioning', 'Private Bathroom', 'TV']
		},
		'studio-1-queen-kitchen': {
			category: 'studio',
			categoryLabel: 'Studio',
			sortOrder: 5,
			beds: { queens: 1, doubles: 0, kitchen: 'full' },
			sleeps: 2,
			features: ['1 Queen Bed', 'Full Kitchen', 'Air Conditioning', 'Private Bathroom', 'TV']
		},
		'two-bedroom-suite-2-queens-kitchen': {
			category: 'two-bedroom',
			categoryLabel: 'Two Bedroom',
			sortOrder: 6,
			beds: { queens: 2, doubles: 0, kitchen: 'full' },
			sleeps: 4,
			features: ['2 Queen Beds', 'Full Kitchen', 'Air Conditioning', 'Private Bathroom', 'TV']
		},
		'studio-suite-2-queens-kitchen': {
			category: 'studio',
			categoryLabel: 'Studio',
			sortOrder: 7,
			beds: { queens: 2, doubles: 0, kitchen: 'full' },
			sleeps: 4,
			features: ['2 Queen Beds', 'Full Kitchen', 'Air Conditioning', 'Private Bathroom', 'TV']
		},
		'studio-1-queen': {
			category: 'studio',
			categoryLabel: 'Studio',
			sortOrder: 8,
			beds: { queens: 1, doubles: 0, kitchen: false },
			sleeps: 2,
			features: ['1 Queen Bed', 'Air Conditioning', 'Private Bathroom', 'TV']
		},
		'studio-2-queens': {
			category: 'studio',
			categoryLabel: 'Studio',
			sortOrder: 9,
			beds: { queens: 2, doubles: 0, kitchen: false },
			sleeps: 4,
			features: ['2 Queen Beds', 'Air Conditioning', 'Private Bathroom', 'TV']
		},
		'townside-studio-2-queens': {
			category: 'townside',
			categoryLabel: 'Townside',
			sortOrder: 10,
			beds: { queens: 2, doubles: 0, kitchen: false },
			sleeps: 4,
			features: ['2 Queen Beds', 'Air Conditioning', 'Private Bathroom', 'TV']
		},
		'townside-studio-1-queen': {
			category: 'townside',
			categoryLabel: 'Townside',
			sortOrder: 11,
			beds: { queens: 1, doubles: 0, kitchen: false },
			sleeps: 2,
			features: ['1 Queen Bed', 'Air Conditioning', 'Private Bathroom', 'TV']
		},
		'family-suite-2-queens-kitchen-private-balcony': {
			category: 'family',
			categoryLabel: 'Family Suite',
			sortOrder: 12,
			beds: { queens: 2, doubles: 0, kitchen: 'full' },
			sleeps: 4,
			features: [
				'2 Queen Beds',
				'Full Kitchen',
				'Private Balcony',
				'Air Conditioning',
				'Private Bathroom',
				'TV'
			]
		},
		'townside-studio-2-queens-kitchen': {
			category: 'townside',
			categoryLabel: 'Townside',
			sortOrder: 13,
			beds: { queens: 2, doubles: 0, kitchen: 'full' },
			sleeps: 4,
			features: ['2 Queen Beds', 'Full Kitchen', 'Air Conditioning', 'Private Bathroom', 'TV']
		}
	}
};

function getNameFromTsv(property, slug) {
	const tsv = fs.readFileSync(path.join(root, 'inventory', `${property}-rooms.tsv`), 'utf8');
	const lines = tsv.trim().split('\n').slice(1);
	for (const line of lines) {
		const [, s, name] = line.split('\t');
		if (s === slug) return name;
	}
	return slug;
}

function stubDescription(name, meta) {
	const bedParts = [];
	if (meta.beds.queens) bedParts.push(`${meta.beds.queens} queen${meta.beds.queens > 1 ? 's' : ''}`);
	if (meta.beds.doubles)
		bedParts.push(`${meta.beds.doubles} double${meta.beds.doubles > 1 ? 's' : ''}`);
	const bedText = bedParts.join(' and ');
	const kitchenText = meta.beds.kitchen ? ' with a full kitchen' : '';
	const short = `${bedText}${kitchenText}. Sleeps up to ${meta.sleeps}.`;
	const website = `The ${name} at our Osoyoos lakeside motel offers ${bedText.toLowerCase()}${kitchenText}. Air-conditioned, with a private bathroom — steps from the pool and beach.`;
	const ota = `${name} — ${bedText}${kitchenText}. Sleeps up to ${meta.sleeps}. Air-conditioned room with private bathroom, free Wi-Fi, and access to our private sandy beach, outdoor pools, and hot tub. Located on Main Street in Osoyoos, BC — Canada's warmest valley.`;
	return { short, website, ota };
}

function yamlQuote(str) {
	return `"${str.replace(/"/g, '\\"')}"`;
}

function writeProductYaml(property, slug, meta, name) {
	const desc = stubDescription(name, meta);
	const dir = path.join(root, 'content', property, slug);
	fs.mkdirSync(dir, { recursive: true });

	const kitchenYaml =
		meta.beds.kitchen === false
			? '  kitchen: false'
			: meta.beds.kitchen === 'full'
				? '  kitchen: full'
				: '  kitchen: false';

	const featuresYaml = meta.features.map((f) => `  - ${f}`).join('\n');

	const yaml = `slug: ${slug}
name: ${yamlQuote(name)}
category: ${meta.category}
categoryLabel: ${meta.categoryLabel}

beds:
  queens: ${meta.beds.queens}
  doubles: ${meta.beds.doubles}
${kitchenYaml}

sleeps: ${meta.sleeps}
features:
${featuresYaml}

description:
  short: ${yamlQuote(desc.short)}
  website: ${yamlQuote(desc.website)}
  ota: ${yamlQuote(desc.ota)}

booking:
  onres: ""

sortOrder: ${meta.sortOrder}
`;

	fs.writeFileSync(path.join(dir, 'product.yaml'), yaml);
}

function copyPlaceholder(property, slug) {
	const src = path.join(root, 'src/lib/assets/images/room-placeholder.jpg');
	const destDir = path.join(root, 'src/lib/assets/images', property, 'products', slug);
	fs.mkdirSync(destDir, { recursive: true });
	fs.copyFileSync(src, path.join(destDir, 'cover.jpg'));
}

for (const [property, products] of Object.entries(PRODUCT_META)) {
	for (const [slug, meta] of Object.entries(products)) {
		const name = getNameFromTsv(property, slug);
		writeProductYaml(property, slug, meta, name);
		copyPlaceholder(property, slug);
		console.log(`Created ${property}/${slug}`);
	}
}

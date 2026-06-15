import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const FALCON_OTA_CLOSE =
	'Steps from Osoyoos Lake at Falcon Resort. Guests enjoy our private sandy beach, outdoor pool, shared hot tub, and BBQ area. Free parking and Wi-Fi. On Main Street in Osoyoos, BC.';

const SPANISH_OTA_CLOSE =
	'Steps from Osoyoos Lake at Spanish Fiesta Resort. Guests enjoy our private sandy beach, outdoor pool, hot tub, and BBQ area. Free parking and Wi-Fi. On Main Street in Osoyoos, BC.';

const PRODUCTS = {
	falcon: {
		'retro-suite-2-queens-kitchen': {
			category: 'retro',
			categoryLabel: 'Retro',
			sortOrder: 1,
			beds: { queens: 2, doubles: 0, kitchen: 'full' },
			sleeps: 4,
			features: ['2 Queen Beds', 'Full Kitchen', 'Air Conditioning', 'TV'],
			short: 'Two queen beds and a full kitchen in our original Retro wing. Sleeps 4.',
			website:
				'Two queen beds and a full kitchen in Falcon\'s Retro wing — classic lakeside motel comfort with room to cook in. Air-conditioned and a short walk to the pool and beach.',
			ota: `Retro Suite with two queen beds and a full kitchen (stove, fridge, and sink). Sleeps up to 4. Located in Falcon's original motel wing — straightforward, comfortable rooms with the property's classic character. Air-conditioned with cable TV. ${FALCON_OTA_CLOSE}`
		},
		'retro-family-suite-2-doubles-kitchen': {
			category: 'retro',
			categoryLabel: 'Retro',
			sortOrder: 2,
			beds: { queens: 0, doubles: 2, kitchen: 'full' },
			sleeps: 4,
			features: ['2 Double Beds', 'Full Kitchen', 'Air Conditioning', 'TV'],
			short: 'Two double beds and a full kitchen in the Retro wing. Sleeps 4.',
			website:
				'A practical family pick in the Retro wing — two double beds and a full kitchen for longer stays. Air-conditioned, with easy access to the pool and private beach.',
			ota: `Retro Family Suite with two double beds and a full kitchen. Sleeps up to 4. In Falcon's original wing — simple, comfortable lodging ideal for families who want to cook some meals in. Air-conditioned with cable TV. ${FALCON_OTA_CLOSE}`
		},
		'retro-family-suite-1-queen-2-doubles-kitchen': {
			category: 'retro',
			categoryLabel: 'Retro',
			sortOrder: 3,
			beds: { queens: 1, doubles: 2, kitchen: 'full' },
			sleeps: 6,
			features: ['1 Queen + 2 Doubles', 'Full Kitchen', 'Air Conditioning', 'TV'],
			short: 'One queen, two doubles, and a full kitchen. Sleeps up to 6.',
			website:
				'Our largest Retro layout — one queen, two doubles, and a full kitchen. Fits families or friend groups up to six, with the pool and beach just steps away.',
			ota: `Retro Family Suite with one queen bed, two double beds, and a full kitchen. Sleeps up to 6 — one of our most flexible family layouts in the original motel wing. Air-conditioned with cable TV. ${FALCON_OTA_CLOSE}`
		},
		'retro-studio-1-queen-kitchen': {
			category: 'retro',
			categoryLabel: 'Retro',
			sortOrder: 4,
			beds: { queens: 1, doubles: 0, kitchen: 'full' },
			sleeps: 2,
			features: ['1 Queen Bed', 'Full Kitchen', 'Air Conditioning', 'TV'],
			short: 'One queen and a full kitchen in the Retro wing. Sleeps 2.',
			website:
				'Cozy Retro studio with one queen bed and a full kitchen — great for couples or solo guests on a longer Osoyoos stay. Classic motel character, modern A/C.',
			ota: `Retro Studio with one queen bed and a full kitchen. Sleeps 2. Compact and practical in Falcon's original wing — cook in and save for wineries and dining out. Air-conditioned with cable TV. ${FALCON_OTA_CLOSE}`
		},
		'beachside-studio-1-queen': {
			category: 'beachside',
			categoryLabel: 'Beachside',
			sortOrder: 5,
			beds: { queens: 1, doubles: 0, kitchen: false },
			sleeps: 2,
			features: ['1 Queen Bed', 'Air Conditioning', 'TV'],
			short: 'One queen bed near the lake — no kitchen. Sleeps 2.',
			website:
				'Simple beachside studio with one queen bed — no kitchen, just a clean place to sleep near the lake. Ideal for couples who plan to eat out and spend time at the beach and pool.',
			ota: `Beachside Studio with one queen bed (no kitchen). Sleeps 2. Near Osoyoos Lake with a short walk to our private sandy beach and outdoor pool. Air-conditioned with cable TV. ${FALCON_OTA_CLOSE}`
		},
		'beachside-family-suite-1-queen-1-double': {
			category: 'beachside',
			categoryLabel: 'Beachside',
			sortOrder: 6,
			beds: { queens: 1, doubles: 1, kitchen: false },
			sleeps: 4,
			features: ['1 Queen + 1 Double', 'Air Conditioning', 'TV'],
			short: 'One queen and one double near the lake. Sleeps 4.',
			website:
				'Beachside family suite with one queen and one double — sleeping space for four without a kitchen. Close to the beach and pool; a good value for families on the go.',
			ota: `Beachside Family Suite with one queen bed and one double bed (no kitchen). Sleeps up to 4. Near the lake with quick access to the private beach and pool. Air-conditioned with cable TV. ${FALCON_OTA_CLOSE}`
		},
		'beachside-suite-2-doubles-kitchen': {
			category: 'beachside',
			categoryLabel: 'Beachside',
			sortOrder: 7,
			beds: { queens: 0, doubles: 2, kitchen: 'full' },
			sleeps: 4,
			features: ['2 Double Beds', 'Full Kitchen', 'Air Conditioning', 'TV'],
			short: 'Two doubles and a full kitchen near the lake. Sleeps 4.',
			website:
				'Beachside suite with two double beds and a full kitchen — room for four near the lake. Cook breakfast before a day on the beach or at the pool.',
			ota: `Beachside Suite with two double beds and a full kitchen. Sleeps up to 4. A short walk to Osoyoos Lake, our private beach, and outdoor pool. Air-conditioned with cable TV. ${FALCON_OTA_CLOSE}`
		},
		'beachfront-suite-2-queens-kitchen': {
			category: 'beachfront',
			categoryLabel: 'Beachfront',
			sortOrder: 8,
			beds: { queens: 2, doubles: 0, kitchen: 'full' },
			sleeps: 4,
			features: ['2 Queen Beds', 'Full Kitchen', 'Air Conditioning', 'TV'],
			short: 'Lake-facing suite with two queens and a full kitchen. Sleeps 4.',
			website:
				'Our closest rooms to the water — two queen beds, a full kitchen, and lake-facing beachfront location. Wake up steps from Osoyoos Lake.',
			ota: `Beachfront Suite with two queen beds and a full kitchen. Sleeps up to 4. Lake-facing — our closest accommodation to the water, with direct access to the private sandy beach and pool. Air-conditioned with cable TV. ${FALCON_OTA_CLOSE}`
		}
	},
	spanish: {
		'beachfront-studio-1-queen-kitchen': {
			category: 'beachfront',
			categoryLabel: 'Beachfront',
			sortOrder: 1,
			beds: { queens: 1, doubles: 0, kitchen: 'full' },
			sleeps: 2,
			features: ['1 Queen Bed', 'Full Kitchen', 'Air Conditioning', 'TV'],
			short: 'Lake-facing studio with one queen and a full kitchen. Sleeps 2.',
			website:
				'Beachfront studio facing Osoyoos Lake — one queen bed and a full kitchen. Our only beachfront kitchen unit; perfect for couples who want to cook with a view.',
			ota: `Beachfront Studio with one queen bed and a full kitchen. Sleeps 2. Lake-facing room closest to the water at Spanish Fiesta Resort. Air-conditioned with cable TV. ${SPANISH_OTA_CLOSE}`
		},
		'beachside-family-suite-2-queens-kitchen': {
			category: 'beachside',
			categoryLabel: 'Beachside',
			sortOrder: 2,
			beds: { queens: 2, doubles: 0, kitchen: 'full' },
			sleeps: 4,
			features: ['2 Queen Beds', 'Full Kitchen', 'Air Conditioning', 'TV'],
			short: 'Two queens and a full kitchen near the lake. Sleeps 4.',
			website:
				'Beachside family suite with two queen beds and a full kitchen — near the lake with a short walk to the beach, pool, and hot tub.',
			ota: `Beachside Family Suite with two queen beds and a full kitchen. Sleeps up to 4. Near Osoyoos Lake with easy access to the private beach, pool, and hot tub. Air-conditioned with cable TV. ${SPANISH_OTA_CLOSE}`
		},
		'family-suite-2-queens-kitchen': {
			category: 'family',
			categoryLabel: 'Family Suite',
			sortOrder: 3,
			beds: { queens: 2, doubles: 0, kitchen: 'full' },
			sleeps: 4,
			features: ['2 Queen Beds', 'Full Kitchen', 'Air Conditioning', 'TV'],
			short: 'Two queens and a full kitchen. Sleeps 4.',
			website:
				'Spacious family suite with two queen beds and a full kitchen — a popular choice for families staying several nights in Osoyoos.',
			ota: `Family Suite with two queen beds and a full kitchen. Sleeps up to 4. Comfortable, air-conditioned accommodation with cable TV. ${SPANISH_OTA_CLOSE}`
		},
		'studio-2-queens-kitchen': {
			category: 'studio',
			categoryLabel: 'Studio',
			sortOrder: 4,
			beds: { queens: 2, doubles: 0, kitchen: 'full' },
			sleeps: 4,
			features: ['2 Queen Beds', 'Full Kitchen', 'Air Conditioning', 'TV'],
			short: 'Two queens and a full kitchen. Sleeps 4.',
			website:
				'Open studio layout with two queen beds and a full kitchen — practical space for friends or family who want to cook in.',
			ota: `Studio with two queen beds and a full kitchen. Sleeps up to 4. Open layout, air-conditioned, with cable TV. ${SPANISH_OTA_CLOSE}`
		},
		'studio-1-queen-kitchen': {
			category: 'studio',
			categoryLabel: 'Studio',
			sortOrder: 5,
			beds: { queens: 1, doubles: 0, kitchen: 'full' },
			sleeps: 2,
			features: ['1 Queen Bed', 'Full Kitchen', 'Air Conditioning', 'TV'],
			short: 'One queen and a full kitchen. Sleeps 2.',
			website:
				'Compact studio with one queen bed and a full kitchen — ideal for couples or solo travellers on extended stays.',
			ota: `Studio with one queen bed and a full kitchen. Sleeps 2. Cozy, air-conditioned unit with cable TV — cook in and enjoy the Okanagan at your own pace. ${SPANISH_OTA_CLOSE}`
		},
		'two-bedroom-suite-2-queens-kitchen': {
			category: 'two-bedroom',
			categoryLabel: 'Two Bedroom',
			sortOrder: 6,
			beds: { queens: 2, doubles: 0, kitchen: 'full' },
			sleeps: 4,
			features: ['2 Queen Beds', 'Full Kitchen', 'Air Conditioning', 'TV'],
			short: 'Two-bedroom layout with two queens and a full kitchen. Sleeps 4.',
			website:
				'Our largest suite — two queen beds in a two-bedroom layout plus a full kitchen. Extra separation for families or two couples travelling together.',
			ota: `Two Bedroom Suite with two queen beds and a full kitchen. Sleeps up to 4. Separate sleeping areas and a full kitchen — our most spacious layout at Spanish Fiesta. Air-conditioned with cable TV. ${SPANISH_OTA_CLOSE}`
		},
		'studio-suite-2-queens-kitchen': {
			category: 'studio',
			categoryLabel: 'Studio',
			sortOrder: 7,
			beds: { queens: 2, doubles: 0, kitchen: 'full' },
			sleeps: 4,
			features: ['2 Queen Beds', 'Full Kitchen', 'Air Conditioning', 'TV'],
			short: 'Studio suite — two queens and a full kitchen. Sleeps 4.',
			website:
				'Studio suite with two queen beds and a full kitchen — a bit more room than our standard studio layouts, still steps from the pool and hot tub.',
			ota: `Studio Suite with two queen beds and a full kitchen. Sleeps up to 4. Slightly more spacious than our standard studios, with air conditioning and cable TV. ${SPANISH_OTA_CLOSE}`
		},
		'studio-1-queen': {
			category: 'studio',
			categoryLabel: 'Studio',
			sortOrder: 8,
			beds: { queens: 1, doubles: 0, kitchen: false },
			sleeps: 2,
			features: ['1 Queen Bed', 'Air Conditioning', 'TV'],
			short: 'One queen bed, no kitchen. Sleeps 2.',
			website:
				'Simple studio with one queen bed — no kitchen. A clean, affordable base for couples who plan to dine out and enjoy the beach and pool.',
			ota: `Studio with one queen bed (no kitchen). Sleeps 2. Straightforward, air-conditioned room with cable TV — great for short stays when you do not need to cook. ${SPANISH_OTA_CLOSE}`
		},
		'studio-2-queens': {
			category: 'studio',
			categoryLabel: 'Studio',
			sortOrder: 9,
			beds: { queens: 2, doubles: 0, kitchen: false },
			sleeps: 4,
			features: ['2 Queen Beds', 'Air Conditioning', 'TV'],
			short: 'Two queen beds, no kitchen. Sleeps 4.',
			website:
				'Two queen beds without a kitchen — sleeping space for four at a practical price. Close to the pool, hot tub, and beach.',
			ota: `Studio with two queen beds (no kitchen). Sleeps up to 4. Air-conditioned with cable TV — ideal for groups who plan to eat out. ${SPANISH_OTA_CLOSE}`
		},
		'townside-studio-2-queens': {
			category: 'townside',
			categoryLabel: 'Townside',
			sortOrder: 10,
			beds: { queens: 2, doubles: 0, kitchen: false },
			sleeps: 4,
			features: ['2 Queen Beds', 'Air Conditioning', 'TV'],
			short: 'Two queens facing Main Street. No kitchen. Sleeps 4.',
			website:
				'Townside studio with two queen beds facing Main Street — quieter from pool traffic, still on the property with beach and pool access.',
			ota: `Townside Studio with two queen beds (no kitchen). Sleeps up to 4. Faces Main Street — a quieter side of the property while still steps from the pool, hot tub, and beach. Air-conditioned with cable TV. ${SPANISH_OTA_CLOSE}`
		},
		'townside-studio-1-queen': {
			category: 'townside',
			categoryLabel: 'Townside',
			sortOrder: 11,
			beds: { queens: 1, doubles: 0, kitchen: false },
			sleeps: 2,
			features: ['1 Queen Bed', 'Air Conditioning', 'TV'],
			short: 'One queen facing Main Street. No kitchen. Sleeps 2.',
			website:
				'Compact townside studio with one queen bed — faces Main Street for guests who prefer a lower-key spot on the grounds.',
			ota: `Townside Studio with one queen bed (no kitchen). Sleeps 2. Faces Main Street away from the pool deck — still full access to beach, pool, and hot tub. Air-conditioned with cable TV. ${SPANISH_OTA_CLOSE}`
		},
		'family-suite-2-queens-kitchen-private-balcony': {
			category: 'family',
			categoryLabel: 'Family Suite',
			sortOrder: 12,
			beds: { queens: 2, doubles: 0, kitchen: 'full' },
			sleeps: 4,
			features: ['2 Queen Beds', 'Full Kitchen', 'Private Balcony', 'Air Conditioning', 'TV'],
			short: 'Two queens, full kitchen, and a private balcony. Sleeps 4.',
			website:
				'Family suite with two queen beds, a full kitchen, and a private balcony — our only balcony room. Great for morning coffee before the beach.',
			ota: `Family Suite with two queen beds, a full kitchen, and a private balcony. Sleeps up to 4. The only room type with a private balcony at Spanish Fiesta Resort. Air-conditioned with cable TV. ${SPANISH_OTA_CLOSE}`
		},
		'townside-studio-2-queens-kitchen': {
			category: 'townside',
			categoryLabel: 'Townside',
			sortOrder: 13,
			beds: { queens: 2, doubles: 0, kitchen: 'full' },
			sleeps: 4,
			features: ['2 Queen Beds', 'Full Kitchen', 'Air Conditioning', 'TV'],
			short: 'Two queens and a kitchen facing Main Street. Sleeps 4.',
			website:
				'Townside studio with two queen beds and a full kitchen — faces Main Street with the convenience of cooking in on a quieter side of the property.',
			ota: `Townside Studio with two queen beds and a full kitchen. Sleeps up to 4. Faces Main Street with full kitchen facilities — pool, hot tub, and beach still on the property. Air-conditioned with cable TV. ${SPANISH_OTA_CLOSE}`
		}
	}
};

function getName(property, slug) {
	const tsv = fs.readFileSync(path.join(root, 'inventory', `${property}-rooms.tsv`), 'utf8');
	for (const line of tsv.trim().split('\n').slice(1)) {
		const [, s, name] = line.split('\t');
		if (s === slug) return name;
	}
	return slug;
}

function loadPhotoMapping() {
	const mappingPath = path.join(root, '.dev', 'photo-mapping.json');
	if (!fs.existsSync(mappingPath)) return {};
	return JSON.parse(fs.readFileSync(mappingPath, 'utf8'));
}

function writeProduct(property, slug, data, photos) {
	const dir = path.join(root, 'content', property, slug);
	const doc = {
		slug,
		name: getName(property, slug),
		category: data.category,
		categoryLabel: data.categoryLabel,
		beds: data.beds,
		sleeps: data.sleeps,
		features: data.features,
		description: {
			short: data.short,
			website: data.website,
			ota: data.ota
		},
		photos: photos?.cover
			? { cover: photos.cover, gallery: photos.gallery ?? [] }
			: { cover: null, gallery: [] },
		booking: { onres: '' },
		sortOrder: data.sortOrder
	};

	fs.mkdirSync(dir, { recursive: true });
	fs.writeFileSync(path.join(dir, 'product.yaml'), yaml.dump(doc, { lineWidth: 120, quotingType: '"' }));
}

const photoMapping = loadPhotoMapping();

for (const [property, products] of Object.entries(PRODUCTS)) {
	for (const [slug, data] of Object.entries(products)) {
		const photos = photoMapping[property]?.[slug];
		writeProduct(property, slug, data, photos);
		console.log(`Updated ${property}/${slug}`);
	}
}

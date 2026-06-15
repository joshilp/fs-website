import yaml from 'js-yaml';

// ============================================================
// Product loader — reads YAML, inventory TSV, and cover images
// at build time via Vite glob imports. Edit content/ files and
// rebuild; no manual imports per product needed.
// ============================================================

export type PropertyId = 'falcon' | 'spanish';

export interface ProductBeds {
	queens: number;
	doubles: number;
	kitchen: false | 'full';
}

export interface ProductDescription {
	short: string;
	website: string;
	ota: string;
}

export interface ProductPhotos {
	cover?: string;
	gallery?: string[];
}

export interface ProductYaml {
	slug: string;
	name: string;
	category: string;
	categoryLabel: string;
	beds: ProductBeds;
	sleeps: number;
	features: string[];
	description: ProductDescription;
	photos?: ProductPhotos;
	booking: {
		onres: string;
	};
	sortOrder: number;
}

export interface CategoryMeta {
	label: string;
	intro?: string;
}

export interface Product extends ProductYaml {
	property: PropertyId;
	roomNumbers: string[];
	coverImage: string;
}

export interface ProductCategoryGroup {
	category: string;
	categoryLabel: string;
	intro?: string;
	products: Product[];
}

const yamlModules = import.meta.glob('/content/*/*/product.yaml', {
	eager: true,
	query: '?raw',
	import: 'default'
}) as Record<string, string>;

const imageModules = import.meta.glob('$lib/assets/images/*/products/*/cover.jpg', {
	eager: true,
	import: 'default'
}) as Record<string, string>;

const inventoryModules = import.meta.glob('/inventory/*-rooms.tsv', {
	eager: true,
	query: '?raw',
	import: 'default'
}) as Record<string, string>;

const categoryModules = import.meta.glob('/content/*/categories.yaml', {
	eager: true,
	query: '?raw',
	import: 'default'
}) as Record<string, string>;

function parseCategories(property: PropertyId): Record<string, CategoryMeta> {
	const path = `/content/${property}/categories.yaml`;
	const raw = categoryModules[path];
	if (!raw) return {};
	return yaml.load(raw) as Record<string, CategoryMeta>;
}

function parseInventory(): Record<PropertyId, Record<string, string[]>> {
	const result: Record<PropertyId, Record<string, string[]>> = {
		falcon: {},
		spanish: {}
	};

	for (const [path, raw] of Object.entries(inventoryModules)) {
		const property = path.includes('falcon') ? 'falcon' : 'spanish';
		const lines = raw.trim().split('\n').slice(1);

		for (const line of lines) {
			const [roomNo, slug] = line.split('\t');
			if (!roomNo || !slug) continue;
			if (!result[property][slug]) result[property][slug] = [];
			result[property][slug].push(roomNo);
		}
	}

	return result;
}

function buildImageMap(): Record<string, string> {
	const map: Record<string, string> = {};

	for (const [path, url] of Object.entries(imageModules)) {
		// path like: .../images/falcon/products/slug/cover.jpg
		const match = path.match(/images\/(falcon|spanish)\/products\/([^/]+)\/cover\.jpg/);
		if (match) {
			map[`${match[1]}/${match[2]}`] = url;
		}
	}

	return map;
}

function parseProducts(): Product[] {
	const inventory = parseInventory();
	const images = buildImageMap();
	const products: Product[] = [];

	for (const [path, raw] of Object.entries(yamlModules)) {
		// path like: /content/falcon/slug/product.yaml
		const match = path.match(/\/content\/(falcon|spanish)\/([^/]+)\/product\.yaml/);
		if (!match) continue;

		const property = match[1] as PropertyId;
		const slug = match[2];
		const data = yaml.load(raw) as ProductYaml;

		products.push({
			...data,
			slug,
			property,
			roomNumbers: inventory[property][slug] ?? [],
			coverImage: images[`${property}/${slug}`] ?? ''
		});
	}

	return products;
}

const allProducts = parseProducts();

/** All products for a property, sorted by sortOrder */
export function getProducts(property: PropertyId): Product[] {
	return allProducts
		.filter((p) => p.property === property)
		.sort((a, b) => a.sortOrder - b.sortOrder);
}

/** Products grouped by category for rooms page headings */
export function getProductsByCategory(property: PropertyId): ProductCategoryGroup[] {
	const products = getProducts(property);
	const categoryMeta = parseCategories(property);
	const groups = new Map<string, ProductCategoryGroup>();

	for (const product of products) {
		if (!groups.has(product.category)) {
			const meta = categoryMeta[product.category];
			groups.set(product.category, {
				category: product.category,
				categoryLabel: meta?.label ?? product.categoryLabel,
				intro: meta?.intro,
				products: []
			});
		}
		groups.get(product.category)!.products.push(product);
	}

	return Array.from(groups.values());
}

/** Product count for a property */
export function getProductCount(property: PropertyId): number {
	return getProducts(property).length;
}

// ============================================================
// Site-wide configuration — single source of truth.
// Update values here; they flow through schema, UI, and sitemap.
// ============================================================

export const site = {
	url: 'https://falcon-spanish.com',
	name: 'Falcon & Spanish Fiesta Resorts',
	shortName: 'Falcon & Spanish Fiesta',
	// Update this embed URL once Google Business Profile is verified —
	// you'll get a proper embed with both property pins.
	// For now this is coordinate-centred between the two properties.
	mapEmbedUrl:
		'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d500!2d-119.4689!3d49.0282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1'
};

export interface Property {
	id: string;
	name: string;
	address: {
		street: string;
		city: string;
		province: string;
		postalCode: string;
		country: string;
		countryCode: string;
		/** Pre-formatted single-line address for display */
		full: string;
	};
	phone: {
		/** Display format: (250) 495-7544 */
		display: string;
		/** tel: href format: 2504957544 */
		tel: string;
		/** E.164 format for schema: +12504957544 */
		e164: string;
	};
	geo: {
		// Approximate coordinates — verify at maps.google.com and replace.
		// Open Maps, right-click the exact entrance → "What's here?" → copy lat/lng.
		latitude: number;
		longitude: number;
	};
	amenities: string[];
}

export const properties = {
	falcon: {
		id: 'falcon',
		name: 'Falcon Resort',
		address: {
			street: '7106 Main Street',
			city: 'Osoyoos',
			province: 'BC',
			postalCode: 'V0H 1V3',
			country: 'Canada',
			countryCode: 'CA',
			full: '7106 Main Street, Osoyoos, BC  V0H 1V3'
		},
		phone: {
			display: '(250) 495-7544',
			tel: '2504957544',
			e164: '+12504957544'
		},
		geo: {
			latitude: 49.0282,
			longitude: -119.4688
		},
		amenities: [
			'Beach Access',
			'Outdoor Pool',
			'Hot Tub',
			'Air Conditioning',
			'BBQ Area',
			'Free Parking',
			'Free Wi-Fi'
		]
	},
	spanish: {
		id: 'spanish',
		name: 'Spanish Fiesta Resort',
		address: {
			street: '7104 Main Street',
			city: 'Osoyoos',
			province: 'BC',
			postalCode: 'V0H 1V3',
			country: 'Canada',
			countryCode: 'CA',
			full: '7104 Main Street, Osoyoos, BC  V0H 1V3'
		},
		phone: {
			display: '(250) 495-6833',
			tel: '2504956833',
			e164: '+12504956833'
		},
		geo: {
			latitude: 49.0282,
			longitude: -119.469
		},
		amenities: [
			'Beach Access',
			'Outdoor Pool',
			'Hot Tub',
			'Air Conditioning',
			'BBQ Area',
			'Free Parking',
			'Free Wi-Fi'
		]
	}
} satisfies Record<string, Property>;

/** Ordered array of both properties — use when iterating */
export const propertyList = [properties.falcon, properties.spanish];

/** Builds the JSON-LD schema graph for the layout <head> */
export function buildSchema() {
	return {
		'@context': 'https://schema.org',
		'@graph': propertyList.map((p) => ({
			'@type': 'LodgingBusiness',
			name: p.name,
			url: site.url,
			telephone: p.phone.e164,
			address: {
				'@type': 'PostalAddress',
				streetAddress: p.address.street,
				addressLocality: p.address.city,
				addressRegion: p.address.province,
				postalCode: p.address.postalCode,
				addressCountry: p.address.countryCode
			},
			geo: {
				'@type': 'GeoCoordinates',
				latitude: p.geo.latitude,
				longitude: p.geo.longitude
			},
			amenityFeature: p.amenities.map((name) => ({
				'@type': 'LocationFeatureSpecification',
				name,
				value: true
			}))
		}))
	};
}

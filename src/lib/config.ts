// ============================================================
// Site-wide configuration — single source of truth.
// Update values here; they flow through schema, UI, and sitemap.
// ============================================================

export const site = {
	url: 'https://falcon-spanish.com',
	name: 'Falcon & Spanish Fiesta Resorts',
	shortName: 'Falcon & Spanish Fiesta',
	// Shared map embed used on the main /location page.
	// Currently points to Falcon Resort — update to a combined embed once both GBPs are live.
	mapEmbedUrl:
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2616.0271695648926!2d-119.4549430872363!3d49.02909027123637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5482c5b85adefdc1%3A0xaea8a251dfcdf138!2sFalcon%20Resort!5e0!3m2!1sen!2sus!4v1778630292262!5m2!1sen!2sus'
};

// Room products are defined in content/{property}/{slug}/product.yaml
// and loaded via src/lib/data/products.ts at build time.

// ============================================================
// Property interface
// ============================================================

export interface Booking {
	/**
	 * Booking.com property listing URL.
	 * How to find: Extranet → click property name → "View on Booking.com" → copy URL from browser.
	 * Example: 'https://www.booking.com/hotel/ca/falcon-resort-osoyoos.html'
	 */
	bookingCom: string;
	/**
	 * Expedia property listing URL.
	 * How to find: Partner Central → Properties → View listing → copy URL from browser.
	 * Example: 'https://www.expedia.ca/Osoyoos-Hotels-Falcon-Resort.h12345678.Hotel-Information'
	 */
	expedia: string;
}

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
	/** OTA booking links. Paste URLs from each platform's partner dashboard. */
	booking: Booking;
	/**
	 * Google Maps embed URL for this property's location page.
	 * Get it from: maps.google.com → search your property → Share → Embed a map → copy src URL.
	 * Update spanish.mapEmbedUrl once the Spanish Fiesta Google Business Profile is created.
	 */
	mapEmbedUrl: string;
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
			'Private Sandy Beach',
			'2 Outdoor Pools',
			'Hot Tub',
			'Air Conditioning',
			'BBQ Area',
			'Free Parking',
			'Free Wi-Fi'
		],
		booking: {
			bookingCom: 'https://www.booking.com/hotel/ca/falcon-resort.html',
			expedia: 'https://www.expedia.ca/Osoyoos-Hotels-Falcon-Resort.h9064558.Hotel-Information'
		},
		mapEmbedUrl:
			'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2616.0271695648926!2d-119.4549430872363!3d49.02909027123637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5482c5b85adefdc1%3A0xaea8a251dfcdf138!2sFalcon%20Resort!5e0!3m2!1sen!2sus!4v1778630292262!5m2!1sen!2sus'
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
			'Private Sandy Beach',
			'2 Outdoor Pools',
			'Hot Tub',
			'Air Conditioning',
			'BBQ Area',
			'Free Parking',
			'Free Wi-Fi'
		],
		booking: {
			bookingCom: 'https://www.booking.com/hotel/ca/spanish-fiesta-resort.html',
			expedia:
				'https://www.expedia.ca/Osoyoos-Hotels-Spanish-Fiesta-Resort.h9064480.Hotel-Information'
		},
		// Using Falcon's embed until Spanish Fiesta GBP is created.
		// Once set up: Maps → share → Embed a map → replace this URL.
		mapEmbedUrl:
			'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2616.0271695648926!2d-119.4549430872363!3d49.02909027123637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5482c5b85adefdc1%3A0xaea8a251dfcdf138!2sFalcon%20Resort!5e0!3m2!1sen!2sus!4v1778630292262!5m2!1sen!2sus'
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

// Generates a sitemap for the main static routes
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://thehomereset.us";
	const now = new Date().toISOString();
	return [
		{ url: `${baseUrl}/`, lastModified: now },
		{ url: `${baseUrl}/about`, lastModified: now },
		{ url: `${baseUrl}/services`, lastModified: now },
		{ url: `${baseUrl}/booking`, lastModified: now },
		{ url: `${baseUrl}/contact`, lastModified: now },
	];
}

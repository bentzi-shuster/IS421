export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "The Explorer Apparel",
	description: "Experience the World in Style.",
	navItems: [
		{
			label: "Home",
			href: "/",
			loggedIn: false,
		},
		{
			label: "About Us",
			href: "#about-card",
			loggedIn: false,
		},
		{
			label: "Where to Buy",
			href: "#retailer-banner",
			loggedIn: false,
		},
		{
			label: "login",
			href: "/api/auth/login",
			loggedIn: false,
		},
		{
			label: "logout",
			href: "/api/auth/logout",
			loggedIn: true,
		}
	],
	navMenuItems: [
		{
			label: "Home",
			href: "#",
			loggedIn: false,
		},
		{
			label: "About Us",
			href: "#about-card",
			loggedIn: false,
		},
		{
			label: "Where to Buy",
			href: "#retailer-banner",
			loggedIn: false,
		},
		{
			label: "login",
			href: "/api/auth/login",
			loggedIn: false,
		},
		{
			label: "logout",
			href: "/api/auth/logout",
			loggedIn: true,
		}
	],
	links: {
		instagram: "https://instagram.com",
		twitter: "https://twitter.com/",
		tiktok: "https://tiktok.com",
	},
};

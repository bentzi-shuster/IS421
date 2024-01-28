import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import GoogleAnalytics from "@/components/googleanalytics";
import PrivacyBanner from "@/components/privacybanner";
import clsx from "clsx";
import Image from "next/image";
import bgimage from "@/public/background.webp";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { getSession } from "@auth0/nextjs-auth0";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	// themeColor: [
	// 	{ media: "(prefers-color-scheme: light)", color: "white" },
	// 	{ media: "(prefers-color-scheme: dark)", color: "black" },
	// ],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export const viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session =await getSession();
	let loggedIn = !!(session && session.user && session.user["name"]);
	return (
<UserProvider>
			<div
				className={clsx(
					"min-h-screen bg-background font-sans antialiased relative overflow-x-hidden",
					fontSans.variable
				)} 
			>
				{process.env.GOOGLE_ANALYTICS ? (
					<GoogleAnalytics ga_id=
						{process.env.GOOGLE_ANALYTICS} />
				) : null}
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
				<div className="fixed w-screen h-screen flex justify-center">
					<Image src={bgimage} alt="A light-colored marble pattern with dark veins." />
				</div>
					<div id="nav" className="relative z-10  flex flex-col h-screen">
						<Navbar loggedIn={loggedIn} />
						

						<main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow z-10">
							{children}
							<PrivacyBanner />
						</main>
						<footer className="z-[9999] my-auto py-auto">
							<Footer />
						</footer>
						</div>
				</Providers>
			</div>
</UserProvider>	
	);
}

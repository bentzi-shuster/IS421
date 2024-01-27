'use client';
import React, { useEffect, useState } from 'react';
import {
	Navbar as FooterNav,
	NavbarContent,
	NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import {
	InstagramIcon,
	TwitterIcon,
	TikTokIcon
} from "@/components/icons";
import MailchimpForm from "./emailinput";

export const Footer = () => {
	const [iconSize, setIconSize] = useState('24px');

	useEffect(() => {
		const handleResize = () => {
			setIconSize(window.innerWidth > 640 ? '32px' : '24px');
		};

		// Set size on mount
		handleResize();

		// Set up event listener
		window.addEventListener('resize', handleResize);

		// Clean up
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	return (
		// Wrap the FooterNav with a div to control its width and centering
		<div className="mb-5 flex justify-center">
			<FooterNav className="mb-5 flex w-full max-w-[1060px] h-[16rem] lg:h-[160px] bg-gradient-to-b from-[#9b9898] to-[#ededed]">
				<div className="flex lg:flex-row justify-between items-center w-full">
					{/* Privacy Link */}
					<div className="mr-[3%] my-4 flex flex-col">
						<Link id="contact" href="mailto:xplrcthng@gmail.com" aria-label="Contact Us">Contact Us</Link>
						<Link href="/privacy" aria-label="Data Privacy Policy">Data Privacy Policy</Link>
					</div>

					{/* Mailchimp Form */}
					<div className="w-full md:w-1/3 mb-1">
						<MailchimpForm />
					</div>

					{/* Social Icons */}
					<NavbarItem className="ml-[12%] flex gap-3 mb-5">
						<Link id="instagram" isExternal href={siteConfig.links.instagram} aria-label="Instagram">
							<InstagramIcon style={{ height: iconSize, width: iconSize }} />
						</Link>
						<Link id="twitter" isExternal href={siteConfig.links.twitter} aria-label="Twitter">
							<TwitterIcon style={{ height: iconSize, width: iconSize }} />
						</Link>
						<Link id="tiktok" isExternal href={siteConfig.links.tiktok} aria-label="TikTok">
							<TikTokIcon style={{ height: iconSize, width: iconSize }} />
						</Link>
					</NavbarItem>
				</div>
			</FooterNav>
		</div>
	);
};
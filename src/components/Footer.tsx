// app/components/Footer.tsx
'use client';

import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

/*
	Footer Component
	----------------
	- Next.js 15 (Client Component)
	- Tailwind CSS for layout and styling
	- lucide-react for social icons
	- All comments are in English
*/

export default function Footer() {
	return (
		<footer className="bg-[#141414] text-white py-12">
			{/* Top section: link columns */}
			<div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
				{/* Home column */}
				<div>
					<h4 className="font-semibold mb-4">Home</h4>
					<ul className="space-y-2 text-gray-400 text-sm">
						<li><Link href="/#genres" className="hover:text-white">Categories</Link></li>
						<li><Link href="/#devices" className="hover:text-white">Devices</Link></li>
						<li><Link href="/#pricing" className="hover:text-white">Pricing</Link></li>
						<li><Link href="/#faq" className="hover:text-white">FAQ</Link></li>
					</ul>
				</div>

				{/* Movies column */}
				<div>
					<h4 className="font-semibold mb-4">Movies</h4>
					<ul className="space-y-2 text-gray-400 text-sm">
						<li><Link href="/movies-and-shows#genres" className="hover:text-white">Genres</Link></li>
						<li><Link href="/movies-and-shows#trending" className="hover:text-white">Trending</Link></li>
						<li><Link href="/movies-and-shows#new-release" className="hover:text-white">New Release</Link></li>
						<li><Link href="/movies-and-shows#trending" className="hover:text-white">Popular</Link></li>
					</ul>
				</div>

				{/* Shows column */}
				<div>
					<h4 className="font-semibold mb-4">Shows</h4>
					<ul className="space-y-2 text-gray-400 text-sm">
						<li><Link href="/movies-and-shows#genres" className="hover:text-white">Genres</Link></li>
						<li><Link href="/movies-and-shows#trending" className="hover:text-white">Trending</Link></li>
						<li><Link href="/movies-and-shows#new-release" className="hover:text-white">New Release</Link></li>
						<li><Link href="/movies-and-shows#trending" className="hover:text-white">Popular</Link></li>
					</ul>
				</div>

				{/* Support column */}
				<div>
					<h4 className="font-semibold mb-4">Support</h4>
					<ul className="space-y-2 text-gray-400 text-sm">
						<li><Link href="/support" className="hover:text-white">Contact Us</Link></li>
					</ul>
				</div>

				{/* Subscription column */}
				<div>
					<h4 className="font-semibold mb-4">Subscription</h4>
					<ul className="space-y-2 text-gray-400 text-sm">
						<li><Link href="/subscriptions" className="hover:text-white">Plans</Link></li>
						<li><Link href="/subscriptions" className="hover:text-white">Features</Link></li>
					</ul>
				</div>

				{/* Connect column */}
				<div>
					<h4 className="font-semibold mb-4">Connect With Us</h4>
					<div className="flex space-x-4">
						<Link href="#" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
							<Facebook className="h-6 w-6" />
						</Link>
						<Link href="#" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
							<Instagram className="h-6 w-6" />
						</Link>
						<Link href="#" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
							<Linkedin className="h-6 w-6" />
						</Link>
					</div>
				</div>
			</div>

			{/* Divider */}
			<div className="border-t border-gray-800 mt-12" />

			{/* Bottom section: copyright & policies */}
			<div className="max-w-7xl mx-auto px-4 mt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
				<p>©2025 VibeCast, All Rights Reserved</p>
				<div className="flex space-x-6 mt-4 md:mt-0">
					<Link href="#" className="hover:text-white">Terms of Use</Link>
					<Link href="#" className="hover:text-white">Privacy Policy</Link>
					<Link href="#" className="hover:text-white">Cookie Policy</Link>
				</div>
			</div>
		</footer>
	);
}

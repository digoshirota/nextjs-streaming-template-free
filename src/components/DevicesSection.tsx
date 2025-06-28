// app/components/DevicesSection.tsx
'use client';

import { Phone, Tablet, Tv, Laptop, Gamepad, Headset, type LucideIcon } from 'lucide-react';

/*
	DevicesSection Component
	------------------------
	- Next.js 15 (Client Component)
	- Tailwind CSS for styling
	- Lucide-react for device icons
*/

interface Device {
	id: string;
	title: string;
	icon: LucideIcon;
	description: string;
}

const devices: Device[] = [
	{
		id: 'smartphones',
		title: 'Smartphones',
		icon: Phone,
		description:
			'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store.',
	},
	{
		id: 'tablet',
		title: 'Tablet',
		icon: Tablet,
		description:
			'StreamVibe works flawlessly on tablets, offering a larger screen experience for your movies and shows.',
	},
	{
		id: 'smart-tv',
		title: 'Smart TV',
		icon: Tv,
		description:
			'Enjoy StreamVibe on your Smart TV with native apps for major platforms—no extra hardware required.',
	},
	{
		id: 'laptops',
		title: 'Laptops',
		icon: Laptop,
		description:
			'Our web player is fully compatible with all modern browsers on Windows, macOS, and Linux laptops.',
	},
	{
		id: 'gaming-consoles',
		title: 'Gaming Consoles',
		icon: Gamepad,
		description:
			'Stream directly on your console—PlayStation, Xbox, or Nintendo—via our dedicated streaming apps.',
	},
	{
		id: 'vr-headsets',
		title: 'VR Headsets',
		icon: Headset,
		description:
			'Immerse yourself in VR cinema with our Vulkan-powered VR headset support for the ultimate viewing experience.',
	},
];

export default function DevicesSection() {
	return (
		<section className="bg-[#141414] py-16" id="devices">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
				{/* Section header left-aligned */}
				<div className="text-left mb-12">
					<h2 className="text-3xl font-bold">
						We Provide you streaming experience across various devices.
					</h2>
					<p className="mt-2 text-gray-300 max-w-2xl">
						With StreamVibe, you can enjoy your favorite movies and TV shows anytime,
						anywhere. Our platform is designed to be compatible with a wide range of
						devices, ensuring that you never miss a moment of entertainment.
					</p>
				</div>

				{/* Devices grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{devices.map((device) => {
						const Icon = device.icon;
						return (
							<div
								key={device.id}
								className="relative overflow-hidden rounded-lg bg-[#0F0F0F] p-6"
							>
								{/* subtle red gradient overlay at top-right */}
								<div className="absolute inset-0 bg-[#0F0F0F]  bg-[linear-gradient(25deg,rgba(15,15,15,1)_80%,rgba(161,0,0,1)_100%)] pointer-events-none" />

								{/* Card content */}
								<div className="relative flex flex-col space-y-4">
									{/* Icon and title inline */}
									<div className="flex items-center space-x-3">
										<div className="flex h-10 w-10 items-center justify-center rounded-md bg-red-600">
											<Icon className="h-5 w-5 text-white" />
										</div>
										<h3 className="text-lg font-semibold">{device.title}</h3>
									</div>

									{/* Description below */}
									<p className="text-gray-300 text-sm">
										{device.description}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

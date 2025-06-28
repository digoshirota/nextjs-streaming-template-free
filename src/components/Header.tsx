'use client'

import Link from 'next/link'
import { Bell, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useState } from 'react';
import { Menu, X } from 'lucide-react';


export default function Header() {

	const pathname = usePathname()
	const [mobileOpen, setMobileOpen] = useState(false);

	const navigation = [
		{ name: 'Home', href: '/' },
		{ name: 'Movies & Shows', href: '/movies-and-shows' },
		{ name: 'Support', href: '/support' },
		{ name: 'Subscriptions', href: '/subscriptions' },
	]

	return (
		<header className="fixed z-50 w-full top-0 ">
			<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
				{/* Botão hambúrguer mobile */}
				<button
					className="md:hidden p-2 text-white"
					onClick={() => setMobileOpen((o) => !o)}
					aria-label="Toggle menu"
				>
					{mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
				</button>
				{/* Logo */}
				<Link href="/" className="flex items-center space-x-2">
					<Image src="/images/logo2.png" alt="StreamVibe" width={32} height={32} />
					<span className="text-white text-xl font-semibold ">VibeCast</span>
				</Link>

				{/* Menu com fundo escuro e bordas arredondadas */}
				<nav className="hidden md:flex bg-[#111] px-2 py-2 rounded-xl space-x-1">
					{navigation.map((item) => {
						const isActive = pathname === item.href
						return (
							<Link
								key={item.name}
								href={item.href}
								className={cn(
									'px-4 py-2 rounded-md text-sm font-medium transition-colors',
									isActive
										? 'bg-zinc-800 text-white'
										: 'text-muted-foreground hover:text-white hover:bg-zinc-700/40'
								)}
							>
								{item.name}
							</Link>
						)
					})}
				</nav>


				{/* Ícones à direita */}
				<div className="flex items-center space-x-4">
					<Button variant="ghost" size="icon">
						<Search className="w-5 h-5 text-white" />
					</Button>
					<Button variant="ghost" size="icon">
						<Bell className="w-5 h-5 text-white" />
					</Button>

				</div>


			</div>
			<nav
				className={cn(
					'md:hidden absolute inset-x-0 top-full bg-[#111] px-6 py-4 space-y-2 transform transition-transform duration-200 ',
					mobileOpen ? '-translate-y-5' : '-translate-y-90'
				)}
			>
				{navigation.map((item) => (
					<Link
						key={item.name}
						href={item.href}
						onClick={() => setMobileOpen(false)}
						className="block px-4 py-2 rounded-md text-base font-medium text-white hover:bg-zinc-700/40 transition"
					>
						{item.name}
					</Link>
				))}

			</nav>
		</header>
	)
}

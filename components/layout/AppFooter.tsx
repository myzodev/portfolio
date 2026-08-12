"use client";

import { usePathname } from "next/navigation";

import Logo from "@/assets/images/logo.svg";

import { CONTACT_ROUTE } from "@/constants/routes";
import socialLinksData from "@/data/social-links";

export default function AppFooter() {
	const pathname = usePathname();

	if (pathname.startsWith(CONTACT_ROUTE)) return null;

	return (
		<footer className="container">
			<figure className="py-8 md:py-16" aria-hidden>
				<Logo className="w-full" />
			</figure>

			<aside className="border-ink-black-dimmed/25 flex flex-wrap items-center justify-between gap-x-10 gap-y-6 border-t py-4 md:py-8">
				<nav aria-label="Footer">
					<ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
						{socialLinksData.map((link) => (
							<li key={link.href}>
								<a
									className="sans-sm text-ink-black-dimmed hover:text-peach font-semibold transition-colors"
									href={link.href}
									rel="noreferrer noopener"
									target="_blank"
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</nav>

				<small className="sans-sm text-ink-black-dimmed font-semibold">Made in 2026</small>
			</aside>
		</footer>
	);
}

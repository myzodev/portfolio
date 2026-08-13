"use client";

import { useState } from "react";

import { usePathname } from "next/navigation";

import LanguageSwitcher from "@/components/LanguageSwitcher";

import { LIGHT_ROUTES } from "@/constants/routes";

import NavbarLogo from "./navbar/NavbarLogo";
import NavbarMenu from "./navbar/NavbarMenu";

export default function AppNavbar() {
	const [isOpen, setIsOpen] = useState(false);

	const pathname = usePathname();

	const isDark = LIGHT_ROUTES.some((route) => pathname.startsWith(route)) && !isOpen;

	return (
		<nav className="fixed top-0 z-50 w-full py-6 md:py-8">
			<div className="container flex items-center justify-between">
				<NavbarLogo isDark={isDark} />

				<div className="flex items-center gap-4 md:gap-6">
					<LanguageSwitcher isDark={isDark} />
					<NavbarMenu isDark={isDark} isOpen={isOpen} onOpenChange={setIsOpen} />
				</div>
			</div>
		</nav>
	);
}

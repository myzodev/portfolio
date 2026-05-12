"use client";

import { useEffect } from "react";

import { usePathname } from "next/navigation";

import { ReactLenis, useLenis } from "lenis/react";

export default function Template({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();

	const lenis = useLenis();

	useEffect(() => {
		lenis?.scrollTo(0, { immediate: true });
	}, [pathname, lenis]);

	return <ReactLenis root>{children}</ReactLenis>;
}

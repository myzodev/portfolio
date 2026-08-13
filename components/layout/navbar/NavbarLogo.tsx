"use client";

import { useRef } from "react";

import Link from "next/link";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { useLocalizedHref } from "@/hooks/use-language";

import { HOME_ROUTE } from "@/constants/routes";
import { LOGO_TEXT } from "@/constants/site";

const letters = LOGO_TEXT.split("");

export default function NavbarLogo({ isDark = false }: { isDark?: boolean }) {
	const logoRef = useRef<HTMLAnchorElement>(null);
	const timelineRef = useRef<gsap.core.Timeline | null>(null);

	const localizeHref = useLocalizedHref();

	useGSAP(
		() => {
			timelineRef.current = gsap
				.timeline({ paused: true, defaults: { duration: 0.4, stagger: 0.04, ease: "power2.inOut" } })
				.to("span", { yPercent: 100 })
				.set("span", { yPercent: -100 })
				.to("span", { yPercent: 0 });
		},
		{ scope: logoRef },
	);

	const handleMouseEnter = () => {
		const timeline = timelineRef.current;

		if (!timeline || timeline.isActive()) return;

		timeline.restart();
	};

	return (
		<Link
			ref={logoRef}
			className={`font-chillax relative z-50 inline-block overflow-hidden text-2xl font-bold transition-colors duration-500 ${isDark ? "text-ink-black" : "text-powder-petal"}`}
			href={localizeHref(HOME_ROUTE)}
			onMouseEnter={handleMouseEnter}
		>
			{letters.map((letter, index) => (
				<span key={index} className="inline-block">
					{letter}
				</span>
			))}
		</Link>
	);
}

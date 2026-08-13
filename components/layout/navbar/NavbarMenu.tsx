"use client";

import { useCallback, useEffect, useRef } from "react";

import { useT } from "next-i18next/client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLenis } from "lenis/react";

import { CURTAIN_EASE } from "@/assets/styles/eases";

import NavbarMenuPanel from "./NavbarMenuPanel";

interface Props {
	isDark: boolean;
	isOpen: boolean;
	onOpenChange: (open: boolean) => void;
}

export default function NavbarMenu({ isDark, isOpen, onOpenChange }: Props) {
	const buttonRef = useRef<HTMLButtonElement>(null);
	const timelineRef = useRef<gsap.core.Timeline | null>(null);
	const hasOpenedRef = useRef(false);

	const lenis = useLenis();

	const { t } = useT();

	const close = useCallback(() => onOpenChange(false), [onOpenChange]);

	useGSAP(
		() => {
			gsap.set(".menu-bar-top", { y: -3 });
			gsap.set(".menu-bar-bottom", { y: 3 });

			timelineRef.current = gsap
				.timeline({ paused: true, defaults: { duration: 0.65, ease: CURTAIN_EASE } })
				.to(buttonRef.current, { rotate: 90 }, 0)
				.to(".menu-bar-top", { y: 0, rotate: 45 }, 0)
				.to(".menu-bar-bottom", { y: 0, rotate: -45 }, 0);
		},
		{ scope: buttonRef },
	);

	useGSAP(
		() => {
			const timeline = timelineRef.current;

			if (!timeline) return;

			if (isOpen) timeline.play();
			else timeline.reverse();
		},
		{ dependencies: [isOpen], scope: buttonRef },
	);

	useEffect(() => {
		if (isOpen) lenis?.stop();
		else lenis?.start();

		const main = document.querySelector("main");

		main?.toggleAttribute("inert", isOpen);

		return () => main?.removeAttribute("inert");
	}, [isOpen, lenis]);

	useEffect(() => {
		if (isOpen) {
			hasOpenedRef.current = true;

			return;
		}

		if (hasOpenedRef.current) buttonRef.current?.focus();
	}, [isOpen]);

	useEffect(() => {
		if (!isOpen) return;

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") close();
		};

		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("popstate", close);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("popstate", close);
		};
	}, [isOpen, close]);

	return (
		<>
			<button
				ref={buttonRef}
				className={`relative z-50 flex size-8 items-center justify-center rounded-full transition-colors duration-500 ${isDark ? "bg-ink-black" : "bg-powder-petal"}`}
				aria-controls="navbar-menu"
				aria-expanded={isOpen}
				aria-label={isOpen ? t("common.nav.closeMenu") : t("common.nav.openMenu")}
				onClick={() => onOpenChange(!isOpen)}
			>
				<span
					className={`menu-bar-top absolute h-0.5 w-4 rounded-full ${isDark ? "bg-powder-petal" : "bg-ink-black"}`}
				/>
				<span
					className={`menu-bar-bottom absolute h-0.5 w-4 rounded-full ${isDark ? "bg-powder-petal" : "bg-ink-black"}`}
				/>
			</button>

			<NavbarMenuPanel isOpen={isOpen} onClose={close} />
		</>
	);
}

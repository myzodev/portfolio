"use client";

import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { CURTAIN_EASE, REVEAL_EASE } from "@/assets/styles/eases";

export default function PageHeader({ children }: { children: React.ReactNode }) {
	const headerRef = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

			gsap.set(".page-header-title", { yPercent: 110 });
			gsap.set(".page-header-line", { scaleX: 0 });

			gsap
				.timeline({ delay: 0.5 })
				.to(".page-header-title", { yPercent: 0, duration: 1.2, ease: REVEAL_EASE }, 0)
				.to(".page-header-line", { scaleX: 1, duration: 1.2, ease: CURTAIN_EASE }, 0.15);
		},
		{ scope: headerRef },
	);

	return (
		<header ref={headerRef} className="container mt-32 md:mt-44 lg:mt-54">
			<div className="relative mb-10 pb-6 md:pb-10">
				<h1 className="display-md md:display-xl lg:display-2xl overflow-hidden">
					<span className="page-header-title block">{children}</span>
				</h1>

				<span
					className="page-header-line bg-ink-black-dimmed/25 absolute bottom-0 left-0 h-px w-full origin-left"
					aria-hidden
				/>
			</div>
		</header>
	);
}

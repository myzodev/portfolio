"use client";

import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function HeroGradientBackground() {
	const gradientRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			gsap.fromTo(
				gradientRef.current,
				{ "--gradient-x": "125%" },
				{
					"--gradient-x": "-25%",
					duration: 8,
					repeat: -1,
					ease: "none",
				},
			);
		},
		{ scope: gradientRef },
	);

	return (
		<div
			ref={gradientRef}
			style={{ "--gradient-x": "125%" } as React.CSSProperties}
			className="from-cyan pointer-events-none absolute inset-0 bg-radial-[at_25%_25%] to-transparent to-70% will-change-transform"
		/>
	);
}

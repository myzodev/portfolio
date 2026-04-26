"use client";

import { useRef } from "react";

import Link from "next/link";

import { stagger, useAnimate } from "framer-motion";

import { HOME_ROUTE } from "@/utils/routes";

const TEXT = "myžo.";

export default function NavbarLogo() {
	const [scope, animate] = useAnimate();
	const isAnimating = useRef(false);

	const handleMouseEnter = () => {
		if (isAnimating.current) return;

		isAnimating.current = true;

		animate(
			"span",
			{ y: ["0%", "100%"] },
			{
				duration: 0.3,
				delay: stagger(0.04),
				ease: "easeInOut",
			},
		)
			.then(() => {
				return animate("span", { y: "-100%" }, { duration: 0 });
			})
			.then(() => {
				return animate(
					"span",
					{ y: ["-100%", "0%"] },
					{
						duration: 0.3,
						delay: stagger(0.04),
						ease: "easeInOut",
					},
				);
			})
			.then(() => {
				isAnimating.current = false;
			});
	};

	return (
		<Link
			ref={scope}
			className="font-heading inline-block overflow-hidden text-2xl font-bold"
			href={HOME_ROUTE}
			onMouseEnter={handleMouseEnter}
		>
			{TEXT.split("").map((letter, index) => (
				<span key={index} className="inline-block">
					{letter}
				</span>
			))}
		</Link>
	);
}

"use client";

import { useRef } from "react";

import { useT } from "next-i18next/client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MapPinIcon, UserIcon } from "lucide-react";

import AvailabilityBadge from "@/components/AvailabilityBadge";
import Badge from "@/components/Badge";

import { SITE_NAME } from "@/constants/site";

import HeroGradientBackground from "./HeroGradientBackground";
import SplitWord from "./SplitWord";

export default function HeroSection() {
	const containerRef = useRef<HTMLElement>(null);

	const { t } = useT();

	const titleWords = t("home.hero.title").split(/\s+/).filter(Boolean);

	useGSAP(
		() => {
			const tl = gsap.timeline({
				defaults: { ease: "power4.out" },
				delay: 0.25,
			});

			tl.from(".hero-word", {
				y: "110%",
				opacity: 0,
				duration: 1.2,
				stagger: 0.18,
			})
				.addLabel("bottomReveal", "-=0.8")
				.from(
					".hero-desc",
					{
						y: 24,
						opacity: 0,
						duration: 1.2,
					},
					"bottomReveal",
				)
				.from(
					".hero-badge",
					{
						y: 16,
						opacity: 0,
						duration: 1.0,
						stagger: 0.1,
					},
					"bottomReveal",
				);
		},
		// Keyed on word count so a translation with a different number of words still gets the
		// reveal applied to every span. Same-length switches reuse the nodes and keep the
		// running tween instead of replaying the intro.
		{ scope: containerRef, dependencies: [titleWords.length] },
	);

	return (
		<header ref={containerRef} className="relative">
			<HeroGradientBackground />

			<div className="container pb-12">
				<div className="relative flex h-[76vh] flex-col justify-end md:h-[75vh]">
					<h1 className="display-2xl mt-auto mb-2 max-w-[11em] text-[2.5rem] font-bold md:mb-6 md:text-[4rem] lg:mb-8 lg:text-[5rem] xl:text-[6.25rem]">
						{titleWords.map((word, index) => (
							<span key={index}>
								<SplitWord>{word}</SplitWord>&nbsp;
							</span>
						))}

						<SplitWord>
							<strong className="text-peach">{t("home.hero.titleHighlight")}</strong>
						</SplitWord>
					</h1>

					<footer className="flex flex-wrap items-center justify-between gap-x-2 gap-y-8 md:gap-y-10 md:px-2">
						<p className="hero-desc sans-lg md:sans-xl text-ink-black-dimmed max-w-xl">{t("home.hero.description")}</p>

						<aside className="flex flex-wrap gap-x-2 gap-y-2.5">
							<AvailabilityBadge className="hero-badge" />

							<Badge className="hero-badge">
								<UserIcon className="size-4" />
								<span className="mb-0.5">{SITE_NAME}</span>
							</Badge>

							<Badge className="hero-badge">
								<MapPinIcon className="size-4" />
								<span className="mb-0.5">{t("common.location")}</span>
							</Badge>
						</aside>
					</footer>
				</div>
			</div>
		</header>
	);
}

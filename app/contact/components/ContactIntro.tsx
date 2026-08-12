"use client";

import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MapPinIcon, UserIcon } from "lucide-react";

import AvailabilityBadge from "@/components/AvailabilityBadge";
import Badge from "@/components/Badge";

import { CURTAIN_EASE, REVEAL_EASE, SOFT_EASE } from "@/assets/styles/eases";

import { CONTACT_DESCRIPTION } from "@/constants/contact";
import { LOCATION, SITE_NAME } from "@/constants/site";

export default function ContactIntro() {
	const introRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

			gsap.set(".contact-line", { yPercent: 110 });

			gsap
				.timeline({ delay: 0.5 })
				.to(".contact-line", { yPercent: 0, duration: 1.2, stagger: 0.1, ease: REVEAL_EASE }, 0)
				.from(".contact-desc", { autoAlpha: 0, y: 20, duration: 0.9, ease: SOFT_EASE }, 0.45)
				.from(".contact-badge", { autoAlpha: 0, y: 20, duration: 0.8, stagger: 0.08, ease: CURTAIN_EASE }, 0.6);
		},
		{ scope: introRef },
	);

	return (
		<div ref={introRef}>
			<h1 className="display-lg md:display-xl lg:display-2xl text-ink-black">
				<span className="block overflow-hidden">
					<span className="contact-line block">Got a question?</span>
				</span>

				<span className="block overflow-hidden">
					<span className="contact-line block">Ask now</span>
				</span>
			</h1>

			<p className="contact-desc sans-lg md:sans-xl text-ink-black/70 mt-4 max-w-md md:mt-8">
				{CONTACT_DESCRIPTION.map((line) => (
					<span key={line} className="block">
						{line}
					</span>
				))}
			</p>

			<aside className="mt-10 flex flex-wrap gap-x-2 gap-y-2.5 md:mt-14">
				<AvailabilityBadge className="contact-badge" inactiveVariant="ink" variant="peach" />

				<Badge className="contact-badge" variant="ink">
					<UserIcon className="size-4" />
					<span className="mb-0.5">{SITE_NAME}</span>
				</Badge>

				<Badge className="contact-badge" variant="ink">
					<MapPinIcon className="size-4" />
					<span className="mb-0.5">{LOCATION}</span>
				</Badge>
			</aside>
		</div>
	);
}

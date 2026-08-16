"use client";

import { useRef } from "react";

import Link from "next/link";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRightIcon } from "lucide-react";

import { EMAIL } from "@/constants/site";

const ITEMS_PER_HALF = 6;

const SPEED = 90;

const items = Array.from({ length: ITEMS_PER_HALF * 2 });

export default function EmailSlider() {
	const trackRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

		const track = trackRef.current;

		if (!track) return;

		gsap.set(track, { xPercent: -50 });

		const animation = gsap.to(track, {
			xPercent: 0,
			duration: track.scrollWidth / 2 / SPEED,
			ease: "none",
			repeat: -1,
		});

		track.addEventListener("mouseenter", () => {
			animation.pause();
		});

		track.addEventListener("mouseleave", () => {
			animation.play();
		});

		return () => {
			track.removeEventListener("mouseenter", () => {
				animation.pause();
			});
			track.removeEventListener("mouseleave", () => {
				animation.play();
			});
		};
	});

	return (
		<aside className="bg-peach overflow-hidden rounded-b-[64px] py-6">
			<div ref={trackRef} className="flex w-max items-center">
				{items.map((_, index) => (
					<div key={index} className="flex shrink-0 items-center gap-4 pr-4 md:gap-10 md:pr-10">
						<Link
							className="display-md md:display-lg font-semibold hover:underline"
							aria-hidden={index > 0 ? true : undefined}
							href={`mailto:${EMAIL}`}
							tabIndex={index > 0 ? -1 : undefined}
						>
							{EMAIL}
						</Link>

						<ArrowRightIcon className="size-8 shrink-0" aria-hidden />
					</div>
				))}
			</div>
		</aside>
	);
}

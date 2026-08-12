"use client";

import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Badge from "@/components/Badge";

import { CURTAIN_EASE, SOFT_EASE } from "@/assets/styles/eases";

import experienceData from "@/data/experience";
import skillsData from "@/data/skills";

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceSection() {
	const sectionRef = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 70%",
					end: "80% center",
					scrub: 1,
				},
			});

			tl.from(".experience-heading", {
				yPercent: 110,
				duration: 1,
				ease: CURTAIN_EASE,
			})
				.from(
					".experience-label",
					{
						y: 16,
						autoAlpha: 0,
						duration: 0.5,
						ease: SOFT_EASE,
					},
					"-=0.7",
				)
				.from(
					".experience-badge",
					{
						y: 16,
						autoAlpha: 0,
						duration: 0.6,
						stagger: 0.05,
						ease: SOFT_EASE,
					},
					"-=0.5",
				)
				.from(
					".experience-line",
					{
						scaleX: 0,
						duration: 0.9,
						stagger: 0.1,
						ease: CURTAIN_EASE,
					},
					"-=0.6",
				)
				.from(
					".experience-row",
					{
						yPercent: 110,
						duration: 1,
						stagger: 0.1,
						ease: CURTAIN_EASE,
					},
					"-=1",
				);
		},
		{ scope: sectionRef },
	);

	return (
		<section ref={sectionRef} className="container py-24 md:py-34">
			<header className="mb-8 flex flex-wrap items-center justify-between gap-4">
				<h2 className="display-lg md:display-xl overflow-hidden">
					<span className="experience-heading block">Experience</span>
				</h2>

				<aside>
					<small className="experience-label sans-sm mb-2 font-semibold uppercase">SKILLS</small>

					<div className="flex flex-wrap gap-x-1 gap-y-1.5">
						{skillsData.map((skill) => (
							<Badge key={skill} className="experience-badge" size="sm">
								{skill}
							</Badge>
						))}
					</div>
				</aside>
			</header>

			<ul className="relative">
				{experienceData.map((item) => (
					<li key={item.title} className="relative">
						<span
							className="experience-line bg-ink-black-dimmed/25 absolute top-0 left-0 h-px w-full origin-left"
							aria-hidden
						/>

						<div className="overflow-hidden">
							<div className="experience-row flex items-center justify-between gap-4 px-4 py-6">
								<div>
									<h4 className="display-sm md:display-md">{item.title}</h4>
									<p className="sans-lg md:sans-xl text-ink-black-dimmed">{item.description}</p>
								</div>

								<small className="sans-sm md:sans-md text-ink-black-dimmed whitespace-nowrap">{item.date}</small>
							</div>
						</div>
					</li>
				))}

				<span
					className="experience-line bg-ink-black-dimmed/25 absolute bottom-0 left-0 h-px w-full origin-left"
					aria-hidden
				/>
			</ul>
		</section>
	);
}

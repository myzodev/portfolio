"use client";

import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { REVEAL_EASE } from "@/assets/styles/eases";

import projectsData from "@/data/projects";

import ProjectsListItem from "./ProjectsListItem";

gsap.registerPlugin(ScrollTrigger);

const COLUMN_DRIFT = [-80, -280];

const HEADER_LEAD = 0.65;

export default function ProjectsList() {
	const sectionRef = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

			gsap.utils.toArray<HTMLElement>(".projects-item").forEach((item, index) => {
				gsap.from(item, {
					yPercent: 6,
					autoAlpha: 0,
					duration: 1.1,
					ease: REVEAL_EASE,
					delay: index < 2 ? HEADER_LEAD + index * 0.12 : 0,
					scrollTrigger: {
						trigger: item,
						start: "top 85%",
						once: true,
					},
				});
			});

			gsap.utils.toArray<HTMLElement>(".project-image").forEach((image) => {
				gsap.fromTo(
					image,
					{ yPercent: -8 },
					{
						yPercent: 8,
						ease: "none",
						scrollTrigger: {
							trigger: image.closest("li"),
							start: "top bottom",
							end: "bottom top",
							scrub: true,
						},
					},
				);
			});

			const mm = gsap.matchMedia();

			mm.add("(min-width: 768px)", () => {
				gsap.to(".projects-item", {
					y: (index) => COLUMN_DRIFT[index % 2],
					ease: "none",
					scrollTrigger: {
						trigger: sectionRef.current,
						start: "top bottom",
						end: "bottom top",
						scrub: 1,
					},
				});
			});
		},
		{ scope: sectionRef },
	);

	return (
		<section ref={sectionRef} className="container py-12 md:py-20">
			<ul className="grid grid-cols-1 max-md:gap-y-18 md:grid-cols-2 md:gap-x-10 lg:gap-x-16">
				{projectsData.map((project, index) => (
					<ProjectsListItem key={project.slug} className={index % 2 === 1 ? "md:mt-30" : ""} project={project} />
				))}
			</ul>
		</section>
	);
}

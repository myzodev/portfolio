"use client";

import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ABOUT_IMAGE, ABOUT_LABEL, ABOUT_PARAGRAPHS } from "@/constants/home";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
	const sectionRef = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			const entranceTl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 85%",
					toggleActions: "play none none none",
				},
			});

			entranceTl.from([".about-label", ".about-text-wrapper", ".about-image-wrapper"], {
				opacity: 0,
				y: 40,
				duration: 1,
				stagger: 0.15,
				delay: 0.4,
				ease: "power3.out",
			});

			const mm = gsap.matchMedia();

			mm.add(
				{
					isMobile: "(max-width: 767px)",
					isDesktop: "(min-width: 768px)",
				},
				(context) => {
					const { isMobile } = context.conditions as { isMobile: boolean; isDesktop: boolean };

					const parallaxTl = gsap.timeline({
						scrollTrigger: {
							trigger: sectionRef.current,
							start: "top 75%",
							end: "bottom top",
							scrub: 1,
						},
					});

					parallaxTl.to(".about-text", { y: isMobile ? -50 : -120, ease: "none" }, 0);
					parallaxTl.to(".about-image", { y: isMobile ? -110 : 80, ease: "none" }, 0);
				},
			);
		},
		{ scope: sectionRef },
	);

	return (
		<section ref={sectionRef} className="relative z-20 container overflow-hidden">
			<div className="border-ink-black-dimmed/25 border-t pt-24 pb-50 md:pt-32 md:pb-39 lg:pt-40 lg:pb-47">
				<small className="about-label sans-xl text-ink-black-dimmed block max-lg:mb-6">{ABOUT_LABEL}</small>

				<div className="relative ml-auto md:w-4/5 lg:w-3/5">
					<div className="about-text-wrapper">
						<h2 className="about-text display-sm md:display-md relative z-10 leading-[150%]!">
							{ABOUT_PARAGRAPHS.map((paragraph, index) => (
								<span key={index} className="mt-8 block first:mt-0">
									{paragraph}
								</span>
							))}
						</h2>
					</div>

					<div
						className="about-image-wrapper absolute -z-1 max-md:right-8 max-md:-bottom-46 md:top-1/2 md:-left-48 md:-translate-y-1/2 lg:-left-65"
						aria-hidden
					>
						<figure className="about-image size-48 overflow-hidden rounded-2xl duration-300 md:h-98 md:w-74.5 md:rounded-3xl lg:h-115 lg:w-82.5">
							<img className="h-full w-full object-cover" src={ABOUT_IMAGE.src} alt={ABOUT_IMAGE.alt} />
						</figure>
					</div>
				</div>
			</div>
		</section>
	);
}

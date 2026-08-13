"use client";

import { useRef, useState } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { PROJECT_PALETTES } from "@/constants/project-palettes";
import projectsData from "@/data/projects";

const DIRECTIONAL_MOVES = [
	{
		prevTarget: { xPercent: 100, yPercent: 0 },
		nextStart: { xPercent: -100, yPercent: 0 },
	},
	{
		prevTarget: { xPercent: 0, yPercent: 100 },
		nextStart: { xPercent: 0, yPercent: -100 },
	},
	{
		prevTarget: { xPercent: -100, yPercent: 0 },
		nextStart: { xPercent: 100, yPercent: 0 },
	},
	{
		prevTarget: { xPercent: 0, yPercent: -100 },
		nextStart: { xPercent: 0, yPercent: 100 },
	},
];

const COLOR_EASE = "power2.inOut";

const projects = projectsData.filter((project) => project.selected);

const INITIAL_IMAGE_BG = PROJECT_PALETTES[projects[0].color].bgImage;

export default function ProjectsSection() {
	const containerRef = useRef<HTMLElement>(null);

	const [currentIndex, setCurrentIndex] = useState(0);
	const [prevIndex, setPrevIndex] = useState<number | null>(null);
	const [textIndex, setTextIndex] = useState(0);
	const [textDirection, setTextDirection] = useState<1 | -1>(1);
	const [moveCount, setMoveCount] = useState(0);
	const isAnimating = useRef(false);

	const currentProject = projects[currentIndex];
	const prevProject = prevIndex !== null ? projects[prevIndex] : null;
	const activeTextProject = projects[textIndex];

	const currentPalette = PROJECT_PALETTES[currentProject.color];

	const changeProject = (dir: 1 | -1) => {
		if (isAnimating.current) return;
		isAnimating.current = true;

		const nextProjectIndex = (currentIndex + dir + projects.length) % projects.length;

		setTextDirection(dir);
		setPrevIndex(currentIndex);
		setCurrentIndex(nextProjectIndex);
		setMoveCount((prev) => prev + 1);
	};

	useGSAP(
		() => {
			if (prevIndex === null) {
				gsap.set(".proj-image-next", { xPercent: 0, yPercent: 0 });
				isAnimating.current = false;
				return;
			}

			const moveIndex = (moveCount - 1) % DIRECTIONAL_MOVES.length;
			const moveConfig = DIRECTIONAL_MOVES[moveIndex];
			const textExitY = textDirection * -50;

			const tl = gsap.timeline({
				onComplete: () => {
					setPrevIndex(null);
					isAnimating.current = false;
				},
			});

			tl.to(
				".proj-image-panel",
				{
					backgroundColor: currentPalette.bgImage,
					duration: 0.9,
					ease: COLOR_EASE,
				},
				0,
			);

			tl.to(
				".proj-image-prev",
				{
					...moveConfig.prevTarget,
					duration: 0.9,
					ease: "power3.inOut",
				},
				0,
			).fromTo(
				".proj-image-next",
				{ ...moveConfig.nextStart },
				{
					xPercent: 0,
					yPercent: 0,
					duration: 0.9,
					ease: "power3.inOut",
				},
				0,
			);

			tl.to(
				[".proj-num", ".proj-header", ".proj-badge", ".proj-desc"],
				{
					y: textExitY,
					opacity: 0,
					duration: 0.42,
					stagger: 0.04,
					ease: "power2.in",
					onComplete: () => setTextIndex(currentIndex),
				},
				0,
			);
		},
		{ scope: containerRef, dependencies: [currentIndex, moveCount] },
	);

	useGSAP(
		() => {
			if (prevIndex === null) return;

			gsap.fromTo(
				[".proj-num", ".proj-header", ".proj-badge", ".proj-desc"],
				{ y: textDirection * 50, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 0.85,
					stagger: 0.07,
					ease: "power3.out",
				},
			);
		},
		{ scope: containerRef, dependencies: [textIndex] },
	);

	return (
		<section
			ref={containerRef}
			className="relative z-10 container w-full pb-32 md:pb-39 lg:pb-47"
			aria-roledescription="carousel"
			aria-label="Featured Projects"
		>
			<article
				className="flex w-full flex-col-reverse overflow-hidden rounded-3xl lg:min-h-180 lg:flex-row lg:rounded-4xl"
				aria-atomic="true"
				aria-live="polite"
			>
				<div className="bg-powder-petal/5 relative z-10 flex flex-col justify-between p-6 sm:p-8 lg:w-1/2 lg:p-14">
					<div className="max-lg:contents lg:flex lg:w-full lg:items-center lg:justify-between">
						<header className="proj-header-group flex items-center gap-2.5 max-lg:order-1 lg:gap-4">
							<span
								className="proj-num display-2xl text-[4rem] leading-none font-bold lg:text-[5.5rem]"
								aria-hidden="true"
							>
								{String(textIndex + 1).padStart(2, "0")}
							</span>

							<div className="proj-header">
								<small className="sans-md lg:sans-xl -mb-1 uppercase opacity-40">{activeTextProject.year}</small>
								<h2 className="display-sm md:display-lg lg:display-xl font-bold">{activeTextProject.title}</h2>
							</div>
						</header>

						<nav
							className="proj-nav-group flex items-center justify-end gap-2 max-lg:order-3 max-lg:mt-4"
							aria-label="Carousel navigation"
						>
							<button
								className="border-powder-petal/25 hover:border-powder-petal flex size-10 items-center justify-center rounded-full border transition-colors"
								aria-label="View previous project"
								onClick={() => changeProject(-1)}
							>
								<ChevronLeftIcon className="mr-0.5 size-4" aria-hidden="true" />
							</button>

							<button
								className="border-powder-petal/25 hover:border-powder-petal flex size-10 items-center justify-center rounded-full border transition-colors"
								aria-label="View next project"
								onClick={() => changeProject(1)}
							>
								<ChevronRightIcon className="ml-0.5 size-4" aria-hidden="true" />
							</button>
						</nav>
					</div>

					<footer className="proj-footer-group relative z-10 mt-8 w-full max-lg:order-2 sm:mt-12 lg:mt-auto">
						<div className="overflow-hidden">
							<span className="proj-badge sans-sm border-powder-petal/25 inline-block rounded-full border px-2.5 py-0.5 font-bold sm:px-3 sm:py-1 sm:text-sm">
								{activeTextProject.role}
							</span>
						</div>

						<p className="proj-desc display-xs md:display-sm mt-4 leading-[150%]! md:mt-4">
							{activeTextProject.description}
						</p>
					</footer>
				</div>

				<figure
					style={{ backgroundColor: INITIAL_IMAGE_BG }}
					className="proj-image-panel flex w-full items-center justify-center overflow-hidden sm:p-8 lg:w-1/2 lg:p-14"
				>
					<div className="relative aspect-video w-full overflow-hidden rounded-lg md:rounded-xl">
						{prevProject?.image && (
							<img
								key={`prev-${prevProject.slug}`}
								className="proj-image-prev absolute inset-0 h-full w-full object-cover object-top"
								src={prevProject.image}
								alt=""
								aria-hidden="true"
							/>
						)}

						{currentProject.image && (
							<img
								key={`curr-${currentProject.slug}`}
								className="proj-image-next absolute inset-0 h-full w-full object-cover object-top"
								src={currentProject.image}
								alt={`Preview of ${currentProject.title}`}
							/>
						)}
					</div>
				</figure>
			</article>
		</section>
	);
}

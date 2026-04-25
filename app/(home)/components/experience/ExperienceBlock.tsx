"use client";

import { MoveRightIcon } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";

import ExperienceItem from "./ExperienceItem";

export type Job = {
	company: string;
	description: string;
	duration: string;
	role: string;
};

const jobs: Job[] = [
	{
		company: "Freelance",
		role: "Fullstack Developer",
		description: "Building scalable web applications and bridging complex backend logic with intuitive UX.",
		duration: "2026 - Present",
	},
	{
		company: "Studio Parada s.r.o",
		role: "Frontend Developer",
		description: "Transforming creative design concepts into polished, pixel-perfect digital products.",
		duration: "2023 - 2026",
	},
	{
		company: "VOLITA GROUP a.s.",
		role: "Fullstack Developer & Designer",
		description: "Managing the full lifecycle of SEO-optimized web projects from design to deployment.",
		duration: "2022 - 2023",
	},
	{
		company: "Webikon s.r.o.",
		role: "Frontend Developer",
		description: "Starting point - focused on absorbing new information and UI fundamentals.",
		duration: "2020 - 2021",
	},
];

export default function ExperienceBlock() {
	return (
		<section className="container">
			<div className="border-border/50 grid grid-cols-12 border-t py-20 lg:py-32">
				<header className="col-span-12 mb-4 max-md:flex max-md:items-center max-md:justify-between md:col-span-4 md:mb-6">
					<SectionHeading>Experience</SectionHeading>
					<MoveRightIcon className="size-4 max-md:rotate-135" />
				</header>

				<div className="col-span-12 md:col-span-8">
					<div className="relative flex w-full flex-col overflow-hidden">
						<ul className="flex flex-col gap-4">
							{jobs.map((item, idx) => (
								<ExperienceItem {...item} key={idx} />
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

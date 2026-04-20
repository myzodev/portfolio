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
		company: "Tech Solutions Inc.",
		role: "Senior Frontend Developer",
		description: "Led the migration of legacy systems to modern React architectures.",
		duration: "2022 - Present",
	},
	{
		company: "Digital Creative Agency",
		role: "Web Developer",
		description: "Developed high-performance landing pages and interactive web apps.",
		duration: "2020 - 2022",
	},
	{
		company: "Startup Hub",
		role: "Junior Developer",
		description: "Collaborated on building scalable UI components and internal tools.",
		duration: "2018 - 2020",
	},
];

export default function ExperienceBlock() {
	return (
		<section className="container">
			<div className="border-border/50 grid grid-cols-12 border-t py-20 lg:py-32">
				<header className="col-span-12 mb-6 max-md:flex max-md:items-center max-md:justify-between md:col-span-4 md:mb-0">
					<SectionHeading className="mb-2">Experience</SectionHeading>
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

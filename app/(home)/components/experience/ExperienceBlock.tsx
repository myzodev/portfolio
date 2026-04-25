"use client";

import { MoveRightIcon } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";

import experienceList from "@/libs/experience-list";

import ExperienceListItem from "./ExperienceListItem";

export default function ExperienceBlock() {
	return (
		<section className="container">
			<div className="border-border grid grid-cols-12 border-t py-20 lg:py-32">
				<header className="col-span-12 mb-4 max-md:flex max-md:items-center max-md:justify-between md:col-span-4 md:mb-6">
					<SectionHeading className="mb-2">Experience</SectionHeading>
					<MoveRightIcon className="size-4 max-md:rotate-135" />
				</header>

				<div className="col-span-12 md:col-span-8">
					<div className="relative flex w-full flex-col overflow-hidden">
						<ul className="flex flex-col gap-4">
							{experienceList.map((item, idx) => (
								<ExperienceListItem {...item} key={idx} />
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

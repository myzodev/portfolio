import type { Metadata } from "next";

import { createMetadata } from "@/utils/metadata";

import PageHeading from "@/components/PageHeading";
import ProjectsBlock from "@/components/projects/ProjectsBlock";

import projects from "@/libs/projects";

export const metadata: Metadata = createMetadata(
	"Myžo • What I've been working on",
	"Showcase of projects I've been working on",
);

export default function Page() {
	return (
		<>
			<PageHeading text="From Concept to" highlightText="Realization" />
			<ProjectsBlock
				heading="Projects"
				projects={projects}
				border={false}
				showProjectsButton={false}
				offsetClasssName="pb-10 lg:pb-32"
			/>
		</>
	);
}

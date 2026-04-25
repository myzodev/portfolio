import type { Metadata } from "next";

import PageHeader from "@/components/PageHeader";
import ProjectsBlock from "@/components/projects/ProjectsBlock";

import projects from "@/libs/projects";

export const metadata: Metadata = {
	title: "Myžo • What I've been working on",
	description: "Showcase of projects I've been working on",
};

export default function Page() {
	return (
		<>
			<PageHeader text="From Concept to" highlightText="Realization" />
			<ProjectsBlock
				heading="Projects"
				projects={projects}
				border={false}
				showProjectsButton={false}
				offsetClasssName="pb-20 lg:pb-32"
			/>
		</>
	);
}

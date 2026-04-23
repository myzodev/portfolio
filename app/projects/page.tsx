import type { Metadata } from "next";

import { createMetadata } from "@/utils/metadata";

import ProjectsBlock from "@/components/projects/ProjectsBlock";

import projects from "@/libs/projects";

export const metadata: Metadata = createMetadata(
	"Myžo • What I've been working on",
	"Showcase of projects I've been working on",
);

export default function Page() {
	return <ProjectsBlock heading="Projects" projects={projects} border={false} showProjectsButton={false} />;
}

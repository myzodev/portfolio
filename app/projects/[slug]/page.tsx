import { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAllProjectSlugs, getProjectBySlug } from "@/libs/projects";

import ProjectPage from "./content";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;

	const project = getProjectBySlug(slug);

	return {
		title: `Myžo • ${project?.title}`,
		description: `Myžo • Project ${project?.title}`,
	};
}

export function generateStaticParams() {
	return getAllProjectSlugs().map((slug) => ({ slug }));
}

type Props = {
	params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
	const { slug } = await params;
	const project = getProjectBySlug(slug);

	if (!project || project.wip) {
		notFound();
	}

	return <ProjectPage project={project} />;
}

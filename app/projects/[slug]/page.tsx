import { Metadata } from "next";
import { notFound } from "next/navigation";

import AppWIP from "@/components/layout/AppWIP";

import { getAllProjectSlugs, getProjectBySlug } from "@/libs/projects";

import ProjectHeader from "./components/ProjectHeader";

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

	return (
		<>
			<ProjectHeader project={project} />
			<AppWIP size="small" showButton={false} />
		</>
	);
}

import { notFound } from "next/navigation";

import AppWIP from "@/components/layout/AppWIP";

import { getAllProjectSlugs, getProjectBySlug } from "@/libs/projects";

import ProjectHeader from "./components/ProjectHeader";

export function generateStaticParams() {
	return getAllProjectSlugs().map((slug) => ({ slug }));
}

type Props = {
	params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
	const { slug } = await params;
	const project = getProjectBySlug(slug);

	if (!project) {
		notFound();
	}

	return (
		<>
			<ProjectHeader project={project} />
			<AppWIP size="small" showButton={false} />
		</>
	);
}

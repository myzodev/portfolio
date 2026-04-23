import { Metadata } from "next";
import { notFound } from "next/navigation";

import { createMetadata } from "@/utils/metadata";

import AppWIP from "@/components/layout/AppWIP";

import { getAllProjectSlugs, getProjectBySlug } from "@/libs/projects";

import ProjectHeader from "./components/ProjectHeader";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;

	const project = getProjectBySlug(slug);

	return createMetadata(`Myžo • ${project?.title}`, `Myžo • Project ${project?.title}`);
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

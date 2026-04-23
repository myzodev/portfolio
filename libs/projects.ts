import type Project from "@/types/project";

import projectsData from "./projects.json";

export type { Project };

const projects = projectsData as Project[];

export function getAllProjects(): Project[] {
	return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
	return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
	return projects.map((p) => p.slug);
}

export default projects;

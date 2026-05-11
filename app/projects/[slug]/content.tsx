import AppWIP from "@/components/layout/AppWIP";

import type Project from "@/types/project";

import ProjectHeader from "./components/ProjectHeader";
import ProjectsContent from "./components/ProjectsContent";

export default function ProjectPage({ project }: { project: Project }) {
	return (
		<>
			<ProjectHeader project={project} />
			{project.content ? <ProjectsContent project={project} /> : <AppWIP size="small" showButton={false} />}
		</>
	);
}

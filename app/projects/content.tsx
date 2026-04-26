import PageHeader from "@/components/PageHeader";
import ProjectsBlock from "@/components/projects/ProjectsBlock";

import projects from "@/libs/projects";

export default function ProjectsPage() {
	return (
		<>
			<PageHeader text="From Concept to" highlightText="Realization" />
			<ProjectsBlock
				heading="What I've been working on"
				projects={projects}
				border={false}
				showProjectsButton={false}
				offsetClasssName="pb-20 lg:pb-32"
			/>
		</>
	);
}

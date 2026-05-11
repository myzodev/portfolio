import type Project from "@/types/project";

type Props = {
	project: Project;
};

export default function ProjectsContent({ project }: Props) {
	return (
		<section className="container space-y-14 py-20 lg:py-32">
			{project.content && <div className="space-y-14" dangerouslySetInnerHTML={{ __html: project.content }} />}

			<div className="project-section">
				<img src={`/images/projects/${project.slug}.png`} alt={project.title} />
			</div>
		</section>
	);
}

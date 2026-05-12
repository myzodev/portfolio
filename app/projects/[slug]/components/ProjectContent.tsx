import type Project from "@/types/project";

type Props = {
	project: Project;
};

export default function ProjectContent({ project }: Props) {
	return (
		<section className="container space-y-8 py-20 md:space-y-14 lg:py-32">
			{project.content && (
				<div className="space-y-8 md:space-y-14" dangerouslySetInnerHTML={{ __html: project.content }} />
			)}

			<div className="project-section">
				<img src={`/images/projects/${project.slug}.png`} alt={project.title} />
			</div>
		</section>
	);
}

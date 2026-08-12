import { PROJECT_PALETTES } from "@/constants/project-palettes";

import type Project from "@/types/project";

interface Props {
	project: Project;
	className?: string;
}

export default function ProjectsListItem({ project, className = "" }: Props) {
	const palette = PROJECT_PALETTES[project.color];

	const content = (
		<>
			<div
				style={
					{
						"--project-bg": palette.bgImage,
						"--project-bg-hover": palette.bgText,
					} as React.CSSProperties
				}
				className="flex aspect-square items-center justify-center rounded-3xl bg-(--project-bg) p-5 transition-colors duration-500 group-hover:bg-(--project-bg-hover) md:rounded-4xl md:p-10"
			>
				<figure className="aspect-6/4 w-full overflow-hidden rounded-lg md:rounded-xl">
					{project.image ? (
						<img
							className="project-image h-[118%] w-full object-cover object-top"
							src={project.image}
							alt={project.title}
						/>
					) : (
						<span
							style={{ color: palette.textColor }}
							className="sans-sm flex size-full items-center justify-center font-semibold"
						>
							In progress
						</span>
					)}
				</figure>
			</div>

			<div className="border-ink-black-dimmed/25 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b px-2 py-6 md:px-4 md:py-8">
				<h3
					style={{ "--project-accent": palette.accentColor } as React.CSSProperties}
					className="display-sm md:display-md lg:display-lg transition-colors duration-500 group-hover:text-(--project-accent)"
				>
					{project.title}
				</h3>

				<p className="sans-sm md:sans-md text-ink-black-dimmed">
					{project.role} - {project.year}
				</p>
			</div>
		</>
	);

	return (
		<li className={`projects-item ${className}`}>
			{project.wip ? (
				<div className="group block">{content}</div>
			) : (
				<a className="group block" href={project.url} rel="noreferrer noopener" target="_blank">
					{content}
				</a>
			)}
		</li>
	);
}

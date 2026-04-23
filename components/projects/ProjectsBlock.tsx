import { MoveDownLeftIcon } from "lucide-react";

import { PROJECTS_ROUTE } from "@/utils/routes";
import { cn } from "@/utils/utils";

import ButtonLink from "@/components/ButtonLink";
import SectionHeading from "@/components/SectionHeading";

import type { Project } from "@/libs/projects";

import ProjectsItem from "./ProjectsItem";

type Props = {
	heading?: string;
	projects: Project[];
	border?: boolean;
	showProjectsButton?: boolean;
};

export default function ProjectsBlock({
	heading = "Recent Projects",
	projects = [],
	border = true,
	showProjectsButton = true,
}: Props) {
	return (
		<section className="container">
			<div className={cn("py-20 pb-10 lg:py-32", border && "border-border/50 border-t")}>
				<header className="mb-6 flex items-center justify-between">
					<SectionHeading>{heading}</SectionHeading>
					<MoveDownLeftIcon className="size-4" />
				</header>

				{projects.length > 0 ? (
					<ul className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 md:gap-y-12">
						{projects.map((project, index) => (
							<ProjectsItem {...project} key={index} />
						))}
					</ul>
				) : null}

				{showProjectsButton ? (
					<footer className="mt-10 flex justify-center">
						<ButtonLink href={PROJECTS_ROUTE} size="lg">
							View all projects
						</ButtonLink>
					</footer>
				) : null}
			</div>
		</section>
	);
}

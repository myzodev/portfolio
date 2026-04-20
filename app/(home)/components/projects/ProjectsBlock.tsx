import { MoveDownLeftIcon } from "lucide-react";

import ButtonLink from "@/components/ButtonLink";
import SectionHeading from "@/components/SectionHeading";

import ProjectsItem from "./ProjectsItem";

export default function RecentProjectsBlock() {
	return (
		<section className="container">
			<div className="border-border/50 border-t py-20 pb-10 lg:py-32">
				<header className="mb-6 flex items-center justify-between">
					<SectionHeading>Recent Projects</SectionHeading>
					<MoveDownLeftIcon className="size-4" />
				</header>

				<ul className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 md:gap-y-10">
					<ProjectsItem />
					<ProjectsItem />
					<ProjectsItem />
					<ProjectsItem />
				</ul>

				<footer className="mt-10 flex justify-center">
					<ButtonLink href="/projects" size="lg">
						View All Projects
					</ButtonLink>
				</footer>
			</div>
		</section>
	);
}

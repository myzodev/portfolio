import Link from "next/link";

import { PROJECT_ROUTE } from "@/utils/routes";
import { cn } from "@/utils/utils";

import type { Project } from "@/libs/projects";

import { Badge } from "../magicui/badge";
import ProjectsItemImage from "./ProjectsItemImage";

export default function ProjectsItem(item: Project) {
	return (
		<li
			className={`border-border bg-background link-overlay-box group rounded-lg border p-4 pb-5 transition-colors duration-300 sm:p-6 ${cn(!item.wip && "hover:border-primary/50")}`}
		>
			<div className="relative mb-4">
				<div
					className="relative flex aspect-square size-full items-center justify-center overflow-hidden rounded-md p-4 transition-colors duration-300 sm:p-6"
					style={{ backgroundColor: `var(--color-project-${item.color})` }}
				>
					{item.wip ? (
						<div className="bg-background aspect-5/3 w-full rounded-lg" />
					) : (
						<ProjectsItemImage title={item.title} slug={item.slug} />
					)}

					<span className="text-muted-foreground/10 font-heading absolute -right-0.5 -bottom-2 text-6xl lg:-bottom-4 lg:text-8xl">
						{item.year}
					</span>
				</div>

				<div className="absolute top-4 left-4 flex items-center gap-2 md:top-6 md:left-6">
					{item.wip ? <Badge variant="destructive">Work in progress</Badge> : null}
					{item.active ? <Badge variant="success">Active Development</Badge> : null}
				</div>
			</div>

			<footer className="flex items-center justify-between">
				{item.wip ? (
					<h3 className="text-lg uppercase md:text-xl">{item.title}</h3>
				) : (
					<Link className="link-overlay" href={PROJECT_ROUTE(item.slug)}>
						<h3 className="text-lg uppercase md:text-xl">{item.title}</h3>
					</Link>
				)}

				<small className="text-muted-foreground text-xs md:text-sm">{item.role}</small>
			</footer>
		</li>
	);
}

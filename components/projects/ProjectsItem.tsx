import Link from "next/link";

import { PROJECT_ROUTE } from "@/utils/routes";

import type { Project } from "@/libs/projects";

import { Badge } from "../ui/badge";

export default function ProjectsItem(item: Project) {
	return (
		<li className="border-border bg-background link-overlay-box group rounded-lg border p-4 pb-5">
			<div className="relative mb-4">
				{item.wip ? (
					<div
						className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-md p-8 transition-colors duration-300"
						style={{ backgroundColor: `var(--color-project-${item.color})` }}
					>
						<div className="bg-background aspect-5/3 w-full rounded-lg" />
					</div>
				) : (
					<figure
						className="relative flex aspect-square size-full items-center justify-center overflow-hidden rounded-md p-8 transition-colors duration-300"
						style={{ backgroundColor: `var(--color-project-${item.color})` }}
					>
						<img
							className="border-border z-10 aspect-5/3 rounded-lg border object-cover transition-transform duration-400 group-hover:scale-102"
							src={`/images/projects/${item.slug}.png`}
							alt={`${item.title} project screenshot`}
							loading="lazy"
						/>
					</figure>
				)}

				{item.wip ? (
					<div className="absolute bottom-4 left-4">
						<Badge variant="destructive">Work in progress</Badge>
					</div>
				) : null}
			</div>

			<footer className="flex items-center justify-between">
				{item.wip ? (
					<h2 className="text-lg uppercase md:text-xl">{item.title}</h2>
				) : (
					<Link className="link-overlay" href={PROJECT_ROUTE(item.slug)}>
						<h2 className="text-lg uppercase md:text-xl">{item.title}</h2>
					</Link>
				)}

				<small className="text-muted-foreground text-xs md:text-sm">{item.role}</small>
			</footer>
		</li>
	);
}

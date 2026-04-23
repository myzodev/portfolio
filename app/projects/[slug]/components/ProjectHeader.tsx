import Link from "next/link";

import { LinkIcon } from "lucide-react";
import { DotIcon } from "lucide-react";

import { PROJECTS_ROUTE } from "@/utils/routes";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import type Project from "@/types/project";

export default function ProjectHeader({ project }: { project: Project }) {
	return (
		<header className="container">
			<Breadcrumb className="my-3">
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href={PROJECTS_ROUTE}>Projects</BreadcrumbLink>
					</BreadcrumbItem>

					<BreadcrumbSeparator>
						<DotIcon />
					</BreadcrumbSeparator>

					<BreadcrumbItem>
						<BreadcrumbPage>{project.title}</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<div className="mb-3">
				<div
					className="relative overflow-hidden rounded-lg py-12 lg:py-20"
					style={{ backgroundColor: `var(--color-project-${project.color})` }}
				>
					<h1 className="text-foreground relative z-10 text-center text-4xl font-bold sm:text-5xl lg:text-7xl">
						{project.title}
					</h1>
				</div>
			</div>

			<aside className="relative z-10 grid grid-cols-1 gap-3 md:grid-cols-2">
				<Link
					href={project.url}
					target="_blank"
					className="flex items-center gap-2 rounded-lg p-6"
					style={{ backgroundColor: `var(--color-project-${project.color})` }}
				>
					<LinkIcon className="size-4" />
					<h6 className="text-lg font-bold">Website</h6>
				</Link>

				<div className="rounded-lg p-6" style={{ backgroundColor: `var(--color-project-${project.color})` }}>
					<h6 className="text-lg font-bold">{project.role}</h6>
				</div>
			</aside>
		</header>
	);
}

import Link from "next/link";

import { DotIcon, GlobeIcon } from "lucide-react";

import { PROJECTS_ROUTE } from "@/utils/routes";

import SectionHeading from "@/components/SectionHeading";
import { AuroraText } from "@/components/magicui/aurora-text";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/magicui/breadcrumb";

import type Project from "@/types/project";

export default function ProjectHeader({ project }: { project: Project }) {
	return (
		<header className="container">
			<Breadcrumb className="my-3">
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<Link href={PROJECTS_ROUTE}>Projects</Link>
						</BreadcrumbLink>
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
					className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg py-12 lg:py-20"
					style={{ backgroundColor: `var(--color-project-${project.color})` }}
				>
					<SectionHeading className="mb-1">About</SectionHeading>

					<h1 className="text-foreground relative z-10 text-center text-4xl font-bold sm:text-5xl lg:text-7xl">
						<AuroraText>{project.title}</AuroraText>
					</h1>
				</div>
			</div>

			<aside className="relative z-10 grid grid-cols-1 gap-3 text-center md:grid-cols-3">
				<Link
					href={project.url}
					target="_blank"
					className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-lg p-4 md:p-6"
					style={{ backgroundColor: `var(--color-project-${project.color})` }}
				>
					<GlobeIcon className="size-3" />
					<h6 className="text-sm font-bold md:text-base">Website</h6>
					<div
						className="pointer-events-none absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-5"
						aria-hidden="true"
					/>
				</Link>

				<div className="rounded-lg p-4 md:p-6" style={{ backgroundColor: `var(--color-project-${project.color})` }}>
					<h6 className="text-sm font-bold md:text-base">{project.year}</h6>
				</div>

				<div className="rounded-lg p-4 md:p-6" style={{ backgroundColor: `var(--color-project-${project.color})` }}>
					<h6 className="text-sm font-bold md:text-base">{project.role}</h6>
				</div>
			</aside>
		</header>
	);
}

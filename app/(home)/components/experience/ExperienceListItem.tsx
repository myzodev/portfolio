import { Badge } from "@/components/magicui/badge";

import type { Experience } from "@/types/experience";

export default function ExperienceListItem({ company, description, duration, role }: Experience) {
	return (
		<li className="border-border relative mx-auto min-h-fit w-full rounded-lg border p-4 transition-all duration-200">
			<article className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
				<div className="flex flex-col gap-1">
					<header className="flex flex-wrap items-center gap-x-2 gap-y-1">
						<h3 className="text-foreground font-sans text-sm font-bold md:text-base">{company}</h3>
						<Badge variant="accent">{role}</Badge>
					</header>

					<p className="text-muted-foreground text-sm">{description}</p>
				</div>

				<p className="text-muted-foreground shrink-0 text-xs font-bold uppercase md:text-right">{duration}</p>
			</article>
		</li>
	);
}

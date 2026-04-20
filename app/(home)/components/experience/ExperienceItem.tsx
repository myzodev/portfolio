import { Badge } from "@/components/ui/badge";

import type { Job } from "./ExperienceBlock";

export default function ExperienceItem({ company, description, duration, role }: Job) {
	return (
		<div className="border-border relative mx-auto min-h-fit w-full rounded-md border p-4 transition-all duration-200">
			<article className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
				<div className="flex flex-col gap-1">
					<header className="flex flex-wrap items-center gap-x-2">
						<h3 className="text-foreground text-md font-medium md:text-lg">{company}</h3>
						<Badge variant="secondary">{role}</Badge>
					</header>

					<p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
				</div>

				<time className="text-muted-foreground text-xs font-semibold tracking-wider uppercase md:text-right">
					{duration}
				</time>
			</article>
		</div>
	);
}

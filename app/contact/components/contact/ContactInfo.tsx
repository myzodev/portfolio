import { MoveDownRightIcon } from "lucide-react";

import { GithubIcon, LinkedInIcon } from "@/components/ui/Icon";
import SocialLink from "@/components/ui/SocialLink";

import linksList from "@/libs/links-list";

export default function ContactItems() {
	return (
		<aside className="col-span-12 flex flex-col gap-10 md:col-span-5">
			<MoveDownRightIcon className="size-4" />

			<div>
				<small className="text-muted-foreground mb-1 block">Email</small>
				<a href="mailto:hello@michalvalo.dev">hello@michalvalo.dev</a>
			</div>

			<div>
				<small className="text-muted-foreground mb-1 block">Links</small>

				<ul className="flex flex-wrap gap-2">
					{linksList.map((link) => (
						<li key={link.href}>
							<SocialLink href={link.href} icon={link.icon} label={link.label} />
						</li>
					))}
				</ul>
			</div>
		</aside>
	);
}

import { MoveDownRightIcon } from "lucide-react";

import SocialLink from "@/components/layout/footer/SocialLink";
import { GithubIcon, LinkedInIcon } from "@/components/ui/Icon";

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
					<li>
						<SocialLink href="https://github.com/myzodev" icon={<GithubIcon />} label="Github" target="_blank" />
					</li>

					<li>
						<SocialLink
							href="https://www.linkedin.com/in/michal-valo-421762237/"
							icon={<LinkedInIcon />}
							label="LinkedIn"
							target="_blank"
						/>
					</li>
				</ul>
			</div>
		</aside>
	);
}

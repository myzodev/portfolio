import { ArrowDownLeft } from "lucide-react";
import { MoveDownRightIcon } from "lucide-react";

import { CONTACT_ROUTE } from "@/utils/routes";

import ButtonLink from "@/components/ButtonLink";
import SectionHeading from "@/components/SectionHeading";
import { Separator } from "@/components/ui/separator";

export default function AppFooter() {
	return (
		<footer className="container pb-6">
			<section className="bg-muted-foreground/8 flex flex-col gap-10 rounded-xl p-6">
				<div className="flex flex-col items-start justify-between gap-6 md:flex-row">
					<header>
						<div className="mb-4 flex items-center gap-2">
							<MoveDownRightIcon className="size-4" />
							<SectionHeading>Let's talk about your idea</SectionHeading>
						</div>

						<nav className="flex flex-col gap-2 md:flex-row">
							<ButtonLink size="lg" href={CONTACT_ROUTE}>
								Contact
							</ButtonLink>
							<ButtonLink size="lg" variant="outline" href="mailto:hello@myzo.sk">
								hello@myzo.sk
							</ButtonLink>
						</nav>
					</header>

					<article className="flex items-center gap-3">
						<div className="text-right">
							<p className="text-muted-foreground text-xs">Currently</p>
							<p className="text-xs">not playing</p>
						</div>

						<div className="rounded-lg bg-zinc-800 p-2">
							<ArrowDownLeft className="size-5 text-zinc-100" />
						</div>
					</article>
				</div>

				<div className="flex flex-col gap-4">
					<Separator />

					<div className="flex flex-col justify-between gap-6 md:flex-row">
						<div className="not-italic">
							<p className="text-foreground text-xs font-medium">Made in</p>
							<p className="text-muted-foreground text-xs">2026</p>
						</div>

						<nav aria-label="Social media" className="flex flex-col items-start gap-2 md:items-end">
							<ul className="flex flex-wrap gap-2">
								<li>
									<SocialLink href="#" label="Github" />
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</section>
		</footer>
	);
}

function SocialLink({ href, label }: { href: string; label: string }) {
	return (
		<ButtonLink variant="outline" href={href}>
			<ArrowDownLeft className="size-4" />
			{label}
		</ButtonLink>
	);
}

import { MailIcon, MoveDownIcon } from "lucide-react";

import { CONTACT_ROUTE } from "@/utils/routes";

import SectionHeading from "@/components/SectionHeading";
import { Separator } from "@/components/magicui/separator";
import ButtonLink from "@/components/ui/ButtonLink";
import { GithubIcon, LinkedInIcon } from "@/components/ui/Icon";

import linksList from "@/libs/links-list";

import SocialLink from "../ui/SocialLink";
import CurrentPlaying from "./footer/CurrentPlaying";

export default function AppFooter() {
	return (
		<footer className="container pb-6">
			<section className="bg-muted flex flex-col gap-10 rounded-xl p-6">
				<div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
					<header>
						<div className="mb-4 flex items-center gap-2">
							<MoveDownIcon className="size-4" />
							<SectionHeading>Let's talk about your idea</SectionHeading>
						</div>

						<nav className="flex flex-col gap-2 md:flex-row">
							<ButtonLink size="lg" href={CONTACT_ROUTE}>
								Contact me
							</ButtonLink>

							<ButtonLink className="gap-2" size="lg" variant="outline" href="mailto:hello@michalvalo.dev">
								<MailIcon className="size-4" />
								<Separator className="my-2.5" orientation="vertical" />
								hello@michalvalo.dev
							</ButtonLink>
						</nav>
					</header>

					<CurrentPlaying />
				</div>

				<figure className="w-full">
					<img className="w-full" src="/images/logo.svg" alt="Myžo logo" />
				</figure>

				<aside className="flex flex-col gap-4">
					<Separator />

					<div className="flex items-center justify-between gap-6">
						<div className="not-italic">
							<small className="text-foreground block text-xs font-medium">Made in</small>
							<small className="text-muted-foreground block text-xs">2026</small>
						</div>

						<ul className="flex flex-wrap gap-2">
							{linksList.map((link) => (
								<li key={link.href}>
									<SocialLink href={link.href} icon={link.icon} label={link.label} />
								</li>
							))}
						</ul>
					</div>
				</aside>
			</section>
		</footer>
	);
}

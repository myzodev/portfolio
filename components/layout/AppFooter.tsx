import Logo from "@/assets/images/logo.svg";
import { MailIcon, MoveDownIcon } from "lucide-react";

import { CONTACT_ROUTE } from "@/utils/routes";

import SectionHeading from "@/components/SectionHeading";
import { Separator } from "@/components/magicui/separator";
import ButtonLink from "@/components/ui/ButtonLink";

import linksList from "@/libs/links-list";

import SocialLink from "../ui/SocialLink";
import CurrentPlaying from "./footer/CurrentPlaying";

export default function AppFooter() {
	return (
		<footer className="container pb-6">
			<section className="bg-muted flex flex-col gap-8 rounded-xl p-6">
				<div className="flex flex-col gap-6 md:gap-8">
					<div className="contents flex-col justify-between gap-6 md:flex md:flex-row md:items-start">
						<header className="max-md:order-1">
							<div className="mb-4 flex items-center gap-2">
								<MoveDownIcon className="size-4" />
								<SectionHeading>Let's talk about your idea</SectionHeading>
							</div>

							<div className="flex flex-col gap-2 sm:flex-row">
								<ButtonLink size="lg" href={CONTACT_ROUTE}>
									Get in Touch
								</ButtonLink>

								<ButtonLink className="gap-2" size="lg" variant="outline" href="mailto:hello@michalvalo.dev">
									<MailIcon className="size-4" />
									<Separator className="my-2.5" orientation="vertical" />
									hello@michalvalo.dev
								</ButtonLink>
							</div>
						</header>

						<CurrentPlaying className="max-md:order-3 max-md:-mt-3" />
					</div>

					<figure className="w-full max-md:order-2">
						<Logo className="text-foreground w-full" />
					</figure>
				</div>

				<aside className="flex flex-col gap-4">
					<Separator />

					<div className="flex items-center justify-between gap-4">
						<div className="shrink-0">
							<small className="text-foreground block text-xs font-medium">Made in</small>
							<small className="text-muted-foreground block text-xs">2026</small>
						</div>

						<ul className="flex gap-2 overflow-x-auto whitespace-nowrap">
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

import { CONTACT_ROUTE, PROJECTS_ROUTE } from "@/utils/routes";

import { AuroraText } from "@/components/magicui/aurora-text";
import { Highlighter } from "@/components/magicui/highlighter";
import { Ripple } from "@/components/magicui/ripple";
import ButtonLink from "@/components/ui/ButtonLink";

export default function HeroBlock() {
	return (
		<header className="relative overflow-hidden">
			<Ripple />

			<div className="from-background/0 to-background absolute inset-0 z-0 bg-radial to-70%" />

			<article className="relative z-10 container py-20 lg:py-32">
				<h1 className="mb-4 text-center text-4xl font-bold sm:mb-6 sm:text-5xl lg:text-7xl">
					Enhance Your <br />
					<AuroraText>Online Experience</AuroraText>
				</h1>

				<p className="text-muted-foreground mx-auto mb-8 max-w-md text-center text-base sm:mb-10 sm:max-w-lg sm:text-lg lg:max-w-xl">
					I'll transform your ideas into fast, responsive, and modern{" "}
					<Highlighter action="underline" color="#7371fc">
						websites and applications
					</Highlighter>{" "}
					that provide an intuitive and exceptional user experience
				</p>

				<footer className="flex items-center justify-center gap-2">
					<ButtonLink href={CONTACT_ROUTE} size="lg">
						Get in touch
					</ButtonLink>
					<ButtonLink href={PROJECTS_ROUTE} variant="outline" size="lg">
						Project showcase
					</ButtonLink>
				</footer>
			</article>
		</header>
	);
}

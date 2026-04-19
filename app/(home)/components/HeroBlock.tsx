import { CONTACT_ROUTE, PROJECTS_ROUTE } from "@/utils/routes";

import ButtonLink from "@/components/ButtonLink";
import { AuroraText } from "@/components/ui/aurora-text";
import { Ripple } from "@/components/ui/ripple";

export default function HeroBlock() {
	return (
		<header className="relative overflow-hidden">
			<Ripple />

			<div className="from-background/0 to-background absolute inset-0 z-0 bg-radial to-70%" />

			<article className="relative z-10 container py-20 lg:py-40">
				<h1 className="mb-4 text-4xl font-bold sm:mb-6 sm:text-center sm:text-5xl lg:text-7xl">
					Enhance Your <br />
					<AuroraText>Online Experience</AuroraText>
				</h1>

				<p className="text-muted-foreground mb-8 max-w-md text-base sm:mx-auto sm:mb-10 sm:max-w-lg sm:text-center sm:text-lg lg:max-w-2xl">
					I transform your ideas into fast, responsive, and modern websites and applications that provide an intuitive
					and exceptional user experience
				</p>

				<footer className="flex items-center gap-4 sm:justify-center">
					<ButtonLink href={PROJECTS_ROUTE} size="lg">
						Project Showcase
					</ButtonLink>
					<ButtonLink href={CONTACT_ROUTE} variant="outline" size="lg">
						Contact me
					</ButtonLink>
				</footer>
			</article>
		</header>
	);
}

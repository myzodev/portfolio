import { MoveDownRightIcon } from "lucide-react";
import { ArrowRightIcon } from "lucide-react";

import { CONTACT_ROUTE, PROJECTS_ROUTE } from "@/utils/routes";

import { AuroraText } from "@/components/magicui/aurora-text";
import { Highlighter } from "@/components/magicui/highlighter";
import { Ripple } from "@/components/magicui/ripple";
import ButtonLink from "@/components/ui/ButtonLink";

export default function HeroBlock() {
	return (
		<header className="relative overflow-hidden">
			<Ripple mainCircleOpacity={0.28} numCircles={10} />

			<div className="from-background/0 to-background absolute inset-0 z-0 bg-radial to-70%" />

			<article className="relative z-10 container py-20 lg:py-32">
				<h1 className="mb-4 text-center text-4xl font-bold sm:mb-6 sm:text-5xl lg:text-7xl">
					Making Your <br />
					<AuroraText>Digital Product</AuroraText> Shine
				</h1>

				<p className="text-muted-foreground mx-auto mb-8 max-w-md text-center text-base sm:mb-10 sm:max-w-lg sm:text-lg lg:max-w-xl">
					I transform your ideas into fast, responsive, and modern digital products that provide an{" "}
					<Highlighter action="underline" color="#7371fc" padding={1} iterations={2} animationDuration={300}>
						exceptional experience
					</Highlighter>
					.
				</p>

				<footer className="flex items-center justify-center gap-2">
					<ButtonLink href={CONTACT_ROUTE} size="lg">
						Get in touch
					</ButtonLink>
					<ButtonLink href={PROJECTS_ROUTE} variant="outline" size="lg">
						See projects
						<ArrowRightIcon className="size-4" />
					</ButtonLink>
				</footer>

				<div className="absolute top-4 left-4">
					<MoveDownRightIcon className="size-4" />
				</div>
			</article>
		</header>
	);
}

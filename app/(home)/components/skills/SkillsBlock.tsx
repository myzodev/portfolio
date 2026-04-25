import { MoveDownLeftIcon } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/magicui/scroll-based-velocity";

import { SkillsBeam } from "./SkillsBeam";

export default function SkillsBlock() {
	return (
		<section className="overflow-hidden">
			<ScrollVelocityContainer className="text-muted-foreground/15 -rotate-1 text-4xl font-bold md:text-7xl">
				<ScrollVelocityRow className="font-heading md:py-2" baseVelocity={3} direction={1}>
					UI/UX DESIGN BACKEND FRONTEND
				</ScrollVelocityRow>
				<ScrollVelocityRow className="font-heading md:py-2" baseVelocity={3} direction={-1}>
					UI/UX DESIGN BACKEND FRONTEND
				</ScrollVelocityRow>
			</ScrollVelocityContainer>

			<div className="container pt-10 pb-20 lg:pt-24 lg:pb-32">
				<header className="mb-4 flex items-center justify-between md:mb-6">
					<SectionHeading>What can I offer you?</SectionHeading>
					<MoveDownLeftIcon className="size-4" />
				</header>

				<SkillsBeam />
			</div>
		</section>
	);
}

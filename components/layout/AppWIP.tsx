import { HOME_ROUTE } from "@/utils/routes";
import { cn } from "@/utils/utils";

import { AuroraText } from "../magicui/aurora-text";
import ButtonLink from "../ui/ButtonLink";

type Props = {
	size?: "screen" | "small";
	showButton?: boolean;
};

export default function AppWIP({ size = "screen", showButton = true }: Props) {
	const sectionSizeClasses = size === "screen" ? "h-[calc(100dvh-4rem)]" : "py-20 md:py-32";

	return (
		<section>
			<div className="container">
				<div className={cn("flex flex-col items-center justify-center", sectionSizeClasses)}>
					<h1 className="mb-6 text-center text-4xl font-bold sm:mb-8 sm:text-5xl lg:text-7xl">
						Work in <AuroraText>Progress</AuroraText>
					</h1>

					{showButton ? (
						<footer>
							<ButtonLink href={HOME_ROUTE} size="lg">
								Go Home
							</ButtonLink>
						</footer>
					) : null}
				</div>
			</div>
		</section>
	);
}

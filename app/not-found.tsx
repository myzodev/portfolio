import { HOME_ROUTE } from "@/utils/routes";

import { AuroraText } from "@/components/magicui/aurora-text";
import ButtonLink from "@/components/ui/ButtonLink";

export default function NotFound() {
	return (
		<section>
			<div className="container">
				<div className="flex h-[calc(100dvh-4rem)] flex-col items-center justify-center">
					<h1 className="mb-6 text-center text-4xl font-bold sm:mb-8 sm:text-5xl lg:text-7xl">
						<AuroraText>404</AuroraText>
						<span className="block">Page Not Found</span>
					</h1>

					<div>
						<ButtonLink href={HOME_ROUTE} size="lg">
							Go Home
						</ButtonLink>
					</div>
				</div>
			</div>
		</section>
	);
}

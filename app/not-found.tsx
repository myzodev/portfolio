import { HOME_ROUTE } from "@/utils/routes";

import ButtonLink from "@/components/ButtonLink";
import { AuroraText } from "@/components/ui/aurora-text";

export default function NotFound() {
	return (
		<section>
			<div className="container">
				<div className="flex h-[calc(100dvh-4rem)] flex-col items-center justify-center">
					<h1 className="mb-6 text-center text-4xl font-bold sm:mb-8 sm:text-5xl lg:text-7xl">
						<AuroraText>404</AuroraText>
						Page Not Found
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

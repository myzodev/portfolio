import { HOME_ROUTE } from "@/utils/routes";

import ButtonLink from "../ButtonLink";
import { AuroraText } from "../ui/aurora-text";

export default function AppWIP() {
	return (
		<section>
			<div className="container">
				<div className="flex h-[calc(100dvh-4rem)] flex-col items-center justify-center">
					<h1 className="mb-6 text-center text-4xl font-bold sm:mb-8 sm:text-5xl lg:text-7xl">
						Work in <AuroraText>Progress</AuroraText>
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

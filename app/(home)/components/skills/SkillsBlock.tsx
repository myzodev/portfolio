import { MoveDownLeftIcon } from "lucide-react";
import { File, Search, Settings } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";

export default function SkillsBlock() {
	return (
		<section className="container">
			<div className="border-border/50 border-t py-32">
				<header className="mb-6 flex items-center justify-between">
					<SectionHeading>What can I offer you?</SectionHeading>
					<MoveDownLeftIcon className="size-4" />
				</header>

				<div className="relative h-[500px] w-full overflow-hidden">
					<OrbitingCircles>
						<File />
						<Settings />
						<File />
					</OrbitingCircles>

					<OrbitingCircles radius={100} reverse>
						<File />
						<Settings />
						<File />
						<Search />
					</OrbitingCircles>
				</div>
			</div>
		</section>
	);
}

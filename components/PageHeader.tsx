import { MoveDownRightIcon } from "lucide-react";

import { cn } from "@/utils/utils";

import { AuroraText } from "./magicui/aurora-text";

type Props = {
	text: string;
	highlightText: string;
	offsetClasssName?: string;
};

export default function PageHeader({ offsetClasssName, text, highlightText }: Props) {
	if (!text || !highlightText) {
		return null;
	}

	const offsetClasses = offsetClasssName ? offsetClasssName : "pt-12 pb-12 lg:pb-20 lg:pt-24";

	return (
		<header className={cn("relative container overflow-hidden", offsetClasses)}>
			<MoveDownRightIcon className="mb-4 size-4" />

			<h1 className="text-4xl font-bold sm:text-5xl lg:text-7xl">
				{text} <br />
				<AuroraText>{highlightText}</AuroraText>
			</h1>
		</header>
	);
}

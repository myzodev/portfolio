import clsx from "clsx";

import { AVAILABILITY, OPEN_FOR_WORK } from "@/constants/site";

import Badge from "./Badge";

import type { BadgeVariant } from "./Badge";

interface Props {
	className?: string;
	variant?: BadgeVariant;
	inactiveVariant?: BadgeVariant;
}

export default function AvailabilityBadge({ className = "", variant = "emerald", inactiveVariant = "dimmed" }: Props) {
	return (
		<Badge
			className={clsx(className, !OPEN_FOR_WORK && "opacity-50")}
			variant={OPEN_FOR_WORK ? variant : inactiveVariant}
		>
			<span className={clsx("size-2 rounded-full bg-current", OPEN_FOR_WORK && "animate-pulse")} />
			<span className="mb-0.5">{AVAILABILITY}</span>
		</Badge>
	);
}

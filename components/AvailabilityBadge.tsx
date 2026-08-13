"use client";

import { useT } from "next-i18next/client";

import clsx from "clsx";

import { OPEN_FOR_WORK } from "@/constants/site";

import Badge from "./Badge";

import type { BadgeVariant } from "./Badge";

interface Props {
	className?: string;
	variant?: BadgeVariant;
	inactiveVariant?: BadgeVariant;
}

export default function AvailabilityBadge({ className = "", variant = "emerald", inactiveVariant = "dimmed" }: Props) {
	const { t } = useT();

	return (
		<Badge
			className={clsx(className, !OPEN_FOR_WORK && "opacity-50")}
			variant={OPEN_FOR_WORK ? variant : inactiveVariant}
		>
			<span className={clsx("size-2 rounded-full bg-current", OPEN_FOR_WORK && "animate-pulse")} />
			<span className="mb-0.5">{t("common.availability")}</span>
		</Badge>
	);
}

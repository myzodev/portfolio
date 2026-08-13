"use client";

import { useT } from "next-i18next/client";

export default function MadeInLabel({ className = "" }: { className?: string }) {
	const { t } = useT();

	return <small className={className}>{t("common.madeIn")}</small>;
}

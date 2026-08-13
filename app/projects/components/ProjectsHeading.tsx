"use client";

import { useT } from "next-i18next/client";

export default function ProjectsHeading() {
	const { t } = useT();

	return t("projects.pageTitle");
}

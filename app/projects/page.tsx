import EmailSlider from "@/components/EmailSlider";
import PageHeader from "@/components/PageHeader";

import { PROJECTS_ROUTE } from "@/constants/routes";

import { getStaticT } from "../i18n/server";
import ProjectsHeading from "./components/ProjectsHeading";
import ProjectsList from "./components/ProjectsList";

import type { Metadata } from "next/types";

export async function generateMetadata(): Promise<Metadata> {
	const { t } = await getStaticT();

	return {
		title: t("meta.projects.title"),
		description: t("meta.projects.description"),
		alternates: {
			canonical: PROJECTS_ROUTE,
			languages: {
				sk: PROJECTS_ROUTE,
				en: `${PROJECTS_ROUTE}?lang=en`,
			},
		},
	};
}

export default function ProjectsPage() {
	return (
		<>
			<PageHeader>
				<ProjectsHeading />
			</PageHeader>

			<ProjectsList />
			<EmailSlider />
		</>
	);
}

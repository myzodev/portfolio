import EmailSlider from "@/components/EmailSlider";

import { HOME_ROUTE } from "@/constants/routes";

import { getStaticT } from "../i18n/server";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import HelpSection from "./components/HelpSection";
import ProjectsSection from "./components/ProjectsSection";
import HeroSection from "./components/hero/HeroSection";

import type { Metadata } from "next/types";

export async function generateMetadata(): Promise<Metadata> {
	const { t } = await getStaticT();

	return {
		title: t("meta.home.title"),
		description: t("meta.home.description"),
		alternates: {
			canonical: HOME_ROUTE,
			languages: {
				sk: HOME_ROUTE,
				en: `${HOME_ROUTE}?lang=en`,
			},
		},
	};
}

export default function HomePage() {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<ProjectsSection />
			<HelpSection />
			<ExperienceSection />
			<EmailSlider />
		</>
	);
}

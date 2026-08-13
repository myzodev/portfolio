import EmailSlider from "@/components/EmailSlider";

import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import HelpSection from "./components/HelpSection";
import ProjectsSection from "./components/ProjectsSection";
import HeroSection from "./components/hero/HeroSection";

import type { Metadata } from "next/types";

export const metadata: Metadata = {
	title: "Myžo • Making Your Digital Product Shine",
	description:
		"Transform your ideas into fast, responsive, and modern digital products that provide an exceptional experience.",
};

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

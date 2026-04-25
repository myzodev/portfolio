import type { Metadata } from "next";

import ProjectsBlock from "@/components/projects/ProjectsBlock";

import projects from "@/libs/projects";

import HeroBlock from "./components/HeroBlock";
import ExperienceBlock from "./components/experience/ExperienceBlock";
import SkillsBlock from "./components/skills/SkillsBlock";

export const metadata: Metadata = {
	title: "Myžo • Enhance Your Online Experience",
	description:
		"Transform your ideas into fast, responsive, and modern websites and applications that provide an intuitive and exceptional user experience",
};

export default function Page() {
	return (
		<>
			<HeroBlock />
			<ProjectsBlock projects={projects.slice(0, 4)} />
			<SkillsBlock />
			<ExperienceBlock />
		</>
	);
}

import ProjectsBlock from "@/components/projects/ProjectsBlock";

import projects from "@/libs/projects";

import HeroBlock from "./components/HeroBlock";
import ExperienceBlock from "./components/experience/ExperienceBlock";
import SkillsBlock from "./components/skills/SkillsBlock";

export default function HomePage() {
	return (
		<>
			<HeroBlock />
			<ProjectsBlock heading="Fresh From Development" projects={projects.slice(0, 4)} />
			<SkillsBlock />
			<ExperienceBlock />
		</>
	);
}

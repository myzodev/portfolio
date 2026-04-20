import HeroBlock from "./components/HeroBlock";
import ExperienceBlock from "./components/experience/ExperienceBlock";
import RecentProjectsBlock from "./components/projects/ProjectsBlock";
import SkillsBlock from "./components/skills/SkillsBlock";

export default function Page() {
	return (
		<>
			<HeroBlock />
			<RecentProjectsBlock />
			<SkillsBlock />
			<ExperienceBlock />
		</>
	);
}

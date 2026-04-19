import HeroBlock from "./components/HeroBlock";
import RecentProjectsBlock from "./components/projects/ProjectsBlock";
import SkillsBlock from "./components/skills/SkillsBlock";

export default function Page() {
	return (
		<>
			<HeroBlock />
			<RecentProjectsBlock />
			<SkillsBlock />
		</>
	);
}

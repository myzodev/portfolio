import EmailSlider from "@/components/EmailSlider";

import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import HelpSection from "./components/HelpSection";
import ProjectsSection from "./components/ProjectsSection";
import HeroSection from "./components/hero/HeroSection";

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

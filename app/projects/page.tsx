import EmailSlider from "@/components/EmailSlider";
import PageHeader from "@/components/PageHeader";

import ProjectsList from "./components/ProjectsList";

export default function ProjectsPage() {
	return (
		<>
			<PageHeader>
				What I’ve been <br /> working on
			</PageHeader>

			<ProjectsList />
			<EmailSlider />
		</>
	);
}

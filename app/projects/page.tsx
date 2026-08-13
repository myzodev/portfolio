import EmailSlider from "@/components/EmailSlider";
import PageHeader from "@/components/PageHeader";

import ProjectsList from "./components/ProjectsList";

import type { Metadata } from "next/types";

export const metadata: Metadata = {
	title: "Myžo • Projects",
	description: "What I’ve been working on",
};

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

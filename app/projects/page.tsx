import type { Metadata } from "next";

import ProjectsPage from "./content";

export const metadata: Metadata = {
	title: "Myžo • What I've been working on",
	description: "Showcase of projects I've been working on",
};

export default function Page() {
	return <ProjectsPage />;
}

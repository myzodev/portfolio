export type ProjectColor = "green" | "lime-green" | "red" | "orange" | "yellow" | "blue" | "sky-blue" | "pink" | "gray";

export type ProjectPalette = {
	bgText: string;
	bgImage: string;
	textColor: string;
	accentColor: string;
};

type Project = {
	title: string;
	slug: string;
	role: string;
	url: string;
	color: ProjectColor;
	wip?: boolean;
	year: string;
	active?: boolean;
	description: string;
	image?: string;
	selected?: boolean;
	content?: string | React.ReactNode;
};

export default Project;

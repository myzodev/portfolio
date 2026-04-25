type Project = {
	title: string;
	slug: string;
	role: "Development" | "Design" | "Development & Design" | "Template Customization";
	url: string;
	color: string;
	wip?: boolean;
	year: string;
	active?: boolean;
};

export default Project;

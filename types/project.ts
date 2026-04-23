type Project = {
	title: string;
	slug: string;
	role: "Development" | "Design" | "Development & Design";
	url: string;
	color: string;
	wip?: boolean;
};

export default Project;

type Project = {
	title: string;
	slug: string;
	role: string;
	url: string;
	color: string;
	wip?: boolean;
	year: string;
	active?: boolean;
	content?: string | React.ReactNode;
};

export default Project;

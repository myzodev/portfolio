export const createMetadata = (title: string, description: string) => {
	return {
		title,
		description,
		openGraph: {
			title,
			description,
			siteName: "Myžo",
			type: "website",
			image: "/images/og-image.png",
		},
	};
};

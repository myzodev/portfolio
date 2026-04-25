"use client";

import { Parallax } from "react-parallax";

type Props = {
	title: string;
	slug: string;
};

export default function ProjectsItemImage({ title, slug }: Props) {
	if (!title || !slug) return null;

	return (
		<Parallax
			className="aspect-7/4 w-full overflow-hidden rounded-lg"
			bgImage={`/images/projects/${slug}.png`}
			bgImageAlt={`${title} project screenshot`}
			bgImageStyle={{
				objectFit: "cover",
				height: "110%",
			}}
			strength={20}
		>
			<div className="h-full w-full" />
		</Parallax>
	);
}

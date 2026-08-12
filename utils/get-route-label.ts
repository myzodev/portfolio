import menuLinksData from "@/data/menu-links";

const getRouteLabel = (pathname: string) => {
	const link = menuLinksData.find((item) => item.href === pathname);

	if (link) return link.label;

	const segment = pathname.split("/").filter(Boolean).at(-1);

	if (!segment) return "Home";

	return segment.replace(/-/g, " ").replace(/^./, (character) => character.toUpperCase());
};

export default getRouteLabel;

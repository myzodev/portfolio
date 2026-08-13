import menuLinksData from "@/data/menu-links";

import type { TFunction } from "i18next";

const getRouteLabel = (pathname: string, t: TFunction) => {
	const link = menuLinksData.find((item) => item.href === pathname);

	if (link) return t(`common.menu.${link.key}.label`);

	const segment = pathname.split("/").filter(Boolean).at(-1);

	if (!segment) return t("common.menu.home.label");

	return segment.replace(/-/g, " ").replace(/^./, (character) => character.toUpperCase());
};

export default getRouteLabel;

import { CONTACT_ROUTE, HOME_ROUTE, PROJECTS_ROUTE } from "@/constants/routes";

import type MenuLink from "@/types/menu-link";

const menuLinksData: MenuLink[] = [
	{ key: "home", href: HOME_ROUTE },
	{ key: "projects", href: PROJECTS_ROUTE },
	{ key: "contact", href: CONTACT_ROUTE },
];

export default menuLinksData;

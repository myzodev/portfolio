import { CONTACT_ROUTE, HOME_ROUTE, PROJECTS_ROUTE } from "@/constants/routes";

import type Link from "@/types/link";

const menuLinksData: Link[] = [
	{ label: "Home", href: HOME_ROUTE, caption: "Start here" },
	{ label: "Projects", href: PROJECTS_ROUTE, caption: "Selected work" },
	{ label: "Contact", href: CONTACT_ROUTE, caption: "Let's talk" },
];

export default menuLinksData;

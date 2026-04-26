import { AnchorHTMLAttributes } from "react";

type Link = {
	icon: React.ElementType;
	label: string;
	href: string;
	target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
};

export default Link;

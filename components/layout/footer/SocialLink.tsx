import { AnchorHTMLAttributes } from "react";

import { Separator } from "@/components/magicui/separator";
import ButtonLink from "@/components/ui/ButtonLink";

type Props = {
	icon: React.ReactNode;
	label: string;
};

export default function SocialLink({ icon, label = "", ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & Props) {
	if (!icon || !label) return null;

	return (
		<ButtonLink variant="outline" href={props.href} target={props.target}>
			{icon}
			<Separator className="my-2.5" orientation="vertical" />
			{label}
		</ButtonLink>
	);
}

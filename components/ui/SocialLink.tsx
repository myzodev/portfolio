import { Separator } from "@/components/magicui/separator";
import ButtonLink from "@/components/ui/ButtonLink";

import type Link from "@/types/link";

export default function SocialLink({ icon: Icon, label = "", href = "", target = "_blank" }: Link) {
	if (!Icon || !label) return null;

	return (
		<ButtonLink className="gap-2" variant="outline" href={href} target={target}>
			<Icon className="size-4" />
			<Separator className="my-2.5" orientation="vertical" />
			{label}
		</ButtonLink>
	);
}

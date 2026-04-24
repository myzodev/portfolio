import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

import Link from "next/link";

import type { VariantProps } from "class-variance-authority";

import { Button, buttonVariants } from "@/components/magicui/button";

type Props = {
	href?: string;
	variant?: VariantProps<typeof buttonVariants>["variant"];
	size?: VariantProps<typeof buttonVariants>["size"];
	target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
};

export default function ButtonLink({
	href = "",
	children,
	variant = "default",
	size = "default",
	target = "_self",
	...props
}: ButtonHTMLAttributes<HTMLButtonElement> & Props) {
	const isLink = Boolean(href);

	return (
		<Button className={props.className} variant={variant} size={size} asChild={isLink} {...props}>
			{isLink ? (
				<Link href={href} target={target}>
					{children}
				</Link>
			) : (
				children
			)}
		</Button>
	);
}

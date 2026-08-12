import Link from "next/link";

import clsx from "clsx";

export type ButtonVariant = "peach" | "ink" | "outline";

interface Props {
	children: React.ReactNode;
	className?: string;
	variant?: ButtonVariant;
	href?: string;
	target?: React.AnchorHTMLAttributes<HTMLAnchorElement>["target"];
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const variantClasses: Record<ButtonVariant, string> = {
	peach: "bg-peach text-powder-petal hover:bg-peach/90",
	ink: "bg-ink-black text-powder-petal hover:bg-ink-black/90",
	outline: "border-current border hover:bg-current/10",
};

export default function Button({
	children,
	className = "",
	variant = "peach",
	href,
	target,
	type = "button",
	disabled = false,
	onClick,
}: Props) {
	const classes = clsx(
		"sans-md inline-flex items-center justify-center rounded-full px-6 py-2 font-semibold whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-60",
		variantClasses[variant],
		className,
	);

	const isLink = Boolean(href) && href;

	if (isLink) {
		return (
			<Link className={classes} href={href} target={target}>
				{children}
			</Link>
		);
	}

	return (
		<button className={classes} disabled={disabled} onClick={onClick} type={type}>
			{children}
		</button>
	);
}

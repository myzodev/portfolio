import clsx from "clsx";

export type BadgeVariant = "dimmed" | "ink" | "peach" | "emerald";

export type BadgeSize = "base" | "sm";

interface Props {
	children: React.ReactNode;
	className?: string;
	size?: BadgeSize;
	variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
	dimmed: "border-ink-black-dimmed text-ink-black-dimmed",
	ink: "border-ink-black/25 text-ink-black",
	peach: "border-peach text-peach",
	emerald: "border-emerald text-emerald",
};

const sizeClasses: Record<BadgeSize, string> = {
	base: "px-4 py-1.5 sans-md",
	sm: "px-3 py-1 sans-sm",
};

export default function Badge({ children, className = "", size = "base", variant = "dimmed" }: Props) {
	return (
		<span
			className={clsx(
				"flex items-center gap-1.5 rounded-full border font-semibold whitespace-nowrap",
				variantClasses[variant],
				sizeClasses[size],
				className,
			)}
		>
			{children}
		</span>
	);
}

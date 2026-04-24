import { cn } from "@/utils/utils";

type Props = {
	children: React.ReactNode;
	className?: string;
};

export default function SectionHeading({ children, className }: Props) {
	return <h2 className={cn("text-sm font-bold tracking-wider uppercase", className)}>{children}</h2>;
}
